import Marquee from 'react-fast-marquee';
import SectionReveal from './SectionReveal';
import { skills, skillsMarquee } from '../data/portfolio';
import { getSkillColor, getSkillIcon } from '../utils/skillIcons';

function SkillItem({ skill }) {
  const Icon = getSkillIcon(skill.name);
  const color = getSkillColor(skill.name);

  return (
    <div className="group mx-4 my-4">
      <div className="relative flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-6 shadow-xl backdrop-blur-3xl transition-all duration-500 hover:border-red-500/30 hover:bg-white/[0.05]">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110"
          style={{ color, backgroundColor: `${color}20` }}
        >
          <Icon className="h-6 w-6" style={{ color }} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:text-red-500">
            {skill.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-tighter text-slate-500">
            {skill.label}
          </span>
        </div>
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const mid = Math.ceil(skillsMarquee.length / 2);
  const firstHalf = skillsMarquee.slice(0, mid);
  const secondHalf = skillsMarquee.slice(mid);

  return (
    <div id="skills" className="relative z-50 overflow-hidden py-24 lg:py-48">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-red-950/10 blur-[120px]" />

      <div className="relative w-full">
        <div className="mb-16 flex w-full flex-col items-center justify-center px-4 lg:mb-24">
          <SectionReveal direction="down">
            <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-4 text-center">
              <div className="flex items-center justify-center gap-3 text-red-500">
                <span className="h-px w-8 shrink-0 bg-red-500/50 sm:w-12" />
                <span className="text-xs font-bold uppercase tracking-[0.5em]">{skills.eyebrow}</span>
                <span className="h-px w-8 shrink-0 bg-red-500/50 sm:w-12" />
              </div>
              <h2 className="text-4xl font-black tracking-tighter text-white md:text-5xl lg:text-6xl">
                {skills.titlePrefix}{' '}
                <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                  {skills.titleHighlight}
                </span>
              </h2>
            </div>
          </SectionReveal>
        </div>

        <div className="relative mb-12 flex flex-col gap-6 lg:mb-16 lg:gap-8">
          <SectionReveal direction="right" delay={0.2}>
            <Marquee speed={40} gradient={false} pauseOnHover>
              {firstHalf.map((skill) => (
                <SkillItem key={`a-${skill.categoryId}-${skill.name}`} skill={skill} />
              ))}
            </Marquee>
          </SectionReveal>
          <SectionReveal direction="left" delay={0.4}>
            <Marquee speed={35} gradient={false} pauseOnHover direction="right">
              {secondHalf.map((skill) => (
                <SkillItem key={`b-${skill.categoryId}-${skill.name}`} skill={skill} />
              ))}
            </Marquee>
          </SectionReveal>
        </div>

        <SectionReveal direction="up" delay={0.2}>
          <p className="mb-6 text-center text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            {skills.categoriesLabel}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.categories.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md"
              >
                <h3 className="mb-4 border-b border-white/10 pb-3 text-sm font-bold uppercase tracking-widest text-red-500">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((name) => {
                    const Icon = getSkillIcon(name);
                    const color = getSkillColor(name);
                    return (
                      <span
                        key={name}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300"
                      >
                        <Icon className="h-4 w-4 shrink-0" style={{ color }} />
                        {name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
