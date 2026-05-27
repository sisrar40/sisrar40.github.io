import { getSkillColor, getSkillIcon } from '../utils/skillIcons';

export default function TechTag({ name, size = 'sm' }) {
  const Icon = getSkillIcon(name);
  const color = getSkillColor(name);

  const sizeClasses =
    size === 'lg'
      ? 'px-4 py-2 text-sm gap-2'
      : 'px-3 py-1 text-[11px] gap-1.5';

  const iconSize = size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5';

  return (
    <span
      className={`inline-flex items-center rounded-lg border border-white/10 bg-white/5 font-bold text-slate-300 ${sizeClasses}`}
    >
      <Icon className={`${iconSize} shrink-0`} style={{ color }} />
      {name}
    </span>
  );
}
