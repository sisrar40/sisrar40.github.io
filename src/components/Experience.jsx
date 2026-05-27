import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsPersonWorkspace } from 'react-icons/bs';
import { Building2, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolio';
import SectionPill from './SectionPill';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const line = lineRef.current;
      const timeline = timelineRef.current;
      const section = sectionRef.current;
      if (!line || !timeline || !section) return;

      if (reduced) {
        gsap.set(line, { scaleY: 1 });
        gsap.set('.experience-card, .experience-dot, .experience-detail', {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        });
        return;
      }

      gsap.set(line, { scaleY: 0, transformOrigin: 'top center' });

      gsap.to(line, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 75%',
          end: 'bottom 55%',
          scrub: 0.5,
        },
      });

      const roles = gsap.utils.toArray('.experience-role', section);

      roles.forEach((role, index) => {
        const card = role.querySelector('.experience-card');
        const dot = role.querySelector('.experience-dot');
        const badge = role.querySelector('.experience-badge');
        const fromX = index % 2 === 0 ? -56 : 56;

        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 56, x: fromX },
            {
              opacity: 1,
              y: 0,
              x: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: role,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.55,
              ease: 'back.out(2.5)',
              scrollTrigger: {
                trigger: role,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        if (badge) {
          gsap.fromTo(
            badge,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: role,
                start: 'top 84%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        const details = role.querySelectorAll('.experience-detail');
        if (details.length && card) {
          gsap.fromTo(
            details,
            { opacity: 0, x: -14 },
            {
              opacity: 1,
              x: 0,
              duration: 0.45,
              stagger: 0.07,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 78%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    },
    { scope: sectionRef, dependencies: [experience.roles.length] }
  );

  return (
    <div id="experience" ref={sectionRef} className="relative z-50 overflow-hidden py-16 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      <SectionPill label={experience.eyebrow} />

      <div ref={timelineRef} className="relative mx-auto max-w-6xl">
        <div className="absolute bottom-0 left-4 top-0 w-[2px] -translate-x-0 md:left-1/2 md:-translate-x-1/2">
          <div className="h-full w-full bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
          <div
            ref={lineRef}
            className="absolute inset-0 w-full bg-gradient-to-b from-red-500 via-red-600 to-red-950 shadow-[0_0_12px_rgba(239,68,68,0.45)]"
          />
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {experience.roles.map((exp, index) => (
            <div key={exp.id} className="experience-role relative">
              <div
                className={`flex flex-col items-center gap-8 md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="experience-dot absolute left-4 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-red-600 bg-[#050505] shadow-[0_0_15px_rgba(220,38,38,0.5)] md:left-1/2 md:-translate-x-1/2">
                  <BsPersonWorkspace className="h-5 w-5 text-red-600" />
                </div>

                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:flex md:justify-end' : 'md:flex md:justify-start'}`}
                >
                  <div className="experience-badge mt-14 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-400 backdrop-blur-sm md:mt-0">
                    <Calendar className="h-4 w-4 text-red-600" />
                    {exp.duration}
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="experience-card group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:border-red-600/50 hover:shadow-red-600/10">
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/20 via-transparent to-red-900/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <h3 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-2xl font-bold text-transparent">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 font-semibold text-red-500">
                          <Building2 className="h-4 w-4" />
                          {exp.company}
                        </div>
                      </div>
                      <ul className="mt-2 space-y-3">
                        {exp.details.map((detail) => (
                          <li key={detail} className="experience-detail group/item flex items-start gap-3">
                            <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-red-600 transition-transform group-hover/item:translate-x-1" />
                            <p className="text-sm leading-relaxed text-slate-400 transition-colors group-hover/item:text-slate-200 lg:text-base">
                              {detail}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
