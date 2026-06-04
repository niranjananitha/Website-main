import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoIcon from '../assets/logo-icon.jpeg';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'College Collaboration', path: '/college-collaboration' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        className="fixed top-0 w-full h-20 bg-background dark:bg-surface-container border-b border-outline-variant dark:border-outline z-50 transition-colors"
      >
        <div className="flex justify-between items-center px-6 md:px-12 w-full h-full">
          <motion.div variants={logoVariants}>
            <Link to="/" className="flex items-center h-full py-3 gap-3 group">
              <div>
                <img src={logoIcon} alt="Aroganam Technologies" className="h-10 md:h-12 object-contain group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-display-sm text-sm md:text-base font-bold text-black dark:text-white tracking-wider uppercase">
                  Aroganam
                </span>
                <span className="font-label-caps text-label-caps text-[10px] md:text-xs text-black/75 dark:text-white/75 tracking-[0.25em] md:tracking-[0.3em] uppercase">
                  Technologies
                </span>
              </div>
            </Link>
          </motion.div>
          
          <motion.div
            variants={navVariants}
            className="hidden md:flex items-center gap-4 lg:gap-10 h-full"
          >
            {navLinks.map((link) => {
              const isActive = link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);
              return (
                <motion.div
                  key={link.name}
                  variants={linkVariants}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-full flex"
                >
                  <Link
                    to={link.path}
                    className={`text-base font-semibold h-full flex items-center px-3 tracking-wide transition-all duration-200 border-b-2
                      ${isActive 
                        ? 'text-on-background dark:text-tertiary-fixed-dim font-bold border-tertiary dark:border-tertiary-fixed-dim opacity-100' 
                        : 'text-on-surface dark:text-on-surface-variant opacity-70 hover:opacity-100 border-transparent'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={logoVariants}
            className="flex items-center gap-2 md:gap-4"
          >


            <Link to="/contact" className="hidden md:flex btn-brutal-primary font-semibold text-base px-4 lg:px-8 py-3 h-11 items-center justify-center tracking-wide hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-tertiary/60 focus:ring-offset-2 focus:ring-offset-background">
              GET STARTED
            </Link>
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 text-on-surface dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded focus:outline-none focus:ring-2 focus:ring-tertiary/60 focus:ring-offset-2 focus:ring-offset-background"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <motion.span
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="material-symbols-outlined"
                style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}
              >
                {mobileMenuOpen ? 'close' : 'menu'}
              </motion.span>
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        location={location}
      />
    </>
  );
}
