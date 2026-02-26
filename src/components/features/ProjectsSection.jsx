import { Github } from 'lucide-react'
import { ProjectCard } from '@components/common'
import { PROJECTS } from '@data'

export function ProjectsSection() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-snow mb-2 text-3xl font-bold">
                Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-metadata mb-12 text-sm">A selection of things I&apos;ve built.</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
            <div className="mt-10 text-center">
                <a
                    href="https://github.com/Rinpyre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border text-metadata hover:border-accent hover:text-snow inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
                >
                    <Github className="h-5 w-5" />
                    See more on GitHub
                </a>
            </div>
        </section>
    )
}
