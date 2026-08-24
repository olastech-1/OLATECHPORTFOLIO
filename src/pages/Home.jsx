// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaGaugeHigh,
  FaLaptopCode,
  FaCartShopping,
  FaBolt,
  FaMobileScreenButton,
  FaGithub,
  FaStar,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
} from 'react-icons/fa6';
import Reveal from '../components/Reveal';
import TypingCode from '../components/TypingCode';
import FaqItem from '../components/FaqItem';
import { useProjects } from '../hooks/useProjects';
import { useTestimonials } from '../hooks/useTestimonials';

const buildTypes = [
  {
    Icon: FaLaptopCode,
    boxClass: 'bg-gold/15',
    iconClass: 'text-gold',
    title: 'Business websites',
    desc: 'Custom-built, fast to load, easy for you to update.',
  },
  {
    Icon: FaCartShopping,
    boxClass: 'bg-teal/15',
    iconClass: 'text-teal',
    title: 'Online stores',
    desc: 'Product pages and checkout flows built to convert.',
  },
  {
    Icon: FaBolt,
    boxClass: 'bg-gold/15',
    iconClass: 'text-gold',
    title: 'Landing pages',
    desc: 'Single-focus pages for ads, launches and campaigns.',
  },
  {
    Icon: FaMobileScreenButton,
    boxClass: 'bg-teal/15',
    iconClass: 'text-teal',
    title: 'Responsive UI',
    desc: 'Every layout tested on real phones, not just desktop.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery call',
    desc: 'Goals, audience, must-haves — usually a 20 minute chat.',
  },
  {
    num: '02',
    title: 'Design draft',
    desc: 'A layout you can react to before any code is written.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Hand-coded, responsive, checked against real devices.',
  },
  {
    num: '04',
    title: 'Launch & handover',
    desc: 'Site goes live, you get a walkthrough of how to edit it.',
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
  {
    question: 'What do you need from me to get started?',
    answer:
      'Just your goals, any brand assets you already have (logo, colors) and your content — I can help you shape the rest.',
  },
];

const marqueeItems = (
  <>
    <FaHtml5 className="text-3xl text-orange-500" />
    <FaCss3Alt className="text-3xl text-blue-500" />
    <FaJs className="text-3xl text-yellow-500" />
    <span className="font-mono2 text-lg text-slate2">Tailwind CSS</span>
    <FaGithub className="text-3xl" />
    <span className="font-mono2 text-lg text-slate2">Vercel</span>
    <FaFigma className="text-3xl text-pink-500" />
  </>
);

function Home() {
  const { projects, loading: projectsLoading } = useProjects();
  const { testimonials, loading: testimonialsLoading } = useTestimonials();
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 grid-texture overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-white border border-ink/10 rounded-full px-3.5 py-1.5">
                <span className="status-dot"></span>
                <span className="eyebrow text-slate2">Open for new projects</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mt-6 leading-[1.08]">
                More than a brochure. A website that{' '}
                <span className="text-gold">actually works</span> for your business.
              </h1>
              <p className="text-slate2 text-base sm:text-lg leading-relaxed mt-6 max-w-lg">
                I design and build fast, clean business websites, online stores and landing pages —
                the kind that make a first-time visitor comfortable enough to buy or book.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-9">
                <Link to="/contact" className="btn btn-gold">
                  Start a project <FaArrowRight className="text-sm" />
                </Link>
                <Link to="/projects" className="btn btn-outline">
                  See the work
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 max-w-md">
                <div>
                  <p className="font-display font-bold text-2xl sm:text-3xl">24h</p>
                  <p className="text-slate2 text-sm mt-1">Reply time</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl sm:text-3xl">100%</p>
                  <p className="text-slate2 text-sm mt-1">Hand-written code</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl sm:text-3xl">Mon–Sat</p>
                  <p className="text-slate2 text-sm mt-1">Availability</p>
                </div>
              </div>
              <p className="text-slate2 text-sm mt-8 max-w-md">
                Forms that actually deliver. Logins that actually work. Content you can edit
                yourself.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="chrome chrome-dark">
                <div className="chrome-bar">
                  <span className="chrome-dot bg-[#FF5F57]"></span>
                  <span className="chrome-dot bg-[#FEBC2E]"></span>
                  <span className="chrome-dot bg-[#28C840]"></span>
                  <span className="chrome-bar-url">yourbusiness.com</span>
                </div>
                <TypingCode />
              </div>
              <div className="chrome mt-5 p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <FaGaugeHigh className="text-teal" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Built for speed first</p>
                  <p className="text-slate2 text-xs mt-0.5">
                    Every site is checked on real mobile connections before it ships.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-14 border-y border-ink/10 bg-white overflow-hidden">
        <Reveal>
          <p className="text-center eyebrow text-slate2 mb-7">Built with</p>
          <div className="marquee-track">
            <div className="flex items-center gap-16 pr-16">{marqueeItems}</div>
            <div className="flex items-center gap-16 pr-16" aria-hidden="true">
              {marqueeItems}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-gold">What I build</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">
              Four ways to get your business online
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {buildTypes.map((item, i) => (
              <Reveal key={item.title} delay={(i % 6) * 70}>
                <div className="chrome p-6 h-full">
                  <div
                    className={`w-11 h-11 rounded-xl ${item.boxClass} flex items-center justify-center`}
                  >
                    <item.Icon className={item.iconClass} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mt-5">{item.title}</h3>
                  <p className="text-slate2 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow text-gold">Try my work</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">
                Don't just take my word for it — try it.
              </h2>
              <p className="text-slate2 mt-5 leading-relaxed max-w-lg">
                Most portfolios show screenshots. Mine has a playground where you can actually test
                real React components, live API calls and small tools I've built — right in the
                browser.
              </p>
              <Link to="/playground" className="btn btn-gold mt-8">
                Explore Interactive Work <FaArrowRight className="text-sm" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="chrome p-6">
                <p className="eyebrow text-teal">React</p>
                <p className="text-sm mt-2 text-slate2">Live state, filtering, dynamic UI</p>
              </div>
              <div className="chrome p-6">
                <p className="eyebrow text-gold">API</p>
                <p className="text-sm mt-2 text-slate2">
                  Real requests, loading &amp; error states
                </p>
              </div>
              <div className="chrome p-6">
                <p className="eyebrow text-teal">JavaScript</p>
                <p className="text-sm mt-2 text-slate2">Validation, live calculations</p>
              </div>
              <div className="chrome p-6">
                <p className="eyebrow text-gold">Component Lab</p>
                <p className="text-sm mt-2 text-slate2">Change props, see it update</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-ink text-white grid-texture-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="eyebrow text-gold">How a project runs</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">
                Nothing starts until the plan is clear.
              </h2>
              <p className="text-white/60 mt-5 leading-relaxed">
                Every build follows the same order — so you always know what's happening next and
                when to expect it.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="chrome chrome-dark">
                <div className="chrome-bar">
                  <span className="chrome-dot bg-[#FF5F57]"></span>
                  <span className="chrome-dot bg-[#FEBC2E]"></span>
                  <span className="chrome-dot bg-[#28C840]"></span>
                  <span className="chrome-bar-url">process.log</span>
                </div>
                <div className="p-6 space-y-5">
                  {processSteps.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <span className="font-mono2 text-gold text-sm pt-0.5">{step.num}</span>
                      <div>
                        <p className="font-semibold text-sm">{step.title}</p>
                        <p className="text-white/50 text-xs mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="flex flex-wrap justify-between items-end gap-4">
            <div>
              <p className="eyebrow text-gold">Selected work</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">Recent projects</h2>
            </div>
            <Link
              to="/projects"
              className="text-sm font-semibold flex items-center gap-2 hover:text-gold"
            >
              View all projects <FaArrowRight className="text-xs" />
            </Link>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6 mt-12">
            {projectsLoading ? (
              <p className="text-slate2 text-sm">Loading projects...</p>
            ) : (
              featuredProjects.map((project, i) => (
                <Reveal key={project.id} delay={(i % 6) * 70} className="chrome proj-card">
                  <div className="chrome-bar">
                    <span className="chrome-dot bg-[#FF5F57]"></span>
                    <span className="chrome-dot bg-[#FEBC2E]"></span>
                    <span className="chrome-dot bg-[#28C840]"></span>
                    <span className="chrome-bar-url">{project.chrome_url}</span>
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={project.image_url}
                      className="w-full h-52 object-cover"
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <p className="pill">{project.pill}</p>
                    <h2 className="font-display font-semibold text-lg mt-3">{project.title}</h2>
                    <p className="text-slate2 text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-2 mt-4 text-xs text-slate2 font-mono2">
                      {project.tags.map((tag, idx) => (
                        <span key={tag}>
                          {idx > 0 && '· '}
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-5">
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener"
                        className="flex-1 btn btn-gold !py-2.5 text-sm"
                      >
                        Live
                      </a>
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener"
                        className="flex-1 btn btn-outline !py-2.5 text-sm"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))
            )}
          </div>

          <div className="mt-6">
            <Link to="/projects" className="btn btn-outline">
              View more projects <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-gold">Client feedback</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">What clients say</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonialsLoading ? (
              <p className="text-slate2 text-sm">Loading testimonials...</p>
            ) : (
              testimonials.map((t, i) => (
                <Reveal key={t.id} delay={(i % 6) * 70}>
                  <div className="chrome p-7 h-full">
                    <div className="flex gap-1 text-gold text-sm">
                      {Array.from({
                        length: t.rating,
                      }).map((_, starIdx) => (
                        <FaStar key={starIdx} />
                      ))}
                    </div>
                    <p className="text-slate2 text-sm mt-4 leading-relaxed">"{t.quote}"</p>
                    <p className="font-semibold text-sm mt-5">{t.author}</p>
                  </div>
                </Reveal>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
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

      <section className="py-20 sm:py-28 bg-paperdim">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="chrome chrome-dark p-10 sm:p-16 text-center">
            <p className="eyebrow text-gold">Let's talk</p>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4">
              Ready to build your next website?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mt-5 leading-relaxed">
              Tell me what you're working on — I'll reply within a day with next steps.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
              <Link to="/contact" className="btn btn-gold">
                Start your project
              </Link>
              <a
                href="https://wa.me/2347040181204?text=Hi%20OlaTech%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost-dark"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Home;
