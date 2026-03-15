import { ChevronRight } from 'lucide-react'

export function ExperienceCard({
    role,
    company,
    companyUrl,
    period,
    location,
    bullets,
    isPlaceholder
}) {
    return (
        <li className="relative">
            {/* Timeline dot */}
            <span
                className={`ring-primary absolute top-2 -left-[1.55rem] h-3 w-3 rounded-full ring-4 ${
                    isPlaceholder ? 'bg-border' : 'bg-accent'
                }`}
            />
            <div
                className={`rounded-xl border p-6 ${
                    isPlaceholder
                        ? 'border-border/50 bg-secondary/50'
                        : 'border-border bg-secondary'
                }`}
            >
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <h3
                        className={`text-lg font-semibold ${
                            isPlaceholder ? 'text-metadata' : 'text-snow'
                        }`}
                    >
                        {role}
                    </h3>
                    <span className="text-metadata text-sm">{period}</span>
                </div>
                <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
                    {companyUrl ? (
                        <a
                            href={companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent-light font-medium transition-colors"
                        >
                            {company}
                        </a>
                    ) : (
                        <span className="text-metadata font-medium">{company}</span>
                    )}
                    <span className="text-border">·</span>
                    <span className="text-metadata">{location}</span>
                </div>
                <ul className="space-y-1.5">
                    {bullets.map((bullet, i) => (
                        <li key={i} className="text-metadata flex gap-2 text-sm leading-relaxed">
                            <ChevronRight
                                className={`mt-0.5 h-4 w-4 shrink-0 ${isPlaceholder ? 'text-border' : 'text-accent'}`}
                            />
                            <span className="whitespace-pre-line">{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    )
}
