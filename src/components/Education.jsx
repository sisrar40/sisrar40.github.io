import Tilt from 'react-parallax-tilt';
import { Calendar, GraduationCap, School } from 'lucide-react';
import SectionReveal from './SectionReveal';
import SectionPill from './SectionPill';
import { education, educations, interests } from '../data/portfolio';

export default function Education() {
  return (
    <div id="education" className="relative z-50 overflow-hidden bg-[#050505] py-16 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[120px]" />

      <SectionPill label={education.pillLabel} />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-8">
            {educations.map((item, index) => (
              <SectionReveal key={item.id} direction="right" delay={index * 0.1}>
                <Tilt perspective={1500} glareEnable glareMaxOpacity={0.1} scale={1.02}>
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:border-red-600/50">
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-transform duration-500 group-hover:scale-110">
                        <GraduationCap className="h-7 w-7 text-red-500" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
                            <Calendar className="h-3 w-3" />
                            {item.duration}
                          </div>
                          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-red-500 md:text-2xl">
                            {item.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 font-medium text-slate-400">
                          <School className="h-4 w-4 text-red-900" />
                          {item.institution}
                        </div>
                      </div>
                    </div>
                    <GraduationCap className="absolute -bottom-4 -right-4 h-32 w-32 text-red-500 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08]" />
                  </div>
                </Tilt>
              </SectionReveal>
            ))}
          </div>

          <div className="order-first lg:order-last">
            <SectionReveal direction="left">
              <div className="group relative overflow-hidden rounded-[40px] border border-white/5 bg-white/[0.01] p-10 backdrop-blur-3xl lg:p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-900/5" />
                <div className="relative z-10 flex flex-col gap-8 text-center lg:text-left">
                  <h3 className="text-3xl font-black text-white md:text-4xl">
                    <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                      {interests.title}
                    </span>
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                    {interests.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-slate-300 transition hover:border-red-500/30 hover:text-red-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
