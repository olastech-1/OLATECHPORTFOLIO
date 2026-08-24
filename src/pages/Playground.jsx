// src/pages/Playground.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import Reveal from '../components/Reveal';
import DemoBadge from '../components/playground/DemoBadge';
import StateCounterDemo from '../components/playground/StateCounterDemo';
import LiveFilterDemo from '../components/playground/LiveFilterDemo';
import FormValidationDemo from '../components/playground/FormValidationDemo';
import QuoteCalculatorDemo from '../components/playground/QuoteCalculatorDemo';
import GithubApiDemo from '../components/playground/GithubApiDemo';
import ButtonLab from '../components/playground/ButtonLab';

const categories = [
  {
    id: 'all',
    label: 'All',
  },
  {
    id: 'react',
    label: 'React',
  },
  {
    id: 'javascript',
    label: 'JavaScript',
  },
  {
    id: 'api',
    label: 'API Integration',
  },
  {
    id: 'components',
    label: 'Component Lab',
  },
];

const demos = [
  {
    id: 'counter',
    category: 'react',
    title: 'Live State Counter',
    tryText: 'Click the buttons — every click updates real React state.',
    Component: StateCounterDemo,
  },
  {
    id: 'filter',
    category: 'react',
    title: 'Live Search & Filter',
    tryText: 'Type to filter the list instantly, no page reload.',
    Component: LiveFilterDemo,
  },
  {
    id: 'validation',
    category: 'javascript',
    title: 'Form Validation',
    tryText: 'Type an email and watch it validate as you go.',
    Component: FormValidationDemo,
  },
  {
    id: 'calculator',
    category: 'javascript',
    title: 'Project Quote Calculator',
    tryText: 'Check add-ons and watch the total recalculate live.',
    Component: QuoteCalculatorDemo,
  },
  {
    id: 'github',
    category: 'api',
    title: 'Live GitHub Repos',
    tryText: 'Real data pulled from my GitHub account — try the refresh icon.',
    Component: GithubApiDemo,
  },
  {
    id: 'buttons',
    category: 'components',
    title: 'Button Playground',
    tryText: 'Change size, variant, disabled and loading states.',
    Component: ButtonLab,
  },
];

function Playground() {
  const [activeCategory, setActiveCategory] = useState('all');
  const visibleDemos =
    activeCategory === 'all' ? demos : demos.filter((demo) => demo.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-10 sm:pt-40 sm:pb-14 grid-texture">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center max-w-3xl">
          <Reveal>
            <p className="eyebrow text-gold">Try my work</p>
            <h1 className="font-display font-bold text-4xl sm:text-6xl mt-4 leading-[1.08]">
              Interactive Playground
            </h1>
            <p className="text-slate2 text-base sm:text-lg leading-relaxed mt-6">
              Most portfolios show screenshots and ask you to trust them. This page is real, running
              code — try it, type into it, click things. Everything here is genuinely built with
              what it claims to be.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-10">
        <Reveal className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`filter-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {visibleDemos.map((demo, i) => (
              <Reveal key={demo.id} delay={(i % 6) * 70} className="chrome">
                <div className="chrome-bar">
                  <span className="chrome-dot bg-[#FF5F57]"></span>
                  <span className="chrome-dot bg-[#FEBC2E]"></span>
                  <span className="chrome-dot bg-[#28C840]"></span>
                  <span className="chrome-bar-url">{demo.title}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start gap-3 mb-1">
                    <h2 className="font-display font-semibold text-lg">{demo.title}</h2>
                    <DemoBadge label="Try it" />
                  </div>
                  <p className="text-slate2 text-sm mb-6">{demo.tryText}</p>
                  <demo.Component />
                </div>
              </Reveal>
            ))}
          </div>

          {visibleDemos.length === 0 && (
            <p className="text-center text-slate2 mt-12">No demos in this category yet.</p>
          )}
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="chrome chrome-dark p-10 sm:p-16 text-center">
            <p className="eyebrow text-gold">Liked what you tried?</p>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4">
              Let's build something like this for you.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mt-5 leading-relaxed">
              Everything on this page is the same kind of real, working functionality I build into
              client projects.
            </p>
            <Link to="/contact" className="btn btn-gold inline-flex mt-9">
              Start your project <FaArrowRight className="text-sm" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Playground;
