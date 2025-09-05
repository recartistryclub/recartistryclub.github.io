import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY) {
        setScrollDir('down');
      } else {
        setScrollDir('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    //{ name: 'Gallery', href: '#gallery' },
    { name: 'Our Team', href: '#our-team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: scrollDir === 'down' ? -120 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          src="/logo.png"
          alt="Artistry Club Logo"
          className="w-20 h-20 object-contain"
        />

        {/* Nav items as glassy buttons */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-4 py-2 text-sm font-medium hover-lift"
            >
              <a
                href={item.href}
                className="text-black font-medium transition-colors hover:text-pink-400"
              >
                {item.name}
              </a>
            </motion.button>
          ))}
        </div>

        {/* Join Club Button */}
        <motion.a
            href="https://linktr.ee/rec_artistry"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-6 py-2 text-sm font-medium hover-lift text-black"
          >
            Join Club
        </motion.a>

      </div>
    </motion.nav>
  );
};

export default Navbar;
