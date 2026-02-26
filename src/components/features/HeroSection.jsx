import { ArrowDown } from 'lucide-react'
import { SocialLinks } from '@components/common'
import { CONTACT_EMAIL } from '@data'

export function HeroSection() {
    return (
        <section
            id="hero"
            className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
        >
            <p className="text-accent mb-3 text-sm font-semibold tracking-widest uppercase">
                Hi, I&apos;m
            </p>
            <h1 className="text-snow text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Adrian Stancu
            </h1>
            <h2 className="text-metadata mt-4 text-xl font-medium sm:text-2xl">
                Software Engineer <span className="text-border">·</span> Tech Enthusiast
            </h2>
            <p className="text-metadata mt-6 max-w-xl text-base leading-relaxed">
                Software engineer with a thing for clean code, React, and full-stack web. I build
                projects I care about and try to make every line of code intentional. Currently
                seeking part-time roles and internships.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    href="#projects"
                    className="bg-accent hover:bg-accent-light rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors"
                >
                    View My Work
                </a>
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="border-border text-snow hover:border-accent hover:text-accent rounded-lg border px-6 py-3 text-sm font-semibold transition-colors"
                >
                    Get In Touch
                </a>
            </div>

            {/* Social links */}
            <SocialLinks className="mt-8" />

            {/* Scroll indicator */}
            <a
                href="#about"
                className="text-metadata hover:text-accent mt-16 animate-bounce transition-colors"
                aria-label="Scroll to About section"
            >
                <ArrowDown className="h-5 w-5" />
            </a>
        </section>
    )
}
