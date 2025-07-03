import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import logo from './../images/logo_transparent.png';

const policyLinks = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/refund', label: 'Refund Policy' },
];

const socialLinks = [
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1: Logo and About */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image src={logo} width={120} height={40} alt="AM Trading & Co Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your Trusted Partner in Power Solutions for over a decade.
            </p>
          </div>

          {/* Column 2: Important Links */}
          <div className="flex flex-col items-center md:items-start">
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
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold font-headline text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">Plot No, 2 Sonu Apartment, Ashok Nagar, Niwaru Road Jaipur - 302012</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+918841098469" className="text-muted-foreground hover:text-primary transition-colors">+91 8841098469</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:info@amtco.in" className="text-muted-foreground hover:text-primary transition-colors">info@amtco.in</a>
              </div>
            </div>
          </div>
          
          {/* Column 4: Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold font-headline text-lg mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                    <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <link.icon className="h-6 w-6" />
                        <span className="sr-only">{link.label}</span>
                    </Link>
                ))}
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
