import { motion } from 'framer-motion';

const FloatingShapes = () => {
  const shapes = [
    { size: 100, color: 'hsl(280 100% 70%)', delay: 0, duration: 6 },
    { size: 150, color: 'hsl(320 100% 70%)', delay: 1, duration: 8 },
    { size: 80, color: 'hsl(200 100% 70%)', delay: 2, duration: 7 },
    { size: 120, color: 'hsl(45 100% 70%)', delay: 0.5, duration: 9 },
    { size: 90, color: 'hsl(260 100% 60%)', delay: 1.5, duration: 6 },
    { size: 60, color: 'hsl(340 100% 65%)', delay: 2.5, duration: 8 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-sm opacity-20"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ 
            x: 0, 
            y: 0, 
            rotate: 0,
            scale: 0 
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            rotate: [0, 180, 360],
            scale: [0, 1, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Additional geometric shapes */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`triangle-${index}`}
          className="absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ rotate: 0, scale: 0 }}
          animate={{ 
            rotate: 360,
            scale: [0, 1, 0.5, 1],
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0]
          }}
          transition={{
            duration: 10 + index,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className="w-0 h-0"
            style={{
              borderLeft: '20px solid transparent',
              borderRight: '20px solid transparent',
              borderBottom: `40px solid hsl(${280 + index * 20} 100% 70%)`
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;