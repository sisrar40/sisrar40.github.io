/** Centered section label with red gradient lines (matches reference layout). */
export default function SectionPill({ label }) {
  return (
    <div className="mb-20 flex w-full justify-center px-4 lg:mb-32">
      <div className="flex max-w-full items-center justify-center">
        <span className="hidden h-[2px] shrink-0 bg-gradient-to-r from-transparent to-red-600 sm:block sm:w-16 md:w-24" />
        <span className="mx-3 whitespace-nowrap rounded-full border border-red-600/30 bg-[#050505] px-5 py-3 text-center text-lg font-bold text-white shadow-[0_0_20px_rgba(220,38,38,0.2)] sm:px-8 sm:text-2xl">
          {label}
        </span>
        <span className="hidden h-[2px] shrink-0 bg-gradient-to-l from-transparent to-red-600 sm:block sm:w-16 md:w-24" />
      </div>
    </div>
  );
}
