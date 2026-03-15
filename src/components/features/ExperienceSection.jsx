import { ExperienceCard } from '@components'
import { EXPERIENCE } from '@data'

export function ExperienceSection() {
    return (
        <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-snow mb-12 text-3xl font-bold">
                Work <span className="text-accent">Experience</span>
            </h2>

            <ol className="border-border/50 relative space-y-10 border-l pl-8">
                {EXPERIENCE.map((experience) => (
                    <ExperienceCard
                        key={`${experience.role}-${experience.company}`}
                        {...experience}
                    />
                ))}
            </ol>
        </section>
    )
}
