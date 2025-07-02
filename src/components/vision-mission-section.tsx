import { Eye, Target } from 'lucide-react';

export default function VisionMissionSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col space-y-4 text-left">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-headline">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be a leading provider of reliable and innovative power solutions across India, empowering industries, businesses, and homes with uninterrupted energy through trusted technology and exceptional service.
            </p>
          </div>
          <div className="flex flex-col space-y-4 text-left">
              <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-headline">Our Mission</h3>
            </div>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed text-left max-w-md">
              <li>To deliver high-quality diesel generator solutions with complete installation and technical support.</li>
              <li>To build lasting relationships with our customers through professionalism, transparency, and timely service.</li>
              <li>To continuously upgrade our offerings by partnering with reputed manufacturers like Cooper Corporation, ensuring access to the latest and most efficient power technologies.</li>
              <li>To provide sustainable and tailored energy solutions that meet the evolving needs of our clients in residential, commercial, and industrial sectors.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
