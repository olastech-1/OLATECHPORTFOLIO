// src/pages/Services.jsx
import { Link } from 'react-router-dom';
import {
  FaCode,
  FaCartShopping,
  FaLayerGroup,
  FaPenRuler,
  FaMobileScreenButton,
  FaScrewdriverWrench,
  FaCheck,
} from 'react-icons/fa6';
import Reveal from '../components/Reveal';
import FaqItem from '../components/FaqItem';

const services = [
  {
    Icon: FaCode,
    boxClass: 'bg-gold/15',
    iconClass: 'text-gold',
    title: 'Website Development',
    desc: 'Modern business websites built with clean code, responsive layouts and strong performance.',
    features: ['Responsive design', 'Fast performance', 'SEO friendly'],
  },
  {
    Icon: FaCartShopping,
    boxClass: 'bg-teal/15',
    iconClass: 'text-teal',
    title: 'E-Commerce Stores',
    desc: 'Complete online stores designed to help you sell products with a smooth customer experience.',
    features: ['Product pages', 'Shopping experience', 'Mobile optimized'],
  },
  {
    Icon: FaLayerGroup,
    boxClass: 'bg-gold/15',
    iconClass: 'text-gold',
    title: 'Landing Pages',
    desc: 'High-converting landing pages created for startups, campaigns and online businesses.',
    features: ['Modern UI design', 'Conversion focused', 'Premium animations'],
  },
  {
    Icon: FaPenRuler,
    boxClass: 'bg-teal/15',
    iconClass: 'text-teal',
    title: 'UI / UX Design',
    desc: 'Beautiful, usable interfaces focused on simplicity and professional branding.',
    features: ['User research', 'Wireframes', 'Modern layouts'],
  },
  {
    Icon: FaMobileScreenButton,
    boxClass: 'bg-gold/15',
    iconClass: 'text-gold',
    title: 'Responsive Optimization',
    desc: 'Websites that look and work perfectly on phones, tablets and desktop.',
    features: ['Mobile first', 'Cross browser', 'Smooth experience'],
  },
  {
    Icon: FaScrewdriverWrench,
    boxClass: 'bg-teal/15',
    iconClass: 'text-teal',
    title: 'Website Maintenance',
    desc: 'Ongoing updates and support to keep your website running smoothly.',
    features: ['Bug fixes', 'Updates', 'Performance checks'],
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Understanding your goals and requirements.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Creating your website structure and look.',
  },
  {
    num: '03',
    title: 'Development',
    desc: 'Turning the design into a working site.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Testing and delivering the final product.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    dark: false,
    desc: 'Personal brands and small businesses.',
    price: '$100',
    priceNote: 'from',
    features: ['One page website', 'Responsive design', 'Contact section'],
    cta: 'Choose plan',
    ctaClass: 'btn-outline',
  },
  {
    name: 'Professional',
    dark: true,
    popular: true,
    desc: 'Companies that need a full website.',
    price: '$400',
    priceNote: 'from',
    features: ['Multi-page website', 'SEO optimization', 'Advanced UI design'],
    cta: 'Choose plan',
    ctaClass: 'btn-gold',
  },
  {
    name: 'Enterprise',
    dark: false,
    desc: 'Complete digital solutions for larger businesses.',
    price: 'Custom',
    priceNote: null,
    features: ['Full website system', 'Custom features', 'Ongoing support'],
    cta: 'Contact me',
    ctaClass: 'btn-outline',
  },
];

const faqs = [
  {
    question: 'How long does a website take?',
    answer: 'Most websites are completed within one to four weeks, depending on scope.',
  },
  {
    question: 'Do you create responsive websites?',
    answer: 'Yes — every website is tested on mobile, tablet and desktop before launch.',
  },
  {
    question: 'Can you maintain my website after launch?',
    answer: 'Yes, I offer ongoing updates, fixes and improvements after your site goes live.',
  },
];

function Services() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 grid-texture">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow text-gold">My services</p>
            <h1 className="font-display font-bold text-4xl sm:text-6xl mt-4 leading-[1.08]">
              Digital solutions built for modern businesses.
            </h1>
            <p className="text-slate2 text-base sm:text-lg leading-relaxed mt-6">
              Professional websites designed to improve your brand, attract customers and grow your
              business online.
            </p>
            <Link to="/contact" className="btn btn-gold inline-flex mt-9">
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 6) * 70}>
                <div className="chrome p-7 h-full">
                  <div
                    className={`w-11 h-11 rounded-xl ${service.boxClass} flex items-center justify-center`}
                  >
                    <service.Icon className={service.iconClass} />
                  </div>
                  <h2 className="font-display font-semibold text-xl mt-5">{service.title}</h2>
                  <p className="text-slate2 text-sm mt-2 leading-relaxed">{service.desc}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <FaCheck className="text-teal text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-ink text-white grid-texture-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="text-center max-w-xl mx-auto">
            <p className="eyebrow text-gold">Process</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">
              How your project gets built
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={(i % 6) * 70}>
                <div className="chrome chrome-dark p-6 text-center h-full">
                  <span className="font-mono2 text-gold text-lg">{step.num}</span>
                  <h3 className="font-semibold mt-3 text-sm">{step.title}</h3>
                  <p className="text-white/50 text-xs mt-2">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="text-center max-w-xl mx-auto">
            <p className="eyebrow text-gold">Pricing</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">
              Simple packages for your business
            </h2>
            <p className="text-slate2 mt-4 text-sm sm:text-base">
              Every project is customized — these are starting points, not fixed quotes.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={(i % 6) * 70}>
                <div
                  className={`p-7 h-full relative ${plan.dark ? 'chrome chrome-dark' : 'chrome'}`}
                >
                  {plan.popular && (
                    <p className="pill inline-block !bg-gold/15 !text-gold">Popular</p>
                  )}
                  <h3
                    className={`font-display font-semibold text-xl ${plan.dark ? 'text-white' : ''} ${plan.popular ? 'mt-4' : ''}`}
                  >
                    {plan.name}
                  </h3>
                  <p className={`text-sm mt-2 ${plan.dark ? 'text-white/50' : 'text-slate2'}`}>
                    {plan.desc}
                  </p>
                  <p
                    className={`font-display font-bold text-4xl mt-6 ${plan.dark ? 'text-white' : ''}`}
                  >
                    {plan.price}
                    {plan.priceNote && (
                      <span
                        className={`text-base font-normal ${plan.dark ? 'text-white/50' : 'text-slate2'}`}
                      >
                        {' '}
                        {plan.priceNote}
                      </span>
                    )}
                  </p>
                  <ul
                    className={`mt-6 space-y-3 text-sm ${plan.dark ? 'text-white/70' : 'text-slate2'}`}
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <FaCheck className={`text-xs ${plan.dark ? 'text-gold' : 'text-teal'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`btn ${plan.ctaClass} w-full mt-8`}>
                    {plan.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white border-y border-ink/10">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <Reveal className="text-center">
            <p className="eyebrow text-gold">FAQ</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="space-y-4 mt-10">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={(i % 6) * 70}>
                <FaqItem question={faq.question} answer={faq.answer} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="chrome chrome-dark p-10 sm:p-16 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">
              Ready to build something amazing?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mt-5 leading-relaxed">
              Let's create a website that helps your business grow.
            </p>
            <Link to="/contact" className="btn btn-gold inline-flex mt-9">
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Services;
