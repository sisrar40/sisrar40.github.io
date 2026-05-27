import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import TechTag from './TechTag';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const spotlightRef = useRef(null);

  const maxVisible = projects.maxVisibleTags;
  const visibleTools = project.tools.slice(0, maxVisible);
  const extraCount = project.tools.length - visibleTools.length;

  const handleMouseMove = (e) => {
    if (!cardRef.current || !spotlightRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mousePosition.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    spotlightRef.current.style.background = `radial-gradient(600px circle at ${mousePosition.current.x}px ${mousePosition.current.y}px, rgba(239, 68, 68, 0.1), transparent 40%)`;
  };

  const openProject = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div
      ref={cardRef}
      role="link"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProject();
        }
      }}
      onMouseMove={handleMouseMove}
      className="group relative h-full cursor-pointer"
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
      />

      <Card className="flex h-full flex-col transition-all duration-500 hover:border-red-600/50 hover:shadow-red-600/10">
        <div className="relative aspect-video overflow-hidden">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-red-950/30 via-[#101123] to-[#050505]">
            <span className="px-4 text-center text-lg font-bold text-white/30">{project.name}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-gradient-to-r from-red-600 to-red-900 px-3 py-1 text-[10px] font-bold uppercase text-white">
            {project.type}
          </span>
        </div>

        <CardHeader className="p-6 pb-2">
          <CardTitle className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-red-500">
            {project.name}
            <ExternalLink className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
          </CardTitle>
        </CardHeader>

        <CardContent className="px-6 pb-6">
          <p className="line-clamp-3 text-sm font-medium italic leading-relaxed text-slate-400">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {visibleTools.map((tool) => (
              <TechTag key={tool} name={tool} />
            ))}
            {extraCount > 0 && (
              <span className="rounded-lg border border-red-600/30 bg-red-600/10 px-3 py-1 text-[11px] font-bold text-red-400">
                +{extraCount}
              </span>
            )}
          </div>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-red-500/80 group-hover:text-red-500">
            {projects.viewDetailsLabel}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
