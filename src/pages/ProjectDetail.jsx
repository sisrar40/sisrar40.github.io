import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Building2 } from 'lucide-react';
import { getProjectById, projectDetail } from '../data/portfolio';
import { CONTAINER_X, SECTION_X } from '../constants/layout';
import TechTag from '../components/TechTag';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className={`min-h-screen ${SECTION_X} py-24`}>
        <div className={CONTAINER_X}>
          <p className="text-slate-400">{projectDetail.notFound}</p>
          <Link to="/" className="mt-4 inline-block text-red-500 hover:text-red-400">
            ← {projectDetail.backToPortfolio}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <header className={`border-b border-white/10 bg-[#050505]/90 py-6 backdrop-blur-xl ${SECTION_X}`}>
        <div className={`${CONTAINER_X} flex items-center gap-4`}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-red-500/50 hover:text-red-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {projectDetail.backToPortfolio}
          </Link>
        </div>
      </header>

      <main className={`py-12 lg:py-20 ${SECTION_X}`}>
        <div className={CONTAINER_X}>
          <span className="mb-4 inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-red-500">
            {project.type}
          </span>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="mb-10 max-w-3xl text-lg font-medium italic leading-relaxed text-slate-400">
            {project.description}
          </p>

          <div className="mb-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md lg:p-10">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
              <Building2 className="h-5 w-5 text-red-600" />
              {projectDetail.responsibilitiesTitle}
            </h2>
            <ul className="space-y-3">
              {project.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-white">{projectDetail.technologiesTitle}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <TechTag key={tool} name={tool} size="lg" />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
