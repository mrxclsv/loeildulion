export { default as useNav } from '../hooks/useNav'

export const clients = [
  {
    name: "Fédération Sénégalaise de Football",
    metadata: {
      date: "2022"
    },
    logo: "/logo.png",
    link: ""
  },
  {
    name: "Orange Senegal",
    metadata: {
      date: "2022"
    },
    logo: "/logo.png",
    link: ""
  },
  {
    name: "Fédération Sénégalaise de Football",
    metadata: {
      date: "2022"
    },
    logo: "/logo.png",
    link: ""
  },
  {
    name: "Fédération Sénégalaise de Lutte",
    metadata: {
      date: "2022"
    },
    logo: "/logo.png",
    link: ""
  },
  {
    name: "NBA Academy",
    metadata: {
      date: "2022"
    },
    logo: "/logo.png",
    link: ""
  },
  {
    name: "",
    metadata: {
      date: "2022"
    },
    logo: "/logo.png",
    link: ""
  },
]

export const latestVideos = [
  { url: "https://www.youtube.com/watch?v=xuas_Yc7VNQ", },
  { url: "https://www.youtube.com/watch?v=V1XeRNYIjqw", },
  { url: "https://www.youtube.com/watch?v=t2OjUdh8ouo" },
]

export const team = [
  {
    name: { first: "Caab Ousmane", last: "Sidibe", prefix: "" },
    position: "Co-Founder",
    nickname: "caab_ousmane",
    handle: { instagram: "caab_ousmane", },
    image: "https://images.pexels.com/photos/3796620/pexels-photo-3796620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: { first: "Pape", last: "", prefix: "" },
    position: "Co-founder",
    nickname: "",
    handle: { instagram: "pape" },
    image: "https://res.cloudinary.com/lawwd/image/upload/v1657459657/.MRX/EX_LAWWD__yjdlmt.jpg",
  },
]

// export const headers = [
//   {
//     name: "home",
//     descr: "",
//     link: "/",
//     icon: "home"
//   },
//   {
//     name: "the.lab",
//     descr: "the lab for content in Branding Media Production, 3D & Dev",
//     link: "lab",
//     icon: 'briefcase'
//   },
//   {
//     name: "explores",
//     descr: 'make & share creative memories while (re)exploring places',
//     link: "explores",
//     icon: "service"
//   },
//   {
//     name: "faq",
//     descr: "Answers commonly asked questions about the party's platform, positions, and procedures.",
//     link: "lawwd.co/initiatives",
//     icon: "information"
//   },
// ]

export const navbar = {
  left: [
    {
      name: "accueil",
      icon: '',
      slug: "",
      link: '/',
    },
    {
      name: "a propos",
      icon: '',
      slug: "",
      link: '/about',
    },
    {
      name: "media",
      icon: '',
      slug: "",
      link: '/media',
    },

    // {
    //   name: "sports",
    //   icon: 'tutorials.svg',
    //   slug: "media",
    //   link: '/platform',
    // },
    // {
    //   name: "art",
    //   icon: '',
    //   slug: "media",
    //   link: '/art',
    // },
    // {
    //   name: "culture",
    //   icon: '',
    //   slug: "media",
    //   link: '/culture',
    // },

  ],

  right: [
    {
      name: "",
      icon: 'search',
      slug: "",
      link: '',
    },


  ]
}

export const thisApp = {
  logo: "favicon.ico",
  link: "https://loeildulion.com",
}

export const project = {
  name: "L'œil Du Lion",
  descr: "",
  tagline: "Sport, Art & Culture",
  logo: "logo.png",
  socials: [
    { name: 'youtube', short: '', link: 'https://www.youtube.com/@Loeildulion' },
    { name: 'instagram', short: '', link: 'https://instagram.comloeildulion/' },
    { name: 'tiktok', short: '', link: 'https://tiktok.com/@loeildulion_' },
  ],
  credits: `Designed & Dev by' ${thisApp.logo}`,
  copyright: {
    short: '2020—2024, loeildulion',
    long: ' all rights reserved'
  },
}

export const document = {
  extension: ' — lawwd.co',
  extension2: project.name,
}