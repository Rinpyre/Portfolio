import { EducationCard } from '@components'
import { EDUCATION } from '@data'

export function EducationSection() {
    return (
        <section id="education" className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-snow mb-12 text-3xl font-bold">
                <span className="text-accent">Education</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-1">
                {EDUCATION.map((education) => (
                    <EducationCard key={`${education.degree}-${education.school}`} {...education} />
                ))}
            </div>
        </section>
    )
}
