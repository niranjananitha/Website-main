import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu({ isOpen, onClose, navLinks, location }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);
  const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.2 } }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 }
    })
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <motion.div
            id="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-0 top-0 h-screen w-64 bg-background dark:bg-surface-container z-50 border-r border-outline-variant md:hidden overflow-y-auto"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="pt-24 pb-6">
              {/* Navigation Links */}
              <div className="px-6 flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);
                  return (
                    <motion.div
                      key={link.name}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={link.path}
                        onClick={handleLinkClick}
                        className={`block w-full px-4 py-3 rounded transition-all duration-200 font-semibold text-base
                          ${isActive
                            ? 'bg-primary text-on-primary dark:bg-tertiary-fixed-dim dark:text-on-tertiary-fixed'
                            : 'text-on-surface hover:bg-surface-container-low dark:hover:bg-surface-container-highest'
                          }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-outline-variant" />



              {/* CTA Button */}
              <div className="px-6 mt-6">
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="btn-brutal-primary font-semibold text-base px-4 py-3 w-full text-center block uppercase focus:outline-none focus:ring-2 focus:ring-tertiary/60 focus:ring-offset-2 focus:ring-offset-background"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
