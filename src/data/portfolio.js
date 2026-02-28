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
        description: `Desktop application for reading manga from various online sources. It provides a user-friendly interface and a seamless reading experience.
            
            Work in progress, roadmap includes features like plugin system for adding new sources, library management, offline reading, and more.`,
        techs: ['React', 'Electron', 'TailwindCSS'],
        githubUrl: 'https://github.com/Rinpyre/Transeki',
        liveUrl: null
    },
    {
        title: 'Aleea Marii Uniri',
        description:
            'Hybrid mobile app built for the historical park of the Great Union in Romania, providing visitors with information about the figures commemorated there and their significance through the use of QR codes placed on the busts.',
        techs: ['Kotlin', 'WebView', 'JavaScript', 'HTML/CSS'],
        githubUrl: null,
        liveUrl: 'https://play.google.com/store/apps/details?id=com.fireboy00.aleeactitorilor'
    },
    {
        title: 'Synapse',
        description: `Log analysis and visualization tool for easier debugging and monitoring of server applications. It parses log files, extracts key information, and presents it in an intuitive dashboard by leveraging AI/ML capabilities to identify patterns and anomalies.`,
        techs: ['Laravel', 'MSSQL', 'React', 'TailwindCSS', 'AI/ML', 'Python', 'Docker'],
        githubUrl: 'https://github.com/Rinpyre/Synapse',
        liveUrl: null
    },
    {
        title: 'VinyDeskline',
        description: `Web application for managing a smart desk system that provides features like height adjustment, usage tracking, and health reminders. It allows users to control their desk settings, monitor their standing/sitting habits, and receive suggestions to promote better ergonomics throughout the workday.`,
        techs: ['Laravel', 'SQLite', 'HTML/CSS'],
        githubUrl: 'https://github.com/Rinpyre/VinyDeskline',
        liveUrl: null
    },
    {
        title: 'Personal Portfolio Website',
        description: `The very website you're on! This portfolio showcases my projects, experience, and skills in a clean and responsive design. It features smooth scrolling, interactive elements, and a modern aesthetic to provide visitors with an engaging overview of my work and background.`,
        techs: ['React', 'TailwindCSS', 'Vite'],
        githubUrl: 'https://github.com/Rinpyre/Portfolio',
        liveUrl: 'https://adrians.ro'
    },
    {
        title: 'Homelab',
        description: `I maintain a personal homelab setup for learning and personal use, which includes various services like Jellyfin and Immich media servers, self-hosted tools such as AdGuard Home DNS. Utilizes a reverse WireGuard tunnel to a VPS for secure remote access, and is managed using Nginx Proxy Manager for easy service routing and SSL management.`,
        techs: ['Linux', 'Docker', 'WireGuard', 'Nginx Proxy Manager'],
        githubUrl: null,
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
    },
    {
        role: 'Cleaning Assistant',
        company: 'Schmidts Rengøring',
        companyUrl: 'https://www.schmidtsrengoering.dk/',
        period: 'Sep 2024 – Feb 2025',
        location: 'Sønderborg, Denmark (Part-time)',
        isPlaceholder: false,
        bullets: [
            'Maintained high standards of cleanliness and organization across various client locations, demonstrating reliability and attention to detail.',
            'Worked independently with minimal supervision, effectively managing time and prioritizing tasks to meet client expectations.',
            'Responsibly handled keys and access codes for multiple locations, ensuring security and trustworthiness in all interactions.'
        ]
    }
]

export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
]
