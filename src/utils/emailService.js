import emailjs from 'emailjs-com';

// Initialize EmailJS - replace with your actual service ID
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_key';

const isEmailJsConfigured = [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY].every(
  (value) => value && !value.startsWith('default_')
);

// Initialize EmailJS when configured
if (isEmailJsConfigured) {
  emailjs.init(PUBLIC_KEY);
}

export const sendContactEmail = async (formData) => {
  if (!isEmailJsConfigured) {
    return sendContactEmailFallback(formData, true);
  }

  const templateParams = {
    to_email: 'aroganamtech@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    service: formData.service,
    message: formData.message,
    reply_to: formData.email,
  };

  const wait = (ms) => new Promise((res) => setTimeout(res, ms));
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      return {
        success: true,
        message: 'Email sent successfully! We will contact you soon.',
        response,
      };
    } catch (error) {
      console.error(`EmailJS attempt ${attempt} failed:`, error);
      if (attempt < maxAttempts) {
        // exponential backoff before retrying
        await wait(500 * attempt);
        continue;
      }
      // final failure - fallback to mail client
      return sendContactEmailFallback(formData, true);
    }
  }
};

// Fallback to mailto if EmailJS is not configured or if EmailJS fails
export const sendContactEmailFallback = (formData, isFallback = false) => {
  const subject = encodeURIComponent(`Service Enquiry: ${formData.service}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone}\n` +
    `Service: ${formData.service}\n\n` +
    `Message:\n${formData.message}`
  );

  window.location.href = `mailto:aroganamtech@gmail.com?subject=${subject}&body=${body}`;

  return {
    success: true,
    message: isFallback
      ? 'Email service was not set up or failed. Your mail client has been opened so you can send the message directly.'
      : 'Your mail client has been opened so you can send the message directly.',
  };
};
