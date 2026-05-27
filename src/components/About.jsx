import Tilt from 'react-parallax-tilt';
import { Sparkles, User } from 'lucide-react';
import { about, stats } from '../data/portfolio';

export default function About() {
  return (
    <div id="about" className="relative overflow-hidden py-24 lg:py-48">
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-red-900/10 blur-[120px]" />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-24">
          <div className="order-2 flex flex-col gap-8 lg:order-1 lg:col-span-7">
            <div className="flex flex-col gap-4">
              <div className="mb-2 flex items-center gap-3 text-red-500">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                  <User className="h-5 w-5 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.3em]">{about.eyebrow}</span>
              </div>
              <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                {about.titlePrefix}{' '}
                <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                  {about.titleHighlight}
                </span>
              </h2>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-3xl lg:p-10">
              <div className="absolute right-0 top-0 p-8 opacity-10 transition-transform duration-700 group-hover:rotate-12">
                <Sparkles className="h-24 w-24 text-red-500" />
              </div>
              <div className="absolute left-0 top-10 h-20 w-1 rounded-full bg-gradient-to-b from-red-600 to-transparent" />
              <p className="space-y-4 text-justify text-lg font-medium italic leading-relaxed text-slate-300 lg:text-xl">
                {about.description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-8">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="hidden h-10 w-px bg-white/10 sm:block" />}
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-white">{stat.value}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <Tilt perspective={1500} glareEnable glareMaxOpacity={0.2} glareColor="#ef4444" scale={1.05}>
              <div className="group relative">
                <div className="absolute -inset-4 rounded-3xl border border-red-500/20 opacity-50 transition-all duration-500 group-hover:-inset-6" />
                <div className="absolute -inset-8 rounded-[40px] border border-red-950/10 opacity-30 transition-all delay-75 duration-700 group-hover:-inset-12" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-white/10 bg-[#050505] shadow-[0_0_50px_rgba(239,68,68,0.15)]">
                  <img
                    src={about.image}
                    alt={about.imageAlt}
                    className="h-full w-full object-cover object-top grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 rounded-xl border border-white/10 bg-white/5 p-4 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-center text-xs font-bold uppercase tracking-widest text-white">
                      {about.badge}
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}
