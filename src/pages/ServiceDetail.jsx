import { useParams, useNavigate, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useSEO } from '../components/SEOHelmet';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === id);
  
  // Set SEO based on service if found - unconditionally called at top level
  useSEO(
    'services',
    service ? `${service.title} | Aroganam Technologies` : null,
    service ? service.summary.substring(0, 160) : null
  );

  if (!service) {
    return (
      <div className="flex-grow flex flex-col pt-16 items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="font-headline-lg text-4xl">Service Not Found</h1>
        <button onClick={() => navigate('/services')} className="mt-4 text-primary underline">Back to Services</button>
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col pt-20 min-h-[calc(100vh-80px)]">
      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-14 flex flex-col gap-6 grid-line-bottom animate-fade-up">
        <button onClick={() => navigate('/services')} className="w-max font-label-caps text-label-caps flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors mb-2">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          BACK TO SERVICES
        </button>
        <h1 className="font-headline-lg text-4xl md:text-5xl text-on-background uppercase">
          {service.title}
        </h1>
        <p className="font-body-lg text-body-lg max-w-3xl text-on-surface-variant">
          {service.summary}
        </p>
      </section>

      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 animate-fade-up">
        <aside className="lg:col-span-4 border border-outline-variant bg-on-background text-background p-8 h-max dark:bg-inverse-surface dark:text-inverse-on-surface">
          <span className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase block mb-4">Aroganam</span>
          <h2 className="font-headline-md text-2xl mb-6 text-background dark:text-inverse-on-surface">Company Information</h2>
          <div className="grid gap-4 font-body-md text-body-md text-background/80 dark:text-inverse-on-surface/85">
            <a href="tel:+919481722339" className="hover:text-tertiary-fixed-dim transition-colors block">+91 94817 22339</a>
            <a href="mailto:aroganamtech@gmail.com" className="hover:text-tertiary-fixed-dim transition-colors block">aroganamtech@gmail.com</a>
            <span className="block">Bangalore | Chennai | Coimbatore</span>
          </div>
        </aside>

        <div className="lg:col-span-8">
          <div className="flex flex-col gap-4 mb-8">
            {service.details.map((paragraph) => (
              <p key={paragraph} className="font-body-md text-body-md text-on-surface-variant">{paragraph}</p>
            ))}
          </div>
          <h2 className="font-headline-md text-2xl mb-4">Benefits of Our Service</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="border border-outline-variant bg-surface-container-lowest p-4 font-body-md text-sm leading-6 text-on-surface-variant">
                {benefit}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-brutal-primary font-label-caps text-label-caps px-7 py-4 inline-block uppercase focus:outline-none focus:ring-2 focus:ring-tertiary/60 focus:ring-offset-2 focus:ring-offset-background">
            Send Enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
