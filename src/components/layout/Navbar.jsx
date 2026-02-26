import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, CONTACT_EMAIL } from '@data'

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <nav
            className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
                scrolled
                    ? 'border-border bg-secondary/90 backdrop-blur-md'
                    : 'border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a
                    href="#hero"
                    className="text-snow hover:text-accent text-lg font-bold tracking-tight transition-colors"
                >
                    Adrian<span className="text-accent">.</span>
                </a>

                {/* Desktop nav */}
                <ul className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="text-metadata hover:text-snow text-sm font-medium transition-colors"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hire me */}
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="border-accent text-accent hover:bg-accent hidden rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:text-white md:block"
                >
                    Hire Me
                </a>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="text-metadata hover:text-snow transition-colors md:hidden"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="border-border bg-secondary border-t px-6 pb-4 md:hidden">
                    <ul className="flex flex-col gap-4 pt-4">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-metadata hover:text-snow block text-sm font-medium transition-colors"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="text-accent text-sm font-medium"
                            >
                                Hire Me
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
