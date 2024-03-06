import { nakala_heroPhoto } from "./assets"

export const workData = [
  {
    client: 'Nakala',
    page: "nakala",
    title: "Nak'ala",
    descr: "360 Branding for milk brand",
    heroVideo: "https://www.pexels.com/video/from-above-footage-a-woman-wearing-a-wide-brimmed-hat-sitting-on-a-daybed-by-the-pool-area-3015487/",
    heroPhoto: nakala_heroPhoto,
    imageCSS: 'hidden',
    videoCSS: "",
    link: 'nakala',
    category: ["Food & Beverages"],
    services: [
      { name: "Branding", url: 'branddesign' },
      { name: "3D", url: 'branddesign' },
      { name: "Media Production", url: '' },
    ],
    caseStudy: "yes",
    artwork: 'logo_nakala.png',
    artworkSrc: '',
    date: {
      dd: 3,
      mm: 'Avr',
      yy: 2022
    },
    location: 'Senegal',
    mapLink: 'n/a',
    budget: 1300000,
  },

  {
    client: 'Amossa Interior',
    page: "amossa",
    title: 'Amossa',
    descr: "Rebranding and brand strategy of an interior design firm",
    heroVideo: "https://www.pexels.com/video/from-above-footage-a-woman-wearing-a-wide-brimmed-hat-sitting-on-a-daybed-by-the-pool-area-3015487/",
    videoCSS: "",
    heroPhoto: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageCSS: 'hidden',
    link: 'amossa',
    category: ["Interior design"],
    services: [
      { name: "Branding", url: 'branddesign' },
      { name: "Media Production", url: '' },
    ],
    caseStudy: "yes",
    artwork: 'logo_nakala.png',
    artworkSrc: '',
    date: {
      dd: 3,
      mm: 'Avr',
      yy: 2022
    },
    location: 'Senegal',
    mapLink: 'n/a',
    budget: 1300000,
  },

  {
    client: 'TeewTickets',
    page: "teewtickets",
    title: "TeewTickets",
    descr: "Digital ticketing service",
    heroVideo: 'https://www.pexels.com/video/from-above-footage-a-woman-wearing-a-wide-brimmed-hat-sitting-on-a-daybed-by-the-pool-area-3015487/',
    videoCSS: "hidden",
    heroPhoto: 'https://www.pexels.com/photo/gray-dining-table-under-pendant-lamps-3356416/',
    imageCSS: "flex",
    link: 'teewtickets',
    category: ["Branding"],
    services: [
      { name: "Branding", url: 'branddesign' },
      { name: "3D", url: 'branddesign' },
      { name: "Media Production", url: '' },
    ],
    caseStudy: "yes",
    artwork: 'logo_nakala.png',
    artworkSrc: '',
    date: {
      dd: 3,
      mm: 'Avr',
      yy: 2022
    },
    location: 'Senegal',
    mapLink: 'n/a',
    budget: 1200000,
  },

]

export const team = [
  {
    name: { first: "Daouda", last: "Diallo" },
    position: "Founder & Director",
    nickname: "Mr.Exclusive",
    handle: { instagram: "mr.xclv" },
    image: "https://res.cloudinary.com/lawwd/image/upload/v1657459657/.MRX/EX_LAWWD__yjdlmt.jpg",
  },
  {
    name: { first: "Abdoulaye", last: "Diop" },
    position: "Manager",
    nickname: "Mr.Exclusive",
    handle: { instagram: "", },
    image: "https://images.pexels.com/photos/3796620/pexels-photo-3796620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: { first: "Ndeye Fatou", last: "Sow" },
    position: "Strategic Partner",
    nickname: "NFS",
    handle: { instagram: "_____nfs", },
    image: "https://images.pexels.com/photos/3796620/pexels-photo-3796620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }

]

export const headers = [
  {
    name: 'talks',
    descr: 'discussions on design and the business of design with various guests',
    link: 'talks',
    icon: 'record'
  },
  {
    name: 'the.lab',
    descr: 'the lab for content in Branding Media Production, 3D & Dev',
    link: 'lab',
    icon: 'briefcase'
  },
  {
    name: 'explores',
    descr: 'make & share creative memories while (re)exploring places',
    link: 'explores',
    icon: 'service'
  },
  {
    name: 'initiatives',
    descr: 'lawwd-supported businesses and initiatives',
    link: 'lawwd.co/initiatives',
    icon: 'information'
  },
]

export const navbar = [
  {
    name: "portfolio",
    icon: 'projects.svg',
    link: '/projects',
    delay: 'delay-[.1s]'
  },
  {
    name: "contact",
    icon: 'events.svg',
    link: '/events',
    delay: 'delay-[.2s]'
  },
  {
    name: "team",
    icon: 'tutorials.svg',
    link: '/tutorials',
    delay: 'delay-[.4s]'
  },
  {
    name: "ventures",
    icon: 'settings.svg',
    link: '/settings',
    delay: 'delay-[.6s]'
  },
]

export const lawwd = {
  logo: "lawwd.ico",
  link: "https://lawwd.co",
}

export const project = {
  name: "LAWWD.co",
  brand: "LookAtWhatWeDid",
  descr: "We are a 360° Branding company based in Dakar.",
  tagline: "Sourced in Senegal, served worldwide",
  logo: "lawwd.svg",
  socials: [
    { name: 'facebook', short: '', link: 'https://facebook.com/pages/lookatwhatwedid' },
    { name: 'twitter', short: '', link: 'https://twitter.com/lawwd.studios' },
    { name: 'youtube', short: '', link: 'https://youtube.com/channels/lawwd' },
    { name: 'instagram', short: '', link: 'https://instagram.com/lawwd.co' },
    { name: 'dribbble', short: '', link: 'https://dribbble.com/lawwd' },
    { name: 'behance', short: '', link: 'https://behance.net/lawwd' },
  ],
  credits: `Designed & Dev by' ${lawwd.logo}`,
  copyright: {
    short: '2020—2024, LAWWD',
    long: ' all rights reserved'
  },
}

export const document = {
  extension: ' — lawwd.co',
  extension2: project.name,
}