import a from './../images/1.jpg';
import b from './../images/2.jpg';
import c from './../images/3.jpg';
import d from './../images/4.jpg';
import e from './../images/5.jpg';
import f from './../images/6.jpg';
import g from './../images/7.jpg';
import h from './../images/8.jpg';

export const products = [
  { 
    id: '1',
    title: '500 kVA Industrial Powerhouse',
    src: a, 
    alt: 'Industrial Generator Installation', 
    hint: 'industrial generator',
    description: 'A robust 500 kVA generator providing steadfast power for a large-scale manufacturing facility, eliminating downtime and securing production schedules.',
    details: 'For this critical industrial partner, we executed a full turnkey solution. The project began with a meticulous on-site load assessment to perfectly match the generator capacity to their operational needs. Our civil team engineered and constructed a reinforced concrete foundation with advanced vibration damping. The installation involved complex integration with the plant\'s main electrical panel and an automated transfer switch (ATS) for instantaneous power takeover. We concluded with rigorous load bank testing to simulate real-world conditions, guaranteeing flawless performance and giving the client complete peace of mind that production will never halt due to power failures.'
  },
  { 
    id: '2',
    title: '250 kVA Commercial Redundancy',
    src: b, 
    alt: 'Commercial Power Solution', 
    hint: 'commercial building',
    description: 'Synchronized 250 kVA generators delivering N+1 redundant power for a multi-story corporate headquarters, ensuring 100% business continuity.',
    details: 'To protect sensitive IT infrastructure and maintain seamless operations for this corporate client, we installed a synchronized pair of 250 kVA Cooper Corp generators. The system is governed by a smart controller that manages load sharing and automatic failover. Our team handled the complex rooftop installation, including custom sound attenuation enclosures and a gravity-fed fuel delivery system, ensuring minimal disruption to the hundreds of employees working below and guaranteeing that their business operations remain online 24/7.'
  },
  { 
    id: '3',
    title: '15 kVA Silent Residential Backup',
    src: c, 
    alt: 'Residential Backup System', 
    hint: 'residential generator',
    description: 'A whisper-quiet 15 kVA generator ensuring uninterrupted comfort and security for a luxury residence, seamlessly integrated with the home environment.',
    details: 'The primary challenge for this residential installation was achieving near-silent operation without compromising on power. We selected a compact Cooper Corp generator, renowned for its low noise profile, and installed it within a custom-designed, weatherproof acoustic enclosure. The system includes an automatic transfer switch (ATS) that restores power to the entire home within seconds of an outage, keeping the lights on, the security system active, and daily life completely undisturbed for the homeowners.'
  },
  { 
    id: '4',
    title: '1 MVA Remote Power Plant',
    src: d, 
    alt: 'Large Scale Power Plant', 
    hint: 'power plant',
    description: 'A scalable, containerized 1 MVA power plant providing prime power for a remote mining operation, engineered for durability and performance in harsh conditions.',
    details: 'This project required a rapidly deployable and robust power source for a construction site far from the national grid. We engineered a containerized solution housing multiple generators running in parallel. The system was designed for fuel efficiency and long service intervals, managed by a remote monitoring system that allowed our technicians to track performance and diagnose issues from our central office, ensuring maximum uptime for the heavy machinery and staff working in a challenging, isolated environment.'
  },
  { 
    id: '5',
    title: '750 kVA Critical Hospital Power',
    src: e, 
    alt: 'Generator Maintenance', 
    hint: 'generator maintenance',
    description: 'A fast-start 750 kVA generator providing life-saving emergency power to a regional hospital, fully compliant with healthcare industry standards.',
    details: 'In a hospital environment, every second counts. We installed a state-of-the-art 750 kVA generator equipped with a rapid-start system and a high-capacity fuel tank for extended runtime. The installation complied with all NABH regulations, including specialized exhaust routing and fire safety systems. This generator provides reliable, life-saving emergency power to operating theaters, ICUs, and other critical life-support systems within seconds of a utility failure, directly supporting the medical staff and ensuring patient safety.'
  },
  { 
    id: '6',
    title: 'Tier 3 Data Center N+1 System',
    src: f, 
    alt: 'Site Assessment', 
    hint: 'construction site',
    description: 'A mission-critical N+1 redundant power system for a Tier 3 data center, guaranteeing 99.982% uptime for invaluable digital assets.',
    details: 'Precision, reliability, and redundancy were non-negotiable for this data center client. We deployed a fully redundant power system featuring multiple synchronized generators, uninterruptible power supply (UPS) units, and dual power distribution units (PDUs). The entire system is managed by a sophisticated Building Management System (BMS) that we integrated, guaranteeing absolutely no interruption of power to the server racks, protecting invaluable data and online services from catastrophic failure.'
  },
  { 
    id: '7',
    title: '82.5 kVA Mobile Power Van',
    src: g, 
    alt: 'Mobile Generator Van', 
    hint: 'mobile generator',
    description: 'A custom-fabricated mobile generator van delivering 82.5 kVA of on-demand, soundproofed power for outdoor events and remote film production.',
    details: 'This versatile solution provides on-demand power anywhere it\'s needed. The vehicle is equipped with a super-silenced 82.5 kVA Cooper Corp generator, integrated distribution panels with multiple outlet types, and extensive onboard cabling. We custom-built the van to be highly maneuverable and quick to set up, making it the perfect rental solution for event management companies, film crews, and emergency responders requiring reliable remote power at a moment\'s notice.'
  },
  { 
    id: '8',
    title: 'Telecom Tower Backup Solution',
    src: h, 
    alt: 'Emergency Power Setup', 
    hint: 'emergency power',
    description: 'Compact, fuel-efficient generators ensuring 24/7 connectivity for remote telecom towers, designed for long run times and minimal maintenance.',
    details: 'We have deployed hundreds of small-footprint, fuel-efficient 10 kVA generators for major telecom clients across Rajasthan. These units are designed for extreme weather conditions and feature large fuel tanks for long, unmanned run times. Coupled with our annual maintenance contracts, we guarantee constant connectivity for a critical infrastructure network that keeps communities and businesses connected, even in the most remote locations.'
  },
  { 
    id: '9',
    title: 'Agricultural Water Pump Solution',
    src: a, 
    alt: 'Agricultural Generator', 
    hint: 'agricultural generator',
    description: 'A 25 kVA generator powering submersible water pumps for a large agricultural farm, ensuring consistent irrigation and crop health.',
    details: 'To combat unreliable grid power in a rural area, we supplied and installed a 25 kVA generator specifically configured to handle the high inductive load of starting multiple water pumps. The solution included a weather-proof canopy and a simplified control panel for easy operation by farm staff. This installation directly secures the farm\'s irrigation schedule, protecting crop yield and the farmer\'s livelihood from the unpredictability of the local power supply.'
  },
  { 
    id: '10',
    title: 'Hotel & Resort Power System',
    src: b, 
    alt: 'Hotel Power Generator', 
    hint: 'hotel generator',
    description: 'A 350 kVA generator providing complete power backup for a luxury resort, ensuring a seamless guest experience during outages.',
    details: 'For this hospitality client, maintaining guest comfort was paramount. We installed a 350 kVA silent generator to power all resort facilities, from guest rooms and restaurants to swimming pools and event halls. The automatic transfer switch is configured for a "no-break" transfer, ensuring that even sensitive electronic equipment like POS systems and servers remain online during the switchover, preserving the resort\'s 5-star reputation.'
  },
  { 
    id: '11',
    title: 'Cold Storage Facility Power',
    src: c, 
    alt: 'Cold Storage Generator', 
    hint: 'cold storage',
    description: 'A 125 kVA generator safeguarding perishable goods in a cold storage warehouse, with remote monitoring for ultimate reliability.',
    details: 'Protecting temperature-sensitive inventory was the key objective. We installed a 125 kVA generator with a reliable auto-start function connected to the temperature control system. We also implemented a remote monitoring unit that sends alerts via SMS to the facility manager in case of a utility failure or generator fault, providing an extra layer of security and preventing catastrophic losses for their valuable stock of pharmaceuticals and food products.'
  },
  { 
    id: '12',
    title: 'Retail Showroom Lighting & AC Backup',
    src: d, 
    alt: 'Retail Generator', 
    hint: 'retail store',
    description: 'A 62.5 kVA generator ensuring a premium shopping experience at a high-end retail showroom, powering lighting, air conditioning, and POS systems.',
    details: 'This project for a luxury brand showroom required a power solution that was both reliable and discreet. We installed a 62.5 kVA generator on the building\'s service terrace with a custom exhaust system to minimize noise and visual impact. The generator ensures that the showroom\'s specific lighting design and climate control are maintained during power cuts, preserving the high-end customer experience and protecting sales.'
  },
  { 
    id: '13',
    title: 'Educational Institute Campus Power',
    src: e, 
    alt: 'School Generator', 
    hint: 'school building',
    description: 'A 100 kVA generator providing comprehensive power backup for a school campus, ensuring classes and administrative functions continue without interruption.',
    details: 'We provided a complete power backup solution for an educational campus, covering classrooms, laboratories, the library, and administrative offices. The 100 kVA generator was installed in a dedicated, secure enclosure away from student areas. Safety and reliability were our top priorities, ensuring a conducive learning environment is maintained at all times, preventing disruptions to classes, exams, and valuable research.'
  },
  { 
    id: '14',
    title: 'Petrol Pump Forecourt & Systems',
    src: f, 
    alt: 'Petrol Pump Generator', 
    hint: 'petrol pump',
    description: 'A 40 kVA generator powering fuel dispensers, canopy lights, and billing systems for a busy 24/7 petrol pump.',
    details: 'Continuous operation is vital for a petrol pump. We installed a durable 40 kVA generator compliant with all petroleum industry safety standards. The system powers all critical equipment, including the fuel dispensers and digital payment systems, ensuring the station remains fully operational and profitable around the clock, even during extended power outages, serving both public and commercial transport.'
  },
  { 
    id: '15',
    title: 'Construction Lift & Crane Power',
    src: g, 
    alt: 'Construction Site Generator', 
    hint: 'construction crane',
    description: 'A heavy-duty 150 kVA generator designed to handle the high-torque demands of construction lifts and cranes at a high-rise building site.',
    details: 'Powering heavy machinery requires generators built to handle intense load fluctuations. We supplied a specialized 150 kVA generator with a robust engine and alternator to power a construction lift and tower crane. The unit was delivered to the site and commissioned by our expert team, ensuring safe and reliable vertical transportation of materials and personnel, which is critical to keeping the project on schedule and on budget.'
  },
  { 
    id: '16',
    title: 'Movie Theater Projection & Sound',
    src: h, 
    alt: 'Movie Theater Power', 
    hint: 'movie theater',
    description: 'A 200 kVA generator with clean, stable output to protect sensitive digital projection and sound equipment in a multiplex cinema.',
    details: 'Modern digital cinema equipment is highly sensitive to power fluctuations. We installed a 200 kVA generator with an Automatic Voltage Regulator (AVR) to provide clean and stable power, protecting the theater\'s expensive equipment from surges. The seamless backup ensures that the movie experience is never interrupted for paying customers, safeguarding the theater\'s revenue and reputation for quality.'
  },
];
