import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <div className="flex-grow flex flex-col pt-20 min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl text-center"
      >
        {/* 404 Number */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            variants={floatingVariants}
            animate="float"
          >
            <div className="text-9xl md:text-[150px] font-display-xl text-tertiary dark:text-tertiary-fixed-dim font-bold leading-none">
              4
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>
                0
              </span>
              4
            </div>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-headline-lg text-3xl md:text-5xl text-on-background dark:text-surface-bright mb-4 uppercase tracking-tight"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="font-body-lg text-body-lg text-on-surface-variant dark:text-on-surface-variant mb-8 max-w-xl mx-auto"
        >
          Oops! It seems like the page you're looking for doesn't exist or has been moved. Don't worry, we're here to help you get back on track.
        </motion.p>

        {/* Error Details */}
        <motion.div
          variants={itemVariants}
          className="bg-surface-container-low dark:bg-surface-container border border-outline-variant dark:border-outline p-6 md:p-8 rounded mb-8"
        >
          <p className="font-label-mono text-label-mono text-on-surface-variant dark:text-on-surface-variant mb-3">
            HTTP Error 404
          </p>
          <p className="font-body-md text-on-surface dark:text-surface-bright">
            Resource not found on our server
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="btn-brutal-primary font-label-caps text-label-caps px-8 py-4 inline-block uppercase hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-tertiary/60 focus:ring-offset-2 focus:ring-offset-background"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="btn-brutal font-label-caps text-label-caps px-8 py-4 inline-block uppercase hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-tertiary/60 focus:ring-offset-2 focus:ring-offset-background dark:bg-surface-container dark:border-outline dark:text-on-background"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-outline-variant dark:border-outline"
        >
          <p className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-surface-variant mb-6 uppercase">
            Quick Links
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body-md text-on-surface dark:text-surface-bright hover:text-tertiary dark:hover:text-tertiary-fixed-dim transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
