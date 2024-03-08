export { default as useNav } from '../hooks/useNav'


export const team = [
  {
    name: { first: "Abdoulaye", last: "Sylla", prefix: "Président" },
    position: "Manager",
    nickname: "Mr.Exclusive",
    handle: { instagram: "", },
    image: "https://images.pexels.com/photos/3796620/pexels-photo-3796620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: { first: "Assane", last: "SYLLA", prefix: "" },
    position: "Secretaire Général",
    nickname: "",
    handle: { instagram: "barbumusprime" },
    image: "https://res.cloudinary.com/lawwd/image/upload/v1657459657/.MRX/EX_LAWWD__yjdlmt.jpg",
  },
]

export const headers = [
  {
    name: "home",
    descr: "",
    link: "/",
    icon: "home"
  },
  {
    name: "the.lab",
    descr: "the lab for content in Branding Media Production, 3D & Dev",
    link: "lab",
    icon: 'briefcase'
  },
  {
    name: "explores",
    descr: 'make & share creative memories while (re)exploring places',
    link: "explores",
    icon: "service"
  },
  {
    name: "faq",
    descr: "Answers commonly asked questions about the party's platform, positions, and procedures.",
    link: "lawwd.co/initiatives",
    icon: "information"
  },
]

export const navbar = {
  left: [

    {
      name: "accueil",
      icon: 'projects.svg',
      link: '/',
    },
    {
      name: "a propos",
      icon: 'events.svg',
      link: '/about',
    },
    {
      name: "la plateforme",
      icon: 'tutorials.svg',
      link: '/platform',
    },
    {
      name: "media",
      icon: 'settings.svg',
      link: '/media',
    },

  ],
  right: [
    {
      name: "media",
      icon: 'settings.svg',
      link: '/media',
    },
    {
      name: "ressources voteurs",
      icon: 'settings.svg',
      link: '/voter-resources',
    },

  ]
}

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