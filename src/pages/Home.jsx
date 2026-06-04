import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import officeImg from '../assets/office.jpeg';
// Testimonials removed per request; use canonical services order
import { servicesData } from '../data/services';
import { missionItems } from '../data/brand';
import StatCounter from '../components/StatCounter';
import { useSEO } from '../components/SEOHelmet';

// Use canonical services order from data/services
const services = servicesData.map((s) => s.title);

const stats = [
  { label: 'Worth of digital infrastructure managed', value: 83, suffix: '+', icon: <span className="material-symbols-outlined">dns</span> },
  { label: 'Industries served globally', value: 22, suffix: '+', icon: <span className="material-symbols-outlined">public</span> },
  { label: 'Enterprise Clients', value: 170, suffix: '+', icon: <span className="material-symbols-outlined">corporate_fare</span> },
  { label: 'Certified IT Professionals', value: 150, suffix: '+', icon: <span className="material-symbols-outlined">verified</span> }
];

export default function Home() {
  useSEO('home');
  return (
    <div className="flex-grow flex flex-col pt-20">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 md:min-h-[calc(100vh-80px)] border-b border-outline-variant">
        <div className="md:col-span-7 flex flex-col justify-center p-margin-mobile md:p-margin-desktop border-r-0 md:border-r border-outline-variant bg-surface-bright animate-fade-up">
          <h1 className="font-display-xl text-on-background m-0 uppercase leading-none" style={{ fontSize: 'clamp(38px, 7vw, 72px)' }}>WE BUILD</h1>
          <h1 className="font-display-xl text-on-background m-0 uppercase leading-none relative inline-block w-max max-w-full" style={{ fontSize: 'clamp(38px, 7vw, 72px)' }}>
            <span className="relative z-10">TECHNOLOGY</span>
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-tertiary-fixed-dim z-0"></span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface mt-8 max-w-xl">
            Architecting objective digital solutions through rigorous engineering and objective design principles. We transform complex data into clear, scalable infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link to="/services" className="inline-flex min-h-[44px] items-center justify-center bg-on-background text-background font-label-caps text-label-caps px-8 py-4 uppercase hover:bg-surface-tint transition-colors text-center">
              Explore Work
            </Link>
            <Link to="/contact" className="inline-flex min-h-[44px] items-center justify-center border border-on-background text-on-background font-label-caps text-label-caps px-8 py-4 uppercase hover:bg-surface-container transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="md:col-span-5 relative min-h-[320px] md:min-h-0 bg-surface-variant flex items-center justify-center overflow-hidden p-4 md:p-6 animate-slide-in">
          <img src={officeImg} alt="Aroganam Technologies Office" className="w-full h-full object-contain md:object-cover md:object-left bg-on-background" />
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-on-background text-background py-4 border-b border-outline-variant overflow-hidden">
        <div className="marquee-clip">
          <div className="marquee-track font-label-caps text-label-caps animate-[marquee_20s_linear_infinite] gap-12">
            <span className="marquee-item text-sm md:text-base font-semibold tracking-[0.3em] uppercase">ENTERPRISE ARCHITECTURE</span>
            <span className="marquee-item text-sm md:text-base font-semibold tracking-[0.3em] uppercase">CLOUD INFRASTRUCTURE</span>
            <span className="marquee-item text-sm md:text-base font-semibold tracking-[0.3em] uppercase">DATA ENGINEERING</span>
            <span className="marquee-item text-sm md:text-base font-semibold tracking-[0.3em] uppercase">SYSTEM INTEGRATION</span>
            <span className="marquee-item text-sm md:text-base font-semibold tracking-[0.3em] uppercase">ENTERPRISE ARCHITECTURE</span>
            <span className="marquee-item text-sm md:text-base font-semibold tracking-[0.3em] uppercase">CLOUD INFRASTRUCTURE</span>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto border-b border-outline-variant w-full animate-fade-up">
        <span className="font-label-caps text-label-caps text-outline mb-12 block uppercase">WHAT WE DO</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-background">Bridging the gap between raw capability and strategic execution.</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="font-body-lg text-body-lg text-on-surface">
              Our methodology rejects the superfluous. We focus entirely on structural integrity, performance metrics, and scalable patterns. Every system we deploy is built on a foundation of unyielding logic and precision.
            </p>
          </div>
        </div>
      </section>

          {/* Services Section */}
      <section className="bg-surface-bright w-full animate-fade-up">
        <div className="px-margin-mobile md:px-margin-desktop py-12 md:py-20 border-b border-outline-variant max-w-max-width mx-auto">
          <span className="font-label-caps text-label-caps text-outline uppercase block mb-3">Our Core Capacities</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-background m-0 uppercase">OUR EXPERTISE</h2>
        </div>
        <div className="flex flex-col border-b border-outline-variant">
          {services.map((service, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            return (
              <Link 
                to={`/services/${servicesData[index].id}`} 
                key={index} 
                className="group border-b border-outline-variant last:border-0 hover:bg-surface-container-low transition-colors duration-300 cursor-pointer block"
              >
                <div className="px-margin-mobile md:px-margin-desktop py-6 md:py-8 max-w-max-width mx-auto flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 md:gap-12 min-w-0">
                    <span className="font-label-mono text-label-mono text-outline/60 group-hover:text-tertiary transition-colors duration-300 w-8 text-sm md:text-base">{num}</span>
                    <h3 className="font-headline-md text-base sm:text-lg md:text-2xl lg:text-3xl text-on-background m-0 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-300 truncate md:whitespace-normal md:overflow-visible">
                      {service}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-outline-variant rounded-full group-hover:border-tertiary group-hover:bg-on-background group-hover:text-background transition-all duration-300 shrink-0">
                    <span className="material-symbols-outlined text-outline group-hover:text-background group-hover:translate-x-0.5 transition-all duration-300 text-sm md:text-base">arrow_forward</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Our Mission (shared) */}
      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-16 animate-fade-up">
        <span className="font-label-caps text-label-caps text-outline uppercase block mb-4">Our Mission</span>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {missionItems.map((m) => (
            <li key={m} className="p-6 border border-outline-variant bg-surface-container-lowest flex items-start gap-3">
              <span className="text-tertiary-fixed-dim font-headline-lg">•</span>
              <p className="font-body-md text-body-md text-on-surface-variant">{m}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="bg-on-background text-background border-b border-outline-variant w-full animate-fade-up">
        <div className="py-16 md:py-28 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <span className="font-label-caps text-label-caps text-outline mb-8 md:mb-12 block uppercase">WHY AROGANAM</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="group p-8 border border-outline/30 bg-background/5 hover:bg-background/10 hover:border-tertiary-fixed-dim/60 transition-all duration-300 relative flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-headline-lg text-3xl md:text-4xl text-tertiary-fixed-dim mb-4 block group-hover:scale-105 transition-transform duration-300 w-max">01</span>
                <h4 className="font-headline-md text-xl md:text-2xl text-background mb-3">Precision Logic</h4>
                <p className="font-body-md text-sm md:text-base text-surface-variant/90 leading-relaxed">
                  Data-driven decision making informs every line of code we write.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1.5 h-0 bg-tertiary-fixed-dim group-hover:h-full transition-all duration-300" />
            </div>

            <div className="group p-8 border border-outline/30 bg-background/5 hover:bg-background/10 hover:border-tertiary-fixed-dim/60 transition-all duration-300 relative flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-headline-lg text-3xl md:text-4xl text-tertiary-fixed-dim mb-4 block group-hover:scale-105 transition-transform duration-300 w-max">02</span>
                <h4 className="font-headline-md text-xl md:text-2xl text-background mb-3">Scalable Core</h4>
                <p className="font-body-md text-sm md:text-base text-surface-variant/90 leading-relaxed">
                  Systems designed to expand infinitely without architectural refactoring.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1.5 h-0 bg-tertiary-fixed-dim group-hover:h-full transition-all duration-300" />
            </div>

            <div className="group p-8 border border-outline/30 bg-background/5 hover:bg-background/10 hover:border-tertiary-fixed-dim/60 transition-all duration-300 relative flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-headline-lg text-3xl md:text-4xl text-tertiary-fixed-dim mb-4 block group-hover:scale-105 transition-transform duration-300 w-max">03</span>
                <h4 className="font-headline-md text-xl md:text-2xl text-background mb-3">Zero Fluff</h4>
                <p className="font-body-md text-sm md:text-base text-surface-variant/90 leading-relaxed">
                  We eliminate decorative bloat to maximize raw performance and speed.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1.5 h-0 bg-tertiary-fixed-dim group-hover:h-full transition-all duration-300" />
            </div>

            <div className="group p-8 border border-outline/30 bg-background/5 hover:bg-background/10 hover:border-tertiary-fixed-dim/60 transition-all duration-300 relative flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-headline-lg text-3xl md:text-4xl text-tertiary-fixed-dim mb-4 block group-hover:scale-105 transition-transform duration-300 w-max">04</span>
                <h4 className="font-headline-md text-xl md:text-2xl text-background mb-3">Proven Stability</h4>
                <p className="font-body-md text-sm md:text-base text-surface-variant/90 leading-relaxed">
                  Enterprise-grade uptime guaranteed through rigorous stress testing.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1.5 h-0 bg-tertiary-fixed-dim group-hover:h-full transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-surface-bright dark:bg-surface-container border-b border-outline-variant py-20 md:py-32 animate-fade-up">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-outline uppercase block mb-4">By The Numbers</span>
            <h2 className="font-headline-lg text-3xl md:text-5xl text-on-background dark:text-surface-bright uppercase">
              Connecting Global Enterprises to Smart IT Infrastructure
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <StatCounter
                key={stat.label}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                icon={stat.icon}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section removed */}

      {/* CTA Banner */}
      <section className="bg-on-background dark:bg-inverse-surface text-background dark:text-inverse-on-surface py-20 md:py-32 px-margin-mobile md:px-margin-desktop text-center border-b border-outline-variant w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-background dark:text-inverse-on-surface mb-8 md:mb-12 max-w-4xl mx-auto uppercase">
            Ready to Build Something Remarkable?
          </h2>
          <Link to="/contact" className="inline-flex min-h-[44px] items-center justify-center bg-background text-on-background font-label-caps text-label-caps px-8 md:px-12 py-4 uppercase border border-transparent hover:bg-background/90 hover:scale-105 transition-all duration-300">
            Initialize Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
}