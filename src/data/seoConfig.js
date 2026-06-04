export const seoConfig = {
  site: {
    name: 'Aroganam Technologies',
    description: 'AI-driven IT solutions, scalable platforms, training, and digital execution support for modern businesses.',
    url: 'https://aroganam-technologies.com',
    image: 'https://aroganam-technologies.com/og-image.jpg',
    twitterHandle: '@aroganam_info'
  },
  pages: {
    home: {
      title: 'Aroganam Technologies | AI-Driven IT Solutions & Digital Transformation',
      description: 'Enterprise-grade AI solutions, cloud architecture, and digital transformation services for startups and enterprises.',
      keywords: ['AI solutions', 'digital transformation', 'cloud architecture', 'IT services']
    },
    services: {
      title: 'Services | Aroganam Technologies - Digital Solutions',
      description: 'Explore our comprehensive IT services including Cloud Architecture, AI Integration, Data Analytics, Cybersecurity, and Custom Software Development.',
      keywords: ['IT services', 'cloud services', 'AI solutions', 'software development']
    },
    solutions: {
      title: 'Solutions | Aroganam Technologies - Service-Led Paths',
      description: 'Review our tailored solutions connecting artificial intelligence, engineering, digital products, marketing, and corporate staffing.',
      keywords: ['business solutions', 'AI operations', 'staffing solutions', 'corporate training']
    },
    about: {
      title: 'About Aroganam Technologies | Our Mission & Values',
      description: 'Learn about Aroganam Technologies - our mission to deliver world-class technology solutions and create industry-ready professionals.',
      keywords: ['about us', 'company culture', 'technology company', 'innovation']
    },

    contact: {
      title: 'Contact Us | Aroganam Technologies',
      description: 'Get in touch with our team. We\'re here to help with your digital transformation journey.',
      keywords: ['contact', 'get in touch', 'inquiry', 'support']
    }
  }
};

export const generateMetaTags = (page) => {
  const pageConfig = seoConfig.pages[page] || seoConfig.pages.home;
  const { site } = seoConfig;

  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords.join(', '),
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      image: site.image,
      url: site.url,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: pageConfig.title,
      description: pageConfig.description,
      image: site.image,
      creator: site.twitterHandle
    }
  };
};
