import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">AM Trading & Co</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">&copy; {new Date().getFullYear()} AM Trading & Co. All rights reserved.</p>
            <p className="text-xs mt-1">Your Trusted Partner in Power Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
