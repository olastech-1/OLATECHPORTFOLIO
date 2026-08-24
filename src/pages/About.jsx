// src/pages/About.jsx
import { Link } from 'react-router-dom';
import {
  FaLightbulb,
  FaPenRuler,
  FaRocket,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWandMagicSparkles,
} from 'react-icons/fa6';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';

const howIWork = [
  {
    Icon: FaLightbulb,
    boxClass: 'bg-gold/15',
    iconClass: 'text-gold',
    title: 'Discover',
    desc: 'Understanding your goals, audience and business needs before writing a line of code.',
  },
  {
    Icon: FaPenRuler,
    boxClass: 'bg-teal/15',
    iconClass: 'text-teal',
    title: 'Design',
    desc: 'A layout built around what your visitors actually need to see first.',
  },
  {
    Icon: FaRocket,
    boxClass: 'bg-gold/15',
    iconClass: 'text-gold',
    title: 'Develop',
    desc: 'Clean, hand-written code — fast to load, easy to maintain.',
  },
];

const toolkit = [
  {
    Icon: FaHtml5,
    colorClass: 'text-orange-500',
    label: 'HTML5',
  },
  {
    Icon: FaCss3Alt,
    colorClass: 'text-blue-400',
    label: 'CSS3',
  },
  {
    Icon: FaJs,
    colorClass: 'text-yellow-400',
    label: 'JavaScript',
  },
  {
    Icon: FaWandMagicSparkles,
    colorClass: 'text-teal',
    label: 'Tailwind',
  },
  {
    Icon: FaReact,
    colorClass: 'text-teal',
    label: 'React',
  },
];

const skills = ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive Design', 'React'];

function About() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 grid-texture">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="eyebrow text-gold">About me</p>
              <h1 className="font-display font-bold text-4xl sm:text-6xl mt-4 leading-[1.08]">
                Building the web, one honest site at a time.
              </h1>
              <p className="text-slate2 text-base sm:text-lg leading-relaxed mt-6 max-w-lg">
                I'm a web developer who builds fast, responsive websites for small businesses that
                want to look as good online as they do in person.
              </p>
              <div className="flex gap-4 mt-9">
                <Link to="/contact" className="btn btn-gold">
                  Let's work together
                </Link>
                <Link to="/services" className="btn btn-outline">
                  My services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="chrome chrome-dark">
                <div className="chrome-bar">
                  <span className="chrome-dot bg-[#FF5F57]"></span>
                  <span className="chrome-dot bg-[#FEBC2E]"></span>
                  <span className="chrome-dot bg-[#28C840]"></span>
                  <span className="chrome-bar-url">about.me</span>
                </div>
                <div className="p-7 space-y-5 font-mono2 text-sm">
                  <p className="text-white/40">// what I care about</p>
                  <p className="text-teal">
                    focus: <span className="text-white">"clarity over clutter"</span>
                  </p>
                  <p className="text-teal">
                    speed: <span className="text-white">"non-negotiable"</span>
                  </p>
                  <p className="text-teal">
                    codebase: <span className="text-white">"clean, no bloat"</span>
                  </p>
                  <p className="text-teal">
                    communication: <span className="text-white">"plain, no jargon"</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-gold">The person behind OlaTech</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">Meet the Developer</h2>
          </Reveal>

          <div className="chrome dev-card p-8 sm:p-12">
            <div className="dev-grid lg:grid-cols-[280px_1fr]">
              <Reveal>
                <div className="dev-photo-wrap w-48 h-48 sm:w-56 sm:h-56 mx-auto lg:mx-0">
                  <img
                    src="https://i.postimg.cc/JzWv2g6b/IMG-20260707-WA0000.jpg"
                    alt="Olanrewaju, founder of OlaTech"
                    className="dev-photo"
                    loading="lazy"
                  />
                </div>
                <div className="dev-status bg-gold text-ink font-mono2 text-xs w-max mt-[18px] mx-auto lg:mx-0">
                  <span className="dev-status-dot"></span>
                  Available for work
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h3 className="font-display font-bold text-2xl">Olanrewaju</h3>
                <p className="text-gold font-mono2 text-sm mt-1">
                  Founder &amp; Web Developer, OlaTech
                </p>
                <p className="text-slate2 leading-relaxed mt-5">
                  I'm Olanrewaju, the developer behind OlaTech. I build fast, clean, mobile-first
                  websites for small businesses — no bloated templates, no unnecessary plugins, just
                  code that loads quickly and works properly on every screen. I care about clarity,
                  honest communication with clients, and shipping sites people actually enjoy using.
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {skills.map((skill) => (
                    <span key={skill} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="dev-stats">
                  <div>
                    <p className="font-display font-bold text-2xl text-gold">
                      <Counter target={8} />
                    </p>
                    <p className="text-slate2 text-xs mt-1">Projects shipped</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-teal">
                      <Counter target={2} />
                    </p>
                    <p className="text-slate2 text-xs mt-1">Years experience</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-gold">
                      <Counter target={100} suffix="%" />
                    </p>
                    <p className="text-slate2 text-xs mt-1">Client satisfaction</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href="https://github.com/olastech-1"
                    target="_blank"
                    rel="noopener"
                    className="btn btn-outline !py-2.5 !px-4 text-sm"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href="mailto:olatechdevelop@gmail.com"
                    className="btn btn-outline !py-2.5 !px-4 text-sm"
                  >
                    <FaEnvelope className="mr-2" />
                    Email
                  </a>
                  <a
                    href="https://wa.me/2347040181204"
                    target="_blank"
                    rel="noopener"
                    className="btn btn-gold !py-2.5 !px-4 text-sm"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-gold">How I work</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">
              Discover, design, develop.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {howIWork.map((item, i) => (
              <Reveal key={item.title} delay={(i % 6) * 70}>
                <div className="chrome p-7 h-full">
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

      <section className="py-20 sm:py-28 bg-ink text-white grid-texture-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="text-center max-w-xl mx-auto">
            <p className="eyebrow text-gold">Toolkit</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">
              Technologies I work with
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
            {toolkit.map((tool, i) => (
              <Reveal key={tool.label} delay={(i % 6) * 70}>
                <div className="chrome chrome-dark p-7 text-center h-full">
                  <tool.Icon className={`${tool.colorClass} text-3xl`} />
                  <h3 className="font-semibold mt-4 text-sm">{tool.label}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="chrome chrome-dark p-10 sm:p-16 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">
              Have an idea?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mt-5 leading-relaxed">
              Let's turn it into a website your customers remember.
            </p>
            <Link to="/contact" className="btn btn-gold inline-flex mt-9">
              Contact me
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default About;
