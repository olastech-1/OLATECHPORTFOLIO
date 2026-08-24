// src/pages/Projects.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa6';
import Reveal from '../components/Reveal';
import { useProjects } from '../hooks/useProjects';

const filters = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'agency',
    label: 'Business',
  },
  {
    value: 'ecommerce',
    label: 'E-Commerce',
  },
  {
    value: 'landing',
    label: 'Landing Page',
  },
  {
    value: 'web-design',
    label: 'Web Design',
  },
];

function Projects() {
  const { projects, loading } = useProjects();
  const [activeCategory, setActiveCategory] = useState('all');
  const visibleProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-10 sm:pt-40 sm:pb-14 grid-texture">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow text-gold">My portfolio</p>
            <h1 className="font-display font-bold text-4xl sm:text-6xl mt-4 leading-[1.08]">
              Projects that turn ideas into reality.
            </h1>
            <p className="text-slate2 text-base sm:text-lg leading-relaxed mt-6">
              A collection of websites built with modern technologies, clean design and real
              attention to detail.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-10">
        <Reveal className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveCategory(filter.value)}
              className={`filter-btn ${activeCategory === filter.value ? 'is-active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </Reveal>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, i) => (
              <Reveal
                key={project.id}
                delay={(i % 6) * 70}
                className={`chrome proj-card ${project.coming_soon ? 'opacity-90' : ''}`}
              >
                <div className="chrome-bar">
                  <span className="chrome-dot bg-[#FF5F57]"></span>
                  <span className="chrome-dot bg-[#FEBC2E]"></span>
                  <span className="chrome-dot bg-[#28C840]"></span>
                  <span className="chrome-bar-url">{project.chrome_url}</span>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={project.image_url}
                    className={`w-full h-52 object-cover ${project.coming_soon ? 'grayscale' : ''}`}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className={`pill ${project.coming_soon ? '!bg-slate2/10 !text-slate2' : ''}`}>
                    {project.pill}
                  </p>
                  <h2 className="font-display font-semibold text-lg mt-3">{project.title}</h2>
                  <p className="text-slate2 text-sm mt-2 leading-relaxed">{project.description}</p>

                  {project.coming_soon ? (
                    <button
                      disabled
                      className="w-full mt-5 btn !py-2.5 text-sm bg-ink/5 text-slate2 cursor-not-allowed"
                    >
                      Coming soon
                    </button>
                  ) : (
                    <>
                      <div className="flex gap-2 mt-4 text-xs text-slate2 font-mono2">
                        {project.tags.map((tag, idx) => (
                          <span key={tag}>
                            {idx > 0 && '· '}
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 mt-5">
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
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {loading ? (
            <p className="text-center text-slate2 mt-12">Loading projects...</p>
          ) : (
            visibleProjects.length === 0 && (
              <p className="text-center text-slate2 mt-12">No projects in this category yet.</p>
            )
          )}
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-ink text-white grid-texture-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="eyebrow text-gold">Focus</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">
                Built around speed, clarity and results.
              </h2>
              <p className="text-white/60 mt-5 leading-relaxed">
                Every project is checked on real mobile connections before it ships — not just
                tested on a fast office wifi.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="chrome chrome-dark p-7">
                <div className="grid grid-cols-2 gap-5 text-center">
                  <div>
                    <p className="font-display font-bold text-3xl text-gold">&lt;1.5s</p>
                    <p className="text-white/50 text-sm mt-1">Target load time</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-3xl text-teal">100%</p>
                    <p className="text-white/50 text-sm mt-1">Mobile tested</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-3xl text-gold">24h</p>
                    <p className="text-white/50 text-sm mt-1">Reply time</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-3xl text-teal">0</p>
                    <p className="text-white/50 text-sm mt-1">Template themes used</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="chrome chrome-dark p-10 sm:p-16 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">
              Have a project in mind?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mt-5 leading-relaxed">
              Let's build a website that represents your brand properly.
            </p>
            <Link to="/contact" className="btn btn-gold inline-flex mt-9">
              Start your project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Projects;
