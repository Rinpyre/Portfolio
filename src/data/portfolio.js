export const CONTACT_EMAIL = 'adrians.stancu@gmail.com'

export const SOCIAL_LINKS = [
    { label: 'GitHub', url: 'https://github.com/Rinpyre' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/adrian-stancu' },
    { label: 'Email', url: `mailto:${CONTACT_EMAIL}` }
]

export const SKILLS = [
    'JavaScript',
    // 'TypeScript', // TODO: Uncommented after learning it, very soon
    'React',
    'Node.js',
    'SQL',
    'Git',
    'Docker',
    'REST APIs',
    'TailwindCSS',
    'Laravel',
    'PHP',
    'HTML/CSS',
    'Vite',
    'Linux'
]

export const PROJECTS = [
    {
        title: 'Transeki',
        description:
            'Desktop application for reading manga from various online sources. It provides a user-friendly interface and a seamless reading experience.',
        techs: ['React', 'Electron', 'TailwindCSS'],
        githubUrl: 'https://github.com/Rinpyre/Transeki',
        liveUrl: null
    },
    {
        title: 'Aleea Marii Uniri',
        description:
            'Mobile app built for the historical park of the Great Union in Romania, providing visitors with information about the figures commemorated there and their significance through the use of QR codes placed on the busts.',
        techs: ['Kotlin', 'JavaScript', 'HTML/CSS'],
        githubUrl: null,
        liveUrl: 'https://play.google.com/store/apps/details?id=com.fireboy00.aleeactitorilor'
    },
    {
        title: 'VinyDeskline',
        description:
            'Web app for smart desk management in co-working spaces. Users can track desk usage and get posture tips from sensor data. Admins monitor and manage desk and user activity. (University project, not launched; code available for review.)',
        techs: ['Laravel', 'PHP', 'SQLite', 'HTML/CSS'],
        githubUrl: 'https://github.com/Rinpyre/VinyDeskline',
        liveUrl: null
    }
]

// TODO: Update with actual experience once I have it.
export const EXPERIENCE = [
    {
        role: 'Actively Seeking First Software Engineering Role',
        company: 'Open to Opportunities',
        companyUrl: null,
        period: '2026 – Present',
        location: 'Remote / Hybrid',
        isPlaceholder: true,
        bullets: [
            'Building full-stack projects to develop practical skills across the whole web stack.',
            `Actively learning industry best practices, design patterns, and software architecture principles
            (e.g., commit messages, code reviews, PR etiquette, testing, CI/CD, etc.)`,
            'Open to junior, intern, and entry-level software engineering positions — reach out!'
        ]
    }
]

export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
]
