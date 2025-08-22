import { useEffect, useRef, useState } from 'react';

interface PaintBlob {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  offset: number;
  opacity: number;
}

const ScrollCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const blobsRef = useRef<PaintBlob[]>([]);
  const scrollYRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const colors = [
    'hsl(280, 100%, 70%)', // Primary purple
    'hsl(320, 100%, 70%)', // Secondary pink
    'hsl(200, 100%, 70%)', // Accent blue
    'hsl(45, 100%, 70%)',  // Golden yellow
    'hsl(340, 100%, 65%)', // Bright pink
    'hsl(260, 100%, 60%)', // Deep purple
    'hsl(300, 80%, 65%)',  // Magenta
    'hsl(180, 90%, 60%)',  // Cyan
  ];

  const createBlob = (): PaintBlob => {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 80 + Math.random() * 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: 0.2 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
      opacity: 0.1 + Math.random() * 0.2,
    };
  };

  const initializeBlobs = () => {
    blobsRef.current = [];
    const numBlobs = Math.min(15, Math.max(8, Math.floor(window.innerWidth / 120)));
    
    for (let i = 0; i < numBlobs; i++) {
      blobsRef.current.push(createBlob());
    }
  };

  const drawBlob = (ctx: CanvasRenderingContext2D, blob: PaintBlob, time: number) => {
    const scrollInfluence = scrollYRef.current * 0.0005;
    const animatedX = blob.x + Math.sin(time * blob.speed + blob.offset) * 30;
    const animatedY = blob.y + Math.cos(time * blob.speed + blob.offset + scrollInfluence) * 20;
    const animatedSize = blob.size + Math.sin(time * blob.speed * 0.5) * 20;

    ctx.save();
    ctx.globalAlpha = blob.opacity;
    
    // Create gradient for paint-like effect
    const gradient = ctx.createRadialGradient(
      animatedX, animatedY, 0,
      animatedX, animatedY, animatedSize / 2
    );
    
    gradient.addColorStop(0, blob.color);
    gradient.addColorStop(0.7, blob.color.replace('70%)', '40%)'));
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    
    // Draw organic blob shape
    ctx.beginPath();
    const points = 8;
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const radius = animatedSize / 2 + Math.sin(angle * 3 + time * blob.speed) * 15;
      const x = animatedX + Math.cos(angle) * radius;
      const y = animatedY + Math.sin(angle) * radius;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fill();
    
    ctx.restore();
  };

  const animate = (time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all blobs
    blobsRef.current.forEach(blob => {
      drawBlob(ctx, blob, time * 0.001);
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleScroll = () => {
    scrollYRef.current = window.pageYOffset;
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeBlobs();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();
    setIsLoaded(true);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default ScrollCanvas;