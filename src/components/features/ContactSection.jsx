import { Mail } from 'lucide-react'
import { SocialLinks } from '@components/common'
import { CONTACT_EMAIL } from '@data'

export function ContactSection() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-6 py-24 text-center">
            <p className="text-accent mb-2 text-sm font-semibold tracking-widest uppercase">
                What&apos;s Next?
            </p>
            <h2 className="text-snow mb-4 text-4xl font-extrabold">Get In Touch</h2>
            <p className="text-metadata mx-auto mb-10 max-w-lg text-base leading-relaxed">
                Whether you have a project in mind, a question, or just want to say hello — my inbox
                is always open. I&apos;ll do my best to get back to you!
            </p>
            <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="bg-accent hover:bg-accent-light inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold text-white transition-colors"
            >
                <Mail className="h-5 w-5" />
                Say Hello
            </a>
            <SocialLinks className="mt-12 justify-center" />
        </section>
    )
}
