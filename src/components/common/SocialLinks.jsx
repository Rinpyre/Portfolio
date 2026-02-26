import { Github, Linkedin, Mail } from 'lucide-react'
import { SOCIAL_LINKS } from '@data'

const ICON_MAP = {
    GitHub: <Github className="h-5 w-5" />,
    LinkedIn: <Linkedin className="h-5 w-5" />,
    Email: <Mail className="h-5 w-5" />
}

export function SocialLinks({ className = '' }) {
    return (
        <div className={`flex items-center gap-5 ${className}`}>
            {SOCIAL_LINKS.map(({ label, url }) => (
                <a
                    key={label}
                    href={url}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-metadata hover:text-accent transition-colors"
                >
                    {ICON_MAP[label]}
                </a>
            ))}
        </div>
    )
}
