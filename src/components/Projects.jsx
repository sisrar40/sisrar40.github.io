import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { projects, projectsData } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import SectionPill from './SectionPill';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll
    ? projectsData
    : projectsData.slice(0, projects.initialCount);

  return (
    <section id="projects" className="relative z-50 overflow-hidden py-16 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[150px]" />

      <SectionPill label={projects.eyebrow} />

      <div className="relative z-10 w-full">
        <div className="flex w-full flex-col items-center gap-12 lg:gap-20">
          <div className="w-full text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-red-500">
              {projects.portfolioLabel}
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tighter text-white md:text-5xl lg:text-6xl">
              {projects.titlePrefix}{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                {projects.titleHighlight}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-400">
              {projects.subtitle}
            </p>
          </div>

          <div className="grid w-full gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {displayed.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {projectsData.length > projects.initialCount && (
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="group relative mt-8 flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-900 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative flex items-center gap-2">
                {showAll ? projects.showLessLabel : projects.exploreAllLabel}
                <MoveUpRight className="h-4 w-4" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
