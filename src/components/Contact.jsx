import { BiLogoLinkedin } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';
import { IoMdCall } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';
import { MapPin, MessageSquare, Send } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { contact } from '../data/portfolio';

const FIELD_ICONS = {
  email: MdAlternateEmail,
  phone: IoMdCall,
  location: MapPin,
};

const SOCIAL_ICONS = {
  GitHub: FaGithub,
  LinkedIn: BiLogoLinkedin,
  NPM: SiNpm,
};

function ContactInfoCard({ field }) {
  const Icon = FIELD_ICONS[field.icon] || MapPin;
  const content = (
    <>
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${field.color}15` }}
      >
        <Icon className="h-6 w-6" style={{ color: field.color }} />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
          {field.label}
        </span>
        <span className="text-sm font-medium text-slate-200 transition-colors group-hover:text-white md:text-base">
          {field.value}
        </span>
      </div>
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10"
        style={{ backgroundColor: field.color }}
      />
    </>
  );

  const className =
    'group relative flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 shadow-xl transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]';

  if (field.href) {
    return (
      <a href={field.href} className={className}>
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}

export default function Contact() {
  return (
    <div id="contact" className="relative z-50 overflow-hidden py-24 lg:py-48">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[150px]" />

      <div className="w-full">
        <SectionReveal direction="up">
          <div className="mb-16 flex flex-col items-center gap-6 text-center lg:mb-20">
            <div className="flex items-center gap-3 text-red-500">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                <MessageSquare className="h-5 w-5 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.3em]">{contact.eyebrow}</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              {contact.titlePrefix}{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                {contact.titleHighlight}
              </span>
            </h2>
            <p className="max-w-2xl text-lg text-slate-400">{contact.subtitle}</p>
          </div>
        </SectionReveal>

        <div className="mx-auto max-w-2xl">
          <SectionReveal direction="up">
            <div className="flex flex-col gap-8">
              <h3 className="flex items-center justify-center gap-3 text-xl font-bold text-white">
                <Send className="h-5 w-5 text-red-600" />
                {contact.direct.title}
              </h3>
              <div className="flex flex-col gap-4">
                {contact.direct.fields.map((field) => (
                  <ContactInfoCard key={field.label} field={field} />
                ))}
              </div>

              <div className="border-t border-white/5 pt-8 text-center">
                <h3 className="mb-4 text-lg font-bold text-white">{contact.social.title}</h3>
                <div className="flex justify-center gap-4">
                  {contact.social.links.map((link) => {
                    const Icon = SOCIAL_ICONS[link.label] || FaGithub;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-white/5 bg-white/5 p-3 transition-all hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
                        aria-label={link.label}
                      >
                        <Icon size={22} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}
