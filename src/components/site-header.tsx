"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useQuoteSheet } from '@/context/quote-sheet-context';
import logo from './../images/logo_transparent.png'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsOpen: setQuoteSheetOpen } = useQuoteSheet();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <Image
            src={logo}
            alt="AM Trading & Co Logo"
            className="h-14 w-auto"
          />
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Socials, Quote Button & Hamburger (Mobile) */}
        <div className="flex items-center gap-2">
           <div className="hidden md:flex items-center gap-1">
                {socialLinks.map((link) => (
                    <Button key={link.label} asChild variant="ghost" size="icon">
                        <Link href={link.href} target="_blank" rel="noopener noreferrer">
                            <link.icon className="h-5 w-5" />
                            <span className="sr-only">{link.label}</span>
                        </Link>
                    </Button>
                ))}
            </div>

          <Button
            className="hidden md:inline-flex"
            onClick={() => setQuoteSheetOpen(true)}
          >
            Get a Quote
          </Button>

          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigation links for the website.</SheetDescription>
                <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setQuoteSheetOpen(true);
                    }}
                    className="w-full mt-4"
                  >
                    Get a Quote
                  </Button>
                </div>
                <div className="flex justify-center gap-4 mt-6 pt-6 border-t">
                    {socialLinks.map((link) => (
                        <SheetClose asChild key={link.label}>
                            <Button asChild variant="outline" size="icon">
                                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                                    <link.icon className="h-5 w-5" />
                                    <span className="sr-only">{link.label}</span>
                                </Link>
                            </Button>
                        </SheetClose>
                    ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
