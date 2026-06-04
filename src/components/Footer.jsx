import { Link } from 'react-router-dom';
import logoFull from '../assets/logo-full.jpeg';

const policyLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Refund Policy', path: '/refund-policy' },
  { label: 'Terms and Conditions', path: '/terms-and-conditions' },
  { label: 'Cancellation Policy', path: '/cancellation-policy' },
  { label: 'Account Deletion Policy', path: '/account-deletion-policy' }
];

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface w-full py-14 border-t border-outline-variant mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="md:col-span-4">
          <Link to="/" className="inline-flex bg-surface-bright p-3 mb-5 border border-outline-variant">
            <img src={logoFull} alt="Aroganam Technologies" className="w-56 h-auto object-contain" />
          </Link>
          <div className="flex items-center gap-5 text-[#C9973A] mb-5">
            <a href="https://www.linkedin.com/company/aroganam-technologies/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" aria-label="Aroganam Technologies on LinkedIn">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.facebook.com/AroganamTechnologies/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" aria-label="Aroganam Technologies on Facebook">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"></path></svg>
            </a>
            <a href="https://www.instagram.com/aroganam_info?igsh=MTZwbXcycDdxNGhtdw==" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" aria-label="Aroganam Technologies on Instagram">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://youtube.com/@aroganam?si=-fGmk9d-f1qsv--i" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" aria-label="Aroganam Technologies on YouTube">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
          <p className="font-body-md text-sm text-inverse-on-surface">
            © Aroganam Technologies. All Rights Reserved.
          </p>
        </div>

        <div className="md:col-span-4">
          <h3 className="font-headline-md text-xl text-surface-bright mb-5">Policies</h3>
          <div className="flex flex-col gap-3">
            {policyLinks.map((link) => (
              <Link key={link.path} to={link.path} className="font-label-mono text-label-mono text-inverse-on-surface/70 hover:text-tertiary-fixed-dim transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <h3 className="font-headline-md text-xl text-surface-bright mb-5">Contact</h3>
          <div className="flex flex-col gap-3 font-body-md text-sm text-inverse-on-surface/70">
            <span>Bangalore | Chennai | Coimbatore</span>
            <a href="mailto:aroganamtech@gmail.com" className="hover:text-tertiary-fixed-dim transition-colors">aroganamtech@gmail.com</a>
            <a href="tel:+919481722339" className="hover:text-tertiary-fixed-dim transition-colors">+91 94817 22339</a>
            <span>Mon - Sat 10:00AM - 7:00PM</span>
            <span>Sunday - CLOSED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
