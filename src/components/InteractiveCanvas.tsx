import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'brush' | 'sparkle';
}

const InteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });
  const [isLoaded, setIsLoaded] = useState(false);

  const colors = [
    'hsl(280, 100%, 70%)', // Primary purple
    'hsl(320, 100%, 70%)', // Secondary pink
    'hsl(200, 100%, 70%)', // Accent blue
    'hsl(45, 100%, 70%)',  // Golden yellow
    'hsl(340, 100%, 65%)', // Bright pink
    'hsl(260, 100%, 60%)', // Deep purple
  ];

  const createParticle = (x: number, y: number, type: 'brush' | 'sparkle'): Particle => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = Math.random() * Math.PI * 2;
    const speed = type === 'brush' ? 0.5 + Math.random() * 1.5 : 0.2 + Math.random() * 0.8;
    
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: type === 'brush' ? 60 + Math.random() * 40 : 30 + Math.random() * 30,
      maxLife: type === 'brush' ? 100 : 60,
      size: type === 'brush' ? 2 + Math.random() * 4 : 1 + Math.random() * 2,
      color,
      type
    };
  };

  const updateParticles = () => {
    const particles = particlesRef.current;
    
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Apply gravity and friction
      particle.vy += 0.02;
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Decrease life
      particle.life--;
      
      // Remove dead particles
      if (particle.life <= 0) {
        particles.splice(i, 1);
      }
    }
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    const particles = particlesRef.current;
    
    particles.forEach(particle => {
      const alpha = particle.life / particle.maxLife;
      
      ctx.save();
      ctx.globalAlpha = alpha;
      
      if (particle.type === 'brush') {
        // Draw brush stroke
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Add blur effect for brush strokes
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fill();
      } else {
        // Draw sparkle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Add sparkle cross
        ctx.beginPath();
        ctx.moveTo(particle.x - particle.size * 2, particle.y);
        ctx.lineTo(particle.x + particle.size * 2, particle.y);
        ctx.moveTo(particle.x, particle.y - particle.size * 2);
        ctx.lineTo(particle.x, particle.y + particle.size * 2);
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      ctx.restore();
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    updateParticles();
    drawParticles(ctx);

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseRef.current = { x, y, isMoving: true };

    // Create brush strokes
    if (Math.random() < 0.7) {
      particlesRef.current.push(createParticle(x, y, 'brush'));
    }

    // Create sparkles
    if (Math.random() < 0.3) {
      particlesRef.current.push(createParticle(x, y, 'sparkle'));
    }

    // Limit particles for performance
    if (particlesRef.current.length > 150) {
      particlesRef.current.splice(0, particlesRef.current.length - 150);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Create particles for touch
    if (Math.random() < 0.8) {
      particlesRef.current.push(createParticle(x, y, 'brush'));
    }
    if (Math.random() < 0.4) {
      particlesRef.current.push(createParticle(x, y, 'sparkle'));
    }

    // Limit particles
    if (particlesRef.current.length > 100) {
      particlesRef.current.splice(0, particlesRef.current.length - 100);
    }
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();
    setIsLoaded(true);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default InteractiveCanvas;