import { Navbar, Footer } from '@components/layout'
import {
    HeroSection,
    AboutSection,
    ProjectsSection,
    ExperienceSection,
    ContactSection
} from '@components/features'

export const HomePage = () => (
    <div className="w-full">
        <Navbar />
        <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
        </main>
        <Footer />
    </div>
)
