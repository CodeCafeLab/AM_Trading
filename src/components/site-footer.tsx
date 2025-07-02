import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const policyLinks = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/refund', label: 'Refund Policy' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.png" width={150} height={50} alt="AM Trading & Co Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Your Trusted Partner in Power Solutions for over a decade.
            </p>
          </div>

          {/* Column 2: Important Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold font-headline text-lg mb-4">Important Links</h3>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold font-headline text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">123 Power Lane, Jaipur, Rajasthan, 302001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">+91 987 654 3210</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:contact@amtrading.com" className="text-muted-foreground hover:text-primary transition-colors">contact@amtrading.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AM Trading & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
