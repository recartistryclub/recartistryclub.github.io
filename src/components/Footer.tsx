import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'YouTube', url: '#', icon: '🎥' },
    { name: 'Discord', url: '#', icon: '💬' }
  ];

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative py-16 mt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Artistry Club
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              A vibrant community where creativity knows no bounds. Join us in exploring the endless possibilities of artistic expression.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-3 hover-lift group"
                  aria-label={link.name}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform block">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                    className="text-muted-foreground hover:text-primary transition-all"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-foreground">
              Stay Updated
            </h4>
            <p className="text-muted-foreground mb-4">
              Get the latest news about events, workshops, and exhibitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-medium hover-lift whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-border pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <p className="text-muted-foreground mb-4 md:mb-0">
            © 2024 Artistry Club. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ color: 'hsl(var(--primary))' }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: 'hsl(var(--primary))' }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;