import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useSEO } from '../components/SEOHelmet';

const solutionHighlights = [
  {
    icon: 'model_training',
    title: 'AI-Powered Operations',
    body: 'Automate repetitive workflows, uncover patterns in business data, and improve decision-making with practical AI systems.'
  },
  {
    icon: 'devices',
    title: 'Digital Product Build',
    body: 'Launch responsive websites, custom web applications, and mobile apps that are fast, secure, and easy to scale.'
  },
  {
    icon: 'trending_up',
    title: 'Growth & Talent Enablement',
    body: 'Combine digital marketing, staffing, and training support to help teams grow with stronger visibility and execution capacity.'
  }
];

export default function Solutions() {
  useSEO('solutions');
  return (
    <div className="flex-grow flex flex-col pt-20 min-h-[calc(100vh-80px)]">
      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-14 flex flex-col gap-6 grid-line-bottom animate-fade-up">
        <span className="font-label-caps text-label-caps text-outline uppercase">Solutions</span>
        <h1 className="font-headline-lg text-3xl md:text-4xl text-on-background uppercase">Technology Solutions Built Around Your Service Needs</h1>
        <p className="font-body-lg text-body-lg max-w-3xl text-on-surface-variant">
          We connect strategy, engineering, marketing, staffing, and training into practical solution paths for businesses, colleges, startups, and growing teams.
        </p>
      </section>

      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-14 animate-fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutionHighlights.map((item) => (
            <article key={item.title} className="p-7 border border-outline-variant bg-surface-container-lowest">
              <span className="material-symbols-outlined text-4xl mb-5 text-tertiary">{item.icon}</span>
              <h3 className="font-headline-md text-2xl mb-4">{item.title}</h3>
              <p className="font-body-md text-sm leading-6 text-on-surface">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-14 grid-line-top animate-fade-up">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="font-label-caps text-label-caps text-tertiary uppercase block mb-4">Service-Led Solutions</span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-background">Choose the right solution area and start with a focused enquiry.</h2>
          </div>
          <Link to="/contact" className="btn-brutal-primary font-label-caps text-label-caps px-7 py-4 w-max uppercase focus:outline-none focus:ring-2 focus:ring-tertiary/60 focus:ring-offset-2 focus:ring-offset-background">
            Contact Us
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <article key={service.id} className="group relative overflow-hidden bg-gradient-to-br from-surface-container-lowest to-surface-container-low border border-outline-variant hover:border-tertiary transition-all duration-300 hover:shadow-xl hover:shadow-tertiary/20 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-tertiary/10 to-transparent rounded-bl-full"></div>
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-label-mono text-label-mono text-tertiary/60">{String(index + 1).padStart(2, '0')}</span>
                  <Link to={`/services/${service.id}`} className="material-symbols-outlined text-3xl text-tertiary/30 group-hover:text-tertiary group-hover:scale-110 transition-all duration-300" aria-label={`View details for ${service.title}`}>
                    arrow_outward
                  </Link>
                </div>
                <Link to={`/services/${service.id}`} className="block group">
                  <h3 className="font-headline-md text-xl mb-4 text-on-background group-hover:text-tertiary transition-colors">{service.title}</h3>
                </Link>
                <p className="font-body-md text-sm leading-6 text-on-surface-variant mb-6">{service.summary}</p>
                <Link to="/contact" className="font-label-caps text-label-caps text-tertiary hover:text-on-background bg-tertiary/10 hover:bg-tertiary hover:text-on-tertiary px-5 py-3 rounded transition-all duration-300 inline-flex items-center gap-2 group-hover:gap-3">
                  Enquire Now
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
