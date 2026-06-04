import { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { validateForm } from '../utils/validation';
import { sendContactEmail } from '../utils/emailService';
import { useSEO } from '../components/SEOHelmet';

export default function Contact() {
  useSEO('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: servicesData[0].title,
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: servicesData[0].title,
          message: ''
        });
        setErrors({});
        // Clear success state after 3 seconds
        setTimeout(() => setSubmitStatus(null), 3000);
      } else {
        setSubmitStatus('error');
        // Clear error state after 3 seconds
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
      // Clear error state after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-grow flex flex-col pt-20 min-h-[calc(100vh-80px)]">
      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-10 md:py-12 flex flex-col gap-5 grid-line-bottom animate-fade-up">
        <span className="font-label-caps text-label-caps text-outline uppercase">Contact Us</span>
        <h1 className="font-headline-lg text-3xl md:text-4xl text-on-background uppercase">Let Us Build the Right Solution With You</h1>
        <p className="font-body-lg text-body-lg max-w-3xl text-on-surface-variant">
          Choose the service you need, share your contact details, and our team will connect with you for the next step.
        </p>
      </section>

      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-up">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="border border-outline-variant bg-on-background text-background p-8 dark:bg-inverse-surface dark:text-inverse-on-surface">
            <span className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase block mb-5">Company Information</span>
            <h3 className="font-headline-md text-2xl mb-6 text-background dark:text-inverse-on-surface">Aroganam Technologies Pvt Ltd</h3>
            <div className="grid gap-4 font-body-md text-body-md text-background/80 dark:text-inverse-on-surface/85">
              <a href="tel:+919481722339" className="hover:text-tertiary-fixed-dim transition-colors">+91 94817 22339</a>
              <a href="mailto:aroganamtech@gmail.com" className="hover:text-tertiary-fixed-dim transition-colors">aroganamtech@gmail.com</a>
              <span>Bangalore | Chennai | Coimbatore</span>
            </div>
          </div>
          <div className="border border-outline-variant bg-surface-container-lowest p-8 dark:bg-surface-container">
            <h3 className="font-headline-md text-2xl mb-4">Office Hours</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant">
              Mon - Sat 10:00AM - 7:00PM<br />
              Sunday - CLOSED
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col gap-6 bg-surface-container-lowest p-6 md:p-8 border border-outline-variant dark:bg-surface-container dark:border-outline">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-on-background dark:text-on-surface">NAME *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`border ${errors.name ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-outline-variant'} bg-surface dark:bg-surface-container-low p-3 outline-none focus:border-primary dark:focus:border-tertiary-fixed-dim transition-colors text-on-surface`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-red-600 dark:text-red-400 text-sm font-medium">{errors.name}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-on-background dark:text-on-surface">PHONE NUMBER *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`border ${errors.phone ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-outline-variant'} bg-surface dark:bg-surface-container-low p-3 outline-none focus:border-primary dark:focus:border-tertiary-fixed-dim transition-colors text-on-surface`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <span className="text-red-600 dark:text-red-400 text-sm font-medium">{errors.phone}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-on-background dark:text-on-surface">EMAIL *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border ${errors.email ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-outline-variant'} bg-surface dark:bg-surface-container-low p-3 outline-none focus:border-primary dark:focus:border-tertiary-fixed-dim transition-colors text-on-surface`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-600 dark:text-red-400 text-sm font-medium">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-on-background dark:text-on-surface">SERVICE *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`border ${errors.service ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-outline-variant'} bg-surface dark:bg-surface-container-low p-3 outline-none focus:border-primary dark:focus:border-tertiary-fixed-dim transition-colors text-on-surface`}
              >
                {servicesData.map((service) => (
                  <option key={service.id} value={service.title} className="bg-surface text-on-surface">{service.title}</option>
                ))}
              </select>
              {errors.service && (
                <span className="text-red-600 dark:text-red-400 text-sm font-medium">{errors.service}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-on-background dark:text-on-surface">MESSAGE *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`border ${errors.message ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-outline-variant'} bg-surface dark:bg-surface-container-low p-3 outline-none focus:border-primary dark:focus:border-tertiary-fixed-dim transition-colors h-36 resize-none text-on-surface`}
              placeholder="Tell us about your requirement"
            />
            {errors.message && (
              <span className="text-red-600 dark:text-red-400 text-sm font-medium">{errors.message}</span>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isLoading || submitStatus === 'success'}
            whileHover={{ scale: isLoading || submitStatus === 'success' ? 1 : 1.02 }}
            whileTap={{ scale: isLoading || submitStatus === 'success' ? 1 : 0.98 }}
            className={`btn-brutal-primary font-label-caps text-label-caps px-6 py-4 mt-2 w-full uppercase transition-all ${
              isLoading || submitStatus === 'success' ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⟳</span> Sending...
              </span>
            ) : submitStatus === 'success' ? (
              '✓ ENQUIRY SENT'
            ) : submitStatus === 'error' ? (
              '✕ FAILED TO SEND'
            ) : (
              'SEND ENQUIRY'
            )}
          </motion.button>
        </form>
      </section>
    </div>
  );
}
