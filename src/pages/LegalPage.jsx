import { Link } from 'react-router-dom';
import { useSEO } from '../components/SEOHelmet';

const legalPages = {
  privacy: {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    intro: 'Aroganam is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.',
    sections: [
      {
        heading: 'Information We Collect',
        body: 'Personal Information: When you register for an account or make a purchase, we may collect personal information such as your name, email address, phone number, and payment details. Usage Data: We collect information about your interactions with our website and services, including IP addresses, browser types, and pages visited.'
      },
      {
        heading: 'How We Use Your Information',
        body: 'To Provide Services: We use your information to process transactions, deliver educational content, and communicate with you regarding your account and our services. To Improve Services: We may use your data to analyze usage patterns and enhance our offerings. To Communicate: We may send you updates, newsletters, or promotional materials if you have opted in to receive them.'
      },
      {
        heading: 'Data Protection',
        body: 'Security: We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. Retention: We retain your information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.'
      },
      {
        heading: 'Sharing Your Information',
        body: 'Service Providers: We may share your information with third-party service providers who assist us in operating our platform, processing payments, or performing other functions. Legal Requirements: We may disclose your information if required to do so by law or in response to valid legal requests.'
      },
      {
        heading: 'Your Rights',
        body: 'Access and Correction: You have the right to access and correct your personal information. You can update your information through your account settings or by contacting us. Opt-Out: You may opt out of receiving promotional communications by following the unsubscribe instructions in the emails you receive.'
      },
      {
        heading: 'Cookies and Tracking Technologies',
        body: 'Cookies: We use cookies and similar technologies to enhance your experience on our website. You can manage your cookie preferences through your browser settings.'
      },
      {
        heading: 'Children’s Privacy',
        body: 'Age Restrictions: Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.'
      },
      {
        heading: 'Changes to Privacy Policy',
        body: 'Modifications: We may update this Privacy Policy from time to time. Any changes will be effective upon posting on our website.'
      },
      {
        heading: 'Contact Information',
        body: 'Support: If you have any questions or concerns about our Privacy Policy, please contact us at aroganamtech@gmail.com.'
      }
    ]
  },
  terms: {
    eyebrow: 'Terms and Conditions',
    title: 'Terms and Conditions',
    intro: 'Welcome to Aroganam. These Terms and Conditions govern your use of our website, services, and educational content. By accessing or using our platform, you agree to comply with and be bound by these terms. If you do not agree with these terms, please do not use our services.',
    sections: [
      {
        heading: 'Services',
        body: 'Educational Content: We provide access to various courses, educational materials, and related services. All content is for personal and educational use only. Account Registration: You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.'
      },
      {
        heading: 'Payment and Fees',
        body: 'Payment: Payment for courses and services is processed through our secure payment system. You agree to pay all applicable fees as detailed at the time of purchase. No Refunds: As detailed in our Refund Policy, all payments are non-refundable once processed.'
      },
      {
        heading: 'User Conduct',
        body: 'Prohibited Activities: You agree not to engage in any activities that may harm or disrupt our services or infringe on the rights of others. Content Usage: You may not reproduce, distribute, or otherwise use our content for commercial purposes without our prior written consent.'
      },
      {
        heading: 'Intellectual Property',
        body: 'Ownership: All content and materials provided on our platform, including but not limited to text, graphics, and logos, are the property of AROGANAM TECHNOLOGIES PVT LTD and are protected by intellectual property laws. License: You are granted a limited, non-exclusive, non-transferable license to access and use our content for personal, non-commercial purposes.'
      },
      {
        heading: 'Termination',
        body: 'Termination by Us: We reserve the right to terminate or suspend your account if you violate these terms or engage in any illegal or harmful activities. Termination by You: You may terminate your account at any time by contacting our support team. Note that termination will not entitle you to any refunds.'
      },
      {
        heading: 'Limitation of Liability',
        body: 'Disclaimer: Our services are provided "as is" and "as available." We make no warranties or representations regarding the accuracy or completeness of the content. Limitation: To the maximum extent permitted by law, AROGANAM TECHNOLOGIES PVT LTD shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our services.'
      },
      {
        heading: 'Changes to Terms',
        body: 'Modifications: We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website.'
      },
      {
        heading: 'Contact Information',
        body: 'Support: For any questions or concerns regarding these Terms and Conditions, please contact us at aroganamtech@gmail.com.'
      }
    ]
  },
  refund: {
    eyebrow: 'Refund Policy',
    title: 'Refund Policy',
    intro: 'This Refund Policy explains when refunds may be considered for payments made to Aroganam Technologies Pvt Ltd.',
    sections: [
      {
        heading: 'Eligibility for Refunds',
        body: 'If you experience double entry or payment failure due to our error, report it to us. We\'ll investigate and resolve the issue within 48 hours and provide a refund, if applicable. Once the Refund is approved by AROGANAM TECHNOLOGIES PVT LTD it will take 8 to 10 working days to refund to the customer account.'
      },
      {
        heading: 'Refund Process',
        body: 'Customers may be asked to provide proof of purchase, payment details, and any relevant transaction reference while requesting a refund. After verification, eligible refunds will be processed through the original payment method where possible.'
      },
      {
        heading: 'Note',
        body: 'The Refund only applicable for Double Payment or payment failure.'
      },
      {
        heading: 'Duplicate Payments and Payment Errors',
        body: 'In rare cases where duplicate payments or errors occur during the payment process, refunds may be considered. Such refunds will be evaluated on a case-by-case basis and are at the sole discretion of aroganam.'
      },
      {
        heading: 'Support Contact',
        body: 'For any queries related to refunds or technical issues, please reach out to our support team at aroganamtech@gmail.com. We will assist you in resolving issues to the best of our ability, but refunds will not be granted.'
      },
      {
        heading: 'Policy Changes',
        body: 'We reserve the right to modify or update this refund policy at any time without prior notice. Any changes will be effective from the date of publication on our website.'
      }
    ]
  },
  cancellation: {
    eyebrow: 'Cancellation Policy',
    title: 'Cancellation Policy',
    intro: 'At Aroganam, we are committed to offering valuable educational services. Please read the following cancellation policy thoroughly before making any payments or enrolling in any courses.',
    sections: [
      {
        heading: 'Eligibility for Refunds',
        body: 'If you experience double entry or payment failure due to our error, report it to us. We\'ll investigate and resolve the issue within 48 hours and provide a refund, if applicable. Once the Refund is approved by AROGANAM TECHNOLOGIES PVT LTD it will take 8 to 10 working days to refund to the customer account.'
      },
      {
        heading: 'No Cancellations Post Payment',
        body: 'Once a payment is successfully processed, the enrollment is confirmed. We do not accept cancellations after the payment has been completed, whether it is for courses, learning materials, or any other services provided by AROGANAM TECHNOLOGIES PVT LTD.'
      },
      {
        heading: 'Non-Refundable',
        body: 'Due to the nature of IT services (e.g., software development, consulting, technical support, or digital solutions), all transactions are final. Once services are rendered, no refunds will be provided. This policy ensures that resources, time, and expertise invested in the service are compensated accordingly.'
      },
      {
        heading: 'Project Modifications and Scope Changes',
        body: 'Clients are encouraged to review and approve project scopes and service agreements before work begins. Any modifications requested after service delivery will incur additional costs. Refunds will not be issued for services or solutions already provided, even in cases of scope adjustments.'
      },
      {
        heading: 'Only Double Entry',
        body: 'All financial transactions and critical system changes will undergo dual verification. This ensures that every entry or modification is reviewed by two separate individuals or systems before being finalized, preventing errors and ensuring accountability.'
      },
      {
        heading: 'Non-Transferable Payments',
        body: 'Payments made for a specific course or service are non-transferable. This means that the paid amount cannot be applied to any other courses or services, nor can it be transferred to another user.'
      },
      {
        heading: 'Subscription-Based Services',
        body: 'If your purchase involves a subscription-based service, you may choose to stop using the service at any time. However, no refund or prorated amount will be provided for unused portions of the subscription period. Please refer to our Refund Policy for more details.'
      },
      {
        heading: 'Promotional Offers and Discounts',
        body: 'Any cancellations or modifications for enrollments made under a promotional offer or discount will not be considered. Promotional offers are subject to terms, and once payment is made, the cancellation clause still applies.'
      },
      {
        heading: 'Content Access',
        body: 'Once access to the content or courses is granted after the payment, no cancellations will be accepted. Please ensure you fully understand the course content and service before making a payment.'
      },
      {
        heading: 'Contact',
        body: 'For cancellation-related support, contact aroganamtech@gmail.com.'
      }
    ]
  },
  accountDeletion: {
    eyebrow: 'Account Deletion Policy',
    title: 'Account Deletion Policy',
    intro: 'At all our web and apps, we respect your right to privacy and give you control over your personal data. If you choose to delete your account, please read the following policy carefully.',
    sections: [
      {
        heading: 'Permanent Deletion',
        body: 'Once you request to delete your account: All your personal data and account-related information will be permanently deleted from our systems and databases. This includes your profile details, usage data, preferences, and any other data associated with your account. Deleted data cannot be recovered under any circumstances.'
      },
      {
        heading: 'Irreversibility',
        body: 'Account deletion is irreversible. After deletion: You will not be able to log in or access any part of the app using the deleted account. If you wish to use the app again, you will need to create a new account.'
      },
      {
        heading: 'Data Retention Exceptions',
        body: 'We do not retain any personal information after deletion. However, we may retain minimal non-identifiable data (e.g., anonymized analytics) solely for internal reporting or compliance, which cannot be linked back to any individual.'
      },
      {
        heading: 'Deletion Request Process',
        body: 'You can request account deletion by: Going to the app settings and selecting "Delete Account". Alternatively, contacting our support team at aroganamtech@gmail.com.'
      },
      {
        heading: 'Timeframe',
        body: 'Once your request is confirmed, we will delete all associated data within 7 business days.'
      },
      {
        heading: 'Your Rights',
        body: 'Access and Correction: You have the right to access and correct your personal information. You can update your information through your account settings or by contacting us. Opt-Out: You may opt out of receiving promotional communications by following the unsubscribe instructions in the emails you receive.'
      }
    ]
  }
};

export default function LegalPage({ type }) {
  const page = legalPages[type] ?? legalPages.privacy;
  useSEO(type, page.title, page.intro);

  return (
    <div className="flex-grow flex flex-col pt-20 min-h-[calc(100vh-80px)]">
      <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-14 grid-line-bottom animate-fade-up">
        <span className="font-label-caps text-label-caps text-outline uppercase block mb-6">{page.eyebrow}</span>
        <h1 className="font-headline-lg text-on-background uppercase leading-none mb-6" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
          {page.title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-4">{page.intro}</p>
        {page.updated && (
          <p className="font-label-mono text-label-mono text-outline">{page.updated}</p>
        )}
      </section>

      <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-16 flex flex-col gap-8 animate-fade-up">
        {page.sections.map((section) => (
          <article key={section.heading} className="border-b border-outline-variant pb-8">
            <h2 className="font-headline-md text-headline-md text-on-background mb-4">{section.heading}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">{section.body}</p>
          </article>
        ))}
        <Link to="/contact" className="btn-brutal-primary font-label-caps text-label-caps px-8 py-4 w-max uppercase focus:outline-none focus:ring-2 focus:ring-tertiary/60 focus:ring-offset-2 focus:ring-offset-background">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
