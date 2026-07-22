export default function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className={`eyebrow ${light ? 'text-brick-300' : ''}`}>{eyebrow}</p>}
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-stone-300' : 'text-stone-600'}`}>{children}</p>
      )}
    </div>
  )
}
