import { ChevronRight, Calendar, MapPin } from 'lucide-react'
import { EDUCATION } from '@data'

export function EducationSection() {
    return (
        <section id="education" className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-snow mb-12 text-3xl font-bold">
                <span className="text-accent">Education</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-1">
                {EDUCATION.map(
                    ({ degree, school, schoolUrl, period, location, details, isPlaceholder }) => (
                        <div
                            key={`${degree}-${school}`}
                            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-8 transition-all hover:-translate-y-1 hover:shadow-lg ${
                                isPlaceholder
                                    ? 'border-border/50 bg-secondary/30 hover:border-border/80'
                                    : 'border-border bg-secondary hover:border-accent/50'
                            }`}
                        >
                            <div className="relative z-10">
                                <div className="mb-6 flex items-start gap-4">
                                    <div>
                                        <h3
                                            className={`text-xl leading-tight font-bold ${
                                                isPlaceholder ? 'text-metadata' : 'text-snow'
                                            }`}
                                        >
                                            {degree}
                                        </h3>
                                        <div className="mt-1">
                                            {schoolUrl ? (
                                                <a
                                                    href={schoolUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-accent hover:text-accent-light text-sm font-medium transition-colors"
                                                >
                                                    {school}
                                                </a>
                                            ) : (
                                                <span className="text-metadata text-sm font-medium">
                                                    {school}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                                    <div className="text-metadata flex items-center gap-1.5">
                                        <Calendar className="h-4 w-4" />
                                        <span className="text-sm">{period}</span>
                                    </div>
                                    <div className="text-metadata flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm">{location}</span>
                                    </div>
                                </div>

                                <ul className="space-y-2.5">
                                    {details.map((detail, i) => (
                                        <li
                                            key={i}
                                            className="text-metadata flex items-start gap-2 text-sm leading-relaxed"
                                        >
                                            <ChevronRight
                                                className={`mt-0.5 h-4 w-4 shrink-0 ${
                                                    isPlaceholder ? 'text-border' : 'text-accent'
                                                }`}
                                            />
                                            <span className="whitespace-pre-line">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}
