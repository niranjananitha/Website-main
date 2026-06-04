import { useSEO } from '../components/SEOHelmet';
import logoFull from '../assets/logo-full.jpeg';

export default function About() {
  useSEO('about');
  
  const drives = [
    {
      title: 'AI Innovation',
      desc: 'We craft smart, scalable AI solutions, from predictive analytics to automation, tailored to industries like healthcare, finance, and retail.',
      icon: <span className="material-symbols-outlined text-tertiary text-3xl">psychology</span>
    },
    {
      title: 'Rural Empowerment',
      desc: 'Our hands-on training programs in AI, Data Science, and more equip rural talent with the skills to compete on a global stage.',
      icon: <span className="material-symbols-outlined text-tertiary text-3xl">school</span>
    },
    {
      title: 'Holistic Support',
      desc: 'We provide end-to-end services, from AI implementation to career mentorship, ensuring success for businesses and individuals alike.',
      icon: <span className="material-symbols-outlined text-tertiary text-3xl">support_agent</span>
    }
  ];

  return (
    <div className="flex-grow flex flex-col pt-20 min-h-[calc(100vh-80px)]">
      {/* Header / Intro */}
      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 flex flex-col gap-6 grid-line-bottom animate-fade-up">
        <span className="font-label-caps text-label-caps text-outline uppercase">About Us</span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-background uppercase leading-none">
          Meet the Team Behind <br />Aroganam Technologies
        </h1>
        <p className="font-body-lg text-body-lg max-w-3xl text-on-surface-variant leading-relaxed">
          Empowering startups to enterprises, and rural dreamers to global tech leaders.
        </p>
      </section>

      {/* What We Do */}
      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fade-up">
        <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant p-8 flex items-center justify-center min-h-[260px]">
          <img src={logoFull} alt="Aroganam Technologies Logo" className="w-full max-w-sm h-auto object-contain" />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="font-label-caps text-label-caps text-outline uppercase block">What We Do</span>
          <p className="text-base md:text-lg text-on-surface leading-relaxed font-semibold">
            Aroganam Technologies is a pioneering AI company dedicated to turning ambitions into reality.
          </p>
          <p className="text-sm md:text-base text-on-surface/80 leading-relaxed">
            We blend advanced AI technologies – such as Machine Learning, Natural Language Processing, and Generative AI – with a commitment to inclusivity, offering intelligent solutions for businesses and career-defining training for learners. From startups to enterprises and rural dreamers to global professionals, we’re here to elevate your journey.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-surface-container-low border-y border-outline-variant py-16 animate-fade-up">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group p-8 border border-outline-variant bg-surface-container-lowest hover:border-tertiary transition-all duration-300 relative flex flex-col justify-between min-h-[240px]">
            <div>
              <span className="font-label-caps text-label-caps text-outline uppercase block mb-6">Our Mission</span>
              <p className="text-base md:text-lg text-on-background leading-relaxed">
                To empower businesses and individuals with future-ready AI solutions and training, bridging the gap between technology, innovation, and impact, while uplifting rural talent to achieve global success.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1.5 h-0 bg-tertiary group-hover:h-full transition-all duration-300" />
          </div>

          <div className="group p-8 border border-outline-variant bg-surface-container-lowest hover:border-tertiary transition-all duration-300 relative flex flex-col justify-between min-h-[240px]">
            <div>
              <span className="font-label-caps text-label-caps text-outline uppercase block mb-6">Our Vision</span>
              <p className="text-base md:text-lg text-on-background leading-relaxed">
                To lead the world in AI-driven innovation, fostering a future where rural dreamers become global tech leaders through accessible, industry-aligned education and solutions.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1.5 h-0 bg-tertiary group-hover:h-full transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 animate-fade-up">
        <span className="font-label-caps text-label-caps text-outline uppercase block mb-12">What Drives Us</span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drives.map((drive) => (
            <div key={drive.title} className="group p-8 border border-outline-variant bg-surface-container-lowest hover:border-tertiary hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  {drive.icon}
                  <span className="text-outline/40 font-display-sm text-sm group-hover:text-tertiary transition-colors duration-300">DRIVE</span>
                </div>
                <h4 className="font-headline-md text-xl text-on-background mb-3">{drive.title}</h4>
                <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">
                  {drive.desc}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1.5 h-0 bg-tertiary group-hover:h-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
