import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import VisionMissionSection from '@/components/vision-mission-section';
import ServicesSection from '@/components/services-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
