import { Github, ExternalLink } from 'lucide-react'

export function ProjectCard({ title, description, techs, githubUrl, liveUrl }) {
    return (
        <article className="border-border bg-secondary hover:border-accent/50 flex flex-col rounded-xl border p-6 transition-colors">
            <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-snow text-lg font-semibold">{title}</h3>
                <div className="flex shrink-0 items-center gap-3">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} GitHub repository`}
                            className="text-metadata hover:text-snow transition-colors"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} live demo`}
                            className="text-metadata hover:text-accent transition-colors"
                        >
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </div>

            <p className="text-metadata mb-5 grow text-sm leading-relaxed whitespace-pre-line">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                    <span
                        key={tech}
                        className="border-accent/20 bg-accent/5 text-accent rounded border px-2 py-0.5 text-xs font-medium"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </article>
    )
}
