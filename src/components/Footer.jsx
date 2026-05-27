import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';
import { footer, navigation, personalInfo } from '../data/portfolio';
import { CONTAINER_X, SECTION_X } from '../constants/layout';

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  npm: SiNpm,
};

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { id: 'github', href: personalInfo.social.github, platform: 'github' },
    { id: 'linkedin', href: personalInfo.social.linkedin, platform: 'linkedin' },
    { id: 'npm', href: personalInfo.social.npm, platform: 'npm' },
  ];

  return (
    <footer className={`border-t border-white/5 bg-[#050505] text-gray-200 ${SECTION_X}`}>
      <div className={`${CONTAINER_X} py-16`}>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-24">
          <div className="flex flex-col gap-6">
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-fit">
              <img src="/logo.svg" alt={personalInfo.name} width={100} height={100} className="brightness-125" />
            </button>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">{footer.tagline}</p>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white opacity-50">
              {footer.navigationTitle}
            </h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="cursor-pointer font-medium text-gray-400 transition-all hover:text-red-500"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white opacity-50">
                {footer.connectTitle}
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-medium text-gray-400 transition-all hover:text-red-500"
                >
                  {personalInfo.email}
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/-/g, '')}`}
                  className="font-medium text-gray-400 transition-all hover:text-red-500"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = SOCIAL_ICONS[item.platform];
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/5 bg-white/5 p-2 transition-all hover:bg-red-500/10 hover:text-red-500"
                    aria-label={item.platform}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-gray-500 md:flex-row">
          <p>{footer.copyright}</p>
          <p className="flex items-center gap-2">
            {footer.madeWithPrefix} <span className="animate-pulse text-red-600">❤️</span>{' '}
            {footer.madeWithSuffix}
          </p>
        </div>
      </div>
    </footer>
  );
}
