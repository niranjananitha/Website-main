import { Link } from 'react-router-dom';
import { companyInfo, servicesData } from '../data/services';
import { useSEO } from '../components/SEOHelmet';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We provide AI solutions, web development, app development, digital marketing, cloud architecture, data analytics, cybersecurity, staffing, and training with placement support.'
  },
  {
    question: 'How can I get in touch with your team?',
    answer: 'You can contact us through the enquiry form, email us at aroganamtech@gmail.com, or call +91 94817 22339.'
  },
  {
    question: 'Do you offer customized solutions?',
    answer: 'Yes. We tailor every service plan around your business goals, timeline, users, and technical requirements.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We support startups, educational institutions, retail, technology, healthcare, finance, and growing enterprise teams.'
  }
];

function CompanyInfoPanel() {
  return (
    <aside className="border border-outline-variant bg-on-background text-background p-6 md:p-8 flex flex-col gap-5 animate-slide-in dark:bg-inverse-surface dark:text-inverse-on-surface">
      <span className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase">Company Information</span>
      <h3 className="font-headline-md text-2xl text-background dark:text-inverse-on-surface">{companyInfo.name}</h3>
      <div className="font-body-md text-sm leading-6 text-background/80 dark:text-inverse-on-surface/85">
        {companyInfo.line}
      </div>
      <div className="grid gap-3 font-label-mono text-label-mono text-background/80 dark:text-inverse-on-surface/85">
        <a href={`tel:${companyInfo.contact.replace(/\s+/g, '')}`} className="hover:text-tertiary-fixed-dim transition-colors block">{companyInfo.contact}</a>
        <a href={`mailto:${companyInfo.email}`} className="hover:text-tertiary-fixed-dim transition-colors block">{companyInfo.email}</a>
        <span className="block">{companyInfo.locations}</span>
      </div>
      <Link to="/contact" className="btn-brutal bg-tertiary-fixed-dim text-on-tertiary-fixed border-tertiary-fixed-dim font-label-caps text-label-caps px-5 py-3 w-max uppercase focus:outline-none focus:ring-2 focus:ring-tertiary/60 focus:ring-offset-2 focus:ring-offset-background">
        Enquire Now
      </Link>
    </aside>
  );
}

function ServiceRow({ service, index }) {
  return (
    <details className="group border-b border-outline-variant bg-surface-bright animate-fade-up" style={{ animationDelay: `${index * 60}ms` }}>
      <summary className="cursor-pointer list-none px-margin-mobile md:px-margin-desktop py-6 md:py-8 hover:bg-surface-container-low transition-colors">
        <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-[72px_1fr_48px] items-center gap-4 md:gap-6">
          <span className="font-label-mono text-label-mono text-outline">{(index + 1).toString().padStart(2, '0')}</span>
          <div>
            <h2 className="font-headline-md text-2xl md:text-3xl text-on-background">{service.title}</h2>
            <p className="font-body-md text-sm md:text-base text-on-surface mt-2 max-w-3xl">{service.summary}</p>
          </div>
          <span className="material-symbols-outlined text-outline group-open:rotate-90 group-hover:text-on-background transition-all">arrow_forward</span>
        </div>
      </summary>

      <div className="px-margin-mobile md:px-margin-desktop pb-8 md:pb-10 bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto grid grid-cols-1 lg:grid-cols-12 border border-outline-variant bg-surface">
          <div className="lg:col-span-4">
            <CompanyInfoPanel />
          </div>
          <div className="lg:col-span-8 p-6 md:p-8 animate-fade-up">
            <span className="font-label-caps text-label-caps text-outline uppercase">Additional Information</span>
            <h3 className="font-headline-md text-2xl md:text-3xl text-on-background mt-4 mb-5">{service.title}</h3>
            <div className="flex flex-col gap-4">
              {service.details.map((paragraph) => (
                <p key={paragraph} className="font-body-md text-sm md:text-base leading-7 text-on-surface">{paragraph}</p>
              ))}
            </div>
            <h3 className="font-headline-md text-xl text-on-background mt-7 mb-4">Benefits of Our Service</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="border border-outline-variant bg-surface-container-low p-4 font-body-md text-sm leading-6 text-on-surface">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </details>
  );
}

export default function Services() {
  useSEO('services');
  return (
    <div className="flex-grow flex flex-col pt-20">
      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-16 grid-line-bottom text-center animate-fade-up">
        <span className="font-label-caps text-label-caps text-outline uppercase block mb-4">Our Services</span>
        <h1 className="font-headline-lg text-3xl md:text-4xl text-on-background mb-4">We Provide The Best Quality</h1>
        <p className="font-body-md text-body-md max-w-3xl mx-auto text-on-surface">
          Explore every Aroganam service area below. Open a topic to view detailed information, benefits, and enquiry options.
        </p>
      </section>

      <section className="w-full border-t border-outline-variant">
        {servicesData.map((service, index) => (
          <ServiceRow key={service.id} service={service} index={index} />
        ))}
      </section>

      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 animate-fade-up">
        <div className="lg:col-span-5">
          <span className="font-label-caps text-label-caps text-outline uppercase block mb-4">Support</span>
          <h2 className="font-headline-lg text-2xl md:text-3xl text-on-background">Keep Your Business Safe & Ensure High Availability</h2>
        </div>
        <div className="lg:col-span-7 flex flex-col border-t border-outline-variant">
          {faqs.map((item) => (
            <details key={item.question} className="group border-b border-outline-variant py-5">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-body-md text-sm md:text-base text-on-background">
                {item.question}
                <span className="material-symbols-outlined text-base group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="font-body-md text-sm leading-6 text-on-surface-variant mt-4">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
