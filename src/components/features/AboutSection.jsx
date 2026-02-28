import { ExternalLink } from 'lucide-react'
import { SKILLS } from '@data'

export function AboutSection() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-snow mb-12 text-3xl font-bold">
                About <span className="text-accent">Me</span>
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
                {/* Bio */}
                <div className="space-y-4">
                    <p className="text-metadata leading-relaxed">
                        I&apos;m a software engineer based in{' '}
                        <span className="text-snow font-medium">Sønderborg, Denmark</span> with a
                        passion for building products that make a difference. I specialize in
                        full-stack web development, with a focus on creating fast, scalable, and
                        user-friendly applications.
                    </p>
                    <p className="text-metadata leading-relaxed">
                        When I&apos;m not writing code, you&apos;ll find me obsessing over new
                        technologies that caught my eye, working on my hobby project{' '}
                        <span className="text-snow font-medium">Transeki</span>, or watching anime.
                        I&apos;m also, for better or worse, very picky about my code style to be
                        consistent and clean, and mostly readable.
                    </p>
                    <p className="text-metadata leading-relaxed">
                        I&apos;m currently{' '}
                        <span className="text-accent font-medium">
                            open to part-time opportunities and internships
                        </span>{' '}
                        — feel free to reach out!
                    </p>
                    <div className="pt-2">
                        <a
                            href="/Adrian_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-accent text-accent hover:bg-accent inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:text-white"
                        >
                            Download CV
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <h3 className="text-snow mb-4 text-lg font-semibold">
                        Technologies I work with
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {SKILLS.map((skill) => (
                            <span
                                key={skill}
                                className="border-border bg-secondary text-metadata rounded-full border px-3 py-1 text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
