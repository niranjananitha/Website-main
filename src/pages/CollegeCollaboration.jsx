import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from '../components/SEOHelmet';

const collaborationSections = [
  {
    title: 'Training & Placement Support',
    points: [
      'One full-time dedicated developer/mentor stationed at the college.',
      'College supplies interested students to work on real-time industry projects.',
      'Support for Final Year Projects, internships, mock interviews, and industry-readiness programs.',
      'Hands-on experience translates to higher salary packages during placements.',
      'Aroganam brings additional corporates and startups for campus drives.',
      'Regular technical events, symposiums, and hackathons (intra- and inter-college).'
    ],
    image: '/assets/Collaboration/CC1.webp'
  },
  {
    title: 'Incubation Center',
    points: [
      'Establish an Incubation Center as a prestige and innovation hub for the college.',
      'End-to-end execution: setup, planning, and management.',
      'Assistance with government/private certifications and funding applications.',
      'Attract companies, startups, and investors to use the incubation facilities.',
      'Foster an entrepreneurship culture among students.'
    ],
    image: '/assets/Collaboration/CC2.webp'
  },
  {
    title: 'Value-Added Courses & Certifications',
    points: [
      'Extra learning beyond the regular syllabus.',
      'Drone Pilot Licensing – government-approved training & certification.',
      'Women Entrepreneur Programs – schemes, mentoring, and Self-Help Group formation.',
      'Student Entrepreneurship Development – startup-idea-to-funding support.',
      'Industry-demand certifications in AI, ML, Cloud, IoT, and Cybersecurity.'
    ],
    image: '/assets/Collaboration/CC3.webp'
  },
  {
    title: 'College Branding & Academic Support',
    points: [
      'Support for NAAC/NBA/AICTE accreditation and government approvals.',
      'Help improving NIRF ranking and overall brand visibility.',
      'Facilitate Ph.D. opportunities, research publications, and patents for faculty.',
      'Faculty-hiring assistance via Aroganam’s network of skilled professionals.',
      'Student-enrollment branding to attract new admissions.',
      'Enable research collaborations with industries and research labs.',
      'Advisory and documentation support for NAAC Committee visits.'
    ],
    image: '/assets/Collaboration/CC4.webp'
  },
  {
    title: 'Additional Value Propositions',
    points: [
      'Alumni Connect Programs – alumni mentoring, placements, and donation drives.',
      'Digital Transformation for College – ERP, LMS, placement portal, etc.',
      'International Tie-ups – student exchange, overseas internships.',
      'CSR & Funding Support – connect with corporate CSR initiatives for student benefit.',
      'Annual Tech Fest Branding – Aroganam as co-organizer to create a regional flagship event.'
    ],
    image: '/assets/Collaboration/CC5.webp'
  }
];

const logos = [
  '/assets/collage logo/Collage 2.webp',
  '/assets/collage logo/Collage 3.webp',
  '/assets/collage logo/Collage 4.webp',
  '/assets/collage logo/Karpagam.webp',
  '/assets/collage logo/colaage 5.svg',
  '/assets/collage logo/collage 10.webp',
  '/assets/collage logo/collage 14.webp',
  '/assets/collage logo/collage 7.webp',
  '/assets/collage logo/collage 8.webp',
  '/assets/collage logo/collage 9.webp',
];

export default function CollegeCollaboration() {
  useSEO('collegeCollaboration', 'College Collaboration - Aroganam Technologies');

  return (
    <div className="flex-grow flex flex-col pt-20 bg-background text-on-background">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 md:min-h-[calc(100vh-80px)] border-b border-outline-variant">
        <div className="md:col-span-12 flex flex-col justify-center items-center text-center p-margin-mobile md:p-margin-desktop bg-surface-bright animate-fade-up border-b border-outline-variant">
          <h1 className="font-display-xl text-on-background m-0 uppercase leading-none max-w-6xl" style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}>
            FUTURE-READY <span className="text-tertiary-fixed-dim inline-block relative">TECHNICAL SKILLS<span className="absolute -bottom-1 left-0 w-full h-2 bg-tertiary-fixed-dim/30 z-0"></span></span>
          </h1>
          <h2 className="font-headline-md text-on-surface mt-8 max-w-4xl uppercase tracking-wide">
            A Real-Time Project-Based Training Initiative by Aroganam Technologies Private Limited
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-8 max-w-3xl">
            Aroganam Technologies bridges the gap between classroom learning and industry expectations through live, project-driven training in AI-full-stack web and mobile development.
          </p>
          <div className="mt-12">
            <Link to="/contact" className="inline-flex min-h-[44px] items-center justify-center bg-on-background text-background font-label-caps text-label-caps px-12 py-4 uppercase hover:bg-surface-tint transition-colors text-center">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto border-b border-outline-variant w-full animate-fade-up">
        <span className="font-label-caps text-label-caps text-outline mb-12 block uppercase">OVERVIEW</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase">Cutting-edge, real-time training for engineering students.</h2>
            <p className="font-body-lg text-body-lg text-on-surface mt-6 max-w-xl">
              The program focuses on AI Full-Stack Web Development and AI Full-Stack Mobile App Development delivered exclusively through live industry projects—no classroom lectures or syllabus-based training.
            </p>
          </div>
          <div className="flex flex-col justify-center mt-8 lg:mt-0">
             <ul className="grid grid-cols-1 gap-4">
              <li className="p-6 border border-outline-variant bg-surface-container-lowest flex items-start gap-4">
                <span className="text-tertiary-fixed-dim font-headline-lg leading-none mt-1">•</span>
                <p className="font-body-md text-body-md text-on-surface-variant m-0">Dedicated full-time Web Developer and App Developer deployed on campus.</p>
              </li>
              <li className="p-6 border border-outline-variant bg-surface-container-lowest flex items-start gap-4">
                <span className="text-tertiary-fixed-dim font-headline-lg leading-none mt-1">•</span>
                <p className="font-body-md text-body-md text-on-surface-variant m-0">Only interested, committed students are selected; frequent or long leaves are not permitted.</p>
              </li>
              <li className="p-6 border border-outline-variant bg-surface-container-lowest flex items-start gap-4">
                <span className="text-tertiary-fixed-dim font-headline-lg leading-none mt-1">•</span>
                <p className="font-body-md text-body-md text-on-surface-variant m-0">Students shift to regular academic schedules during exam periods.</p>
              </li>
              <li className="p-6 border border-outline-variant bg-surface-container-lowest flex items-start gap-4">
                <span className="text-tertiary-fixed-dim font-headline-lg leading-none mt-1">•</span>
                <p className="font-body-md text-body-md text-on-surface-variant m-0">Required commitment: 4–6 hours daily after college hours on training and project work.</p>
              </li>
              <li className="p-6 border border-outline-variant bg-surface-container-lowest flex items-start gap-4">
                <span className="text-tertiary-fixed-dim font-headline-lg leading-none mt-1">•</span>
                <p className="font-body-md text-body-md text-on-surface-variant m-0">College faculty and staff are welcome to join sessions to upgrade their tech skills.</p>
              </li>
             </ul>
          </div>
        </div>
      </section>

      {/* What Aroganam Provides */}
      <section className="bg-surface-bright w-full animate-fade-up">
        <div className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 border-b border-outline-variant max-w-max-width mx-auto">
          <span className="font-label-caps text-label-caps text-outline uppercase block mb-4">Our Core Offerings</span>
          <h2 className="font-display-xl text-3xl md:text-5xl lg:text-7xl tracking-tight text-on-background m-0 uppercase">WHAT AROGANAM PROVIDES</h2>
        </div>
        
        {collaborationSections.map((section, index) => (
          <div key={section.title} className="border-b border-outline-variant">
            <div className={`grid grid-cols-1 md:grid-cols-2 min-h-[500px]`}>
              <div className={`p-margin-mobile md:p-margin-desktop flex flex-col justify-center bg-surface-container-lowest ${index % 2 !== 0 ? 'md:order-2 md:border-l border-outline-variant' : 'md:border-r border-outline-variant'}`}>
                <span className="font-headline-lg text-3xl md:text-4xl text-tertiary-fixed-dim mb-6 block">0{index + 1}</span>
                <h3 className="font-headline-md text-2xl md:text-4xl text-on-background mb-8 uppercase max-w-lg">{section.title}</h3>
                <ul className="space-y-6">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-tertiary-fixed-dim font-headline-lg leading-none mt-1">•</span>
                      <span className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative min-h-[400px] md:min-h-full ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <img src={section.image} alt={section.title} className="absolute inset-0 w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-700" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Collaborators Section */}
      <section className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop w-full animate-fade-up">
        <div className="max-w-max-width mx-auto text-center">
          <span className="font-label-caps text-label-caps text-outline mb-12 block uppercase">OUR COLLABORATORS</span>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {logos.map((logo, idx) => (
              <img key={idx} src={logo} alt={`Collaborator ${idx + 1}`} className="h-20 md:h-28 object-contain transition-transform duration-300 hover:scale-110" />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="bg-on-background dark:bg-inverse-surface text-background dark:text-inverse-on-surface py-20 md:py-32 px-margin-mobile md:px-margin-desktop text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-background dark:text-inverse-on-surface mb-8 md:mb-12 max-w-4xl mx-auto uppercase">
            Start Your Journey With Us
          </h2>
          <Link to="/contact" className="inline-flex min-h-[44px] items-center justify-center bg-background text-on-background font-label-caps text-label-caps px-8 md:px-12 py-4 uppercase border border-transparent hover:bg-background/90 hover:scale-105 transition-all duration-300">
            Get in touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
