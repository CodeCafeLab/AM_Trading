import AboutSection from '@/components/about-section';
import VisionMissionSection from '@/components/vision-mission-section';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <VisionMissionSection />
    </div>
  );
}
