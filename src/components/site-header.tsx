"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { Menu, Zap } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container flex h-16 items-center justify-between">
    {/* Left: Logo */}
    <div className="flex items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Zap className="h-6 w-6 text-primary" />
        <span className="font-bold font-headline">AM Trading & Co</span>
      </Link>
    </div>

    {/* Right: Navigation Links (Desktop) */}
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
          {link.label}
        </Link>
      ))}
    </nav>

    {/* Right: Hamburger (Mobile) */}
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>

  );
}
