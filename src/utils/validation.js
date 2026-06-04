export const validateForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  const phoneRegex = /^[+]?[\d\s()]{10,}$/;
  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Service validation
  if (!formData.service) {
    errors.service = 'Please select a service';
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return errors;
};

export const isFormValid = (formData) => {
  return Object.keys(validateForm(formData)).length === 0;
};
