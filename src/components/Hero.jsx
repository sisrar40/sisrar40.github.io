import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiNpm } from 'react-icons/si';
import { MdDownload } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { hero, heroCode, personalInfo } from '../data/portfolio';
import Typewriter from './Typewriter';

const SOCIAL_ICONS = {
  github: BsGithub,
  linkedin: BsLinkedin,
  npm: SiNpm,
};

function CodeLine({ line }) {
  return (
    <div className={`flex gap-4 ${line.num === '08' ? 'mt-4' : ''}`}>
      <span className="italic text-slate-600">{line.num}</span>
      <p className={line.num === '02' || line.num === '03' || line.num === '04' || line.num === '05' || line.num === '06' ? 'ml-4' : ''}>
        {line.parts.map((part, i) => (
          <span key={`${line.num}-${i}`} className={part.className}>
            {part.text}
          </span>
        ))}
      </p>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const codeCardRef = useRef(null);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo('.hero-tag', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
        .fromTo(
          '.hero-heading',
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power4.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out' },
          '-=0.6'
        )
        .fromTo(
          codeCardRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1.2, ease: 'power4.out' },
          '-=1'
        );

      gsap.to('.social-icon', {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-12 lg:py-24"
    >
      <div className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-red-900/10 blur-[150px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 flex flex-col items-start gap-8 lg:order-1">
          <div className="flex flex-col gap-4">
            <span className="hero-tag w-fit rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-bold tracking-[0.3em] text-red-500">
              {hero.badge}
            </span>
            <h1 className="hero-heading text-5xl font-black leading-[1.1] text-white md:text-6xl lg:text-7xl">
              {hero.heading.line1}{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                {hero.heading.highlight1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-800 to-red-950 bg-clip-text text-transparent">
                {hero.heading.highlight2}
              </span>
            </h1>
            <p className="hero-heading max-w-xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
              I&apos;m <span className="font-bold text-white">{personalInfo.name}</span>,{' '}
              {hero.intro.roleLabel}{' '}
              <span className="font-bold text-red-500">{personalInfo.designation} </span>
              <Typewriter words={personalInfo.designationAlternateWords} />
              <br />
              {hero.intro.suffix}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              {hero.social.map((item) => {
                const Icon = SOCIAL_ICONS[item.platform];
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon rounded-xl border border-white/10 bg-white/5 p-3 text-white shadow-xl transition-all duration-300 hover:border-red-500/50 hover:text-red-500"
                    aria-label={item.platform}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>

            <div className="hero-cta flex flex-wrap gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-900 px-8 py-4 font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative flex items-center gap-2">
                  {hero.cta.collaborate} <RiContactsFill />
                </span>
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold uppercase tracking-wider text-white transition-all hover:border-red-500/50 hover:bg-white/10"
              >
                {hero.cta.resume}{' '}
                <MdDownload className="transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <Tilt perspective={1000} glareEnable glareMaxOpacity={0.1} scale={1.02} className="w-full max-w-[550px]">
            <div
              ref={codeCardRef}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505]/80 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-6 py-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-red-400/50" />
                  <div className="h-3 w-3 rounded-full bg-red-300/20" />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  {heroCode.filename}
                </div>
              </div>
              <div className="p-6 font-mono text-xs leading-relaxed md:p-10 md:text-sm lg:text-base">
                {heroCode.lines.map((line) => (
                  <CodeLine key={line.num} line={line} />
                ))}
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
