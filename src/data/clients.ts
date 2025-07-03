// clients.ts
import a from './../images/OCL1.png';
import b from './../images/OCL2.png';
import c from './../images/OCL3.png';
import d from './../images/OCL4.png';
import e from './../images/OCL5.png';
import f from './../images/OCL6.png';
import g from './../images/OCL1.png';
import h from './../images/OCL1.png';

import type { StaticImageData } from 'next/image';

export type Client = {
  name: string;
  logo: StaticImageData;
  hint: string;
};

export const clients: Client[] = [
  { name: 'Bharat Petroleum', logo: a, hint: 'bharat petroleum logo' },
  { name: 'EPFO', logo: b, hint: 'epfo logo' },
  { name: 'Hindustan Petroleum', logo: c, hint: 'hindustan petroleum logo' },
  { name: 'Indian Railways', logo: d, hint: 'indian railways logo' },
  { name: 'SAIL', logo: e, hint: 'sail logo' },
  { name: 'BSNL', logo: f, hint: 'bsnl logo' },
  { name: 'Airtel', logo: h, hint: 'airtel logo' },
  { name: 'Airtel', logo: g, hint: 'airtel logo' },
];
