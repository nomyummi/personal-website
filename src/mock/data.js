import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
  resume: '/static/VictorXue_ResumeCS.pdf', // if no resume, the button will not show up
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto: victorxue007@gmail.com',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nomyummi/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/victor-xue/',
    },

  ],
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'simple-blog-example.png',
    title: 'Full Stack Blog',
    info: 'A blog that connects a frontend web app to a backend API. Guests can sign up for an account, and then log in to create posts. Posts are created using a rich text editor allowing the author to add images, embed videos, use different fonts, add color to text, etc. Posts can be commented on by a guest or a user.',
    info2: 'Created using React, Node.js, Express, MongoDB, Redis, PassportJS, React Hook Form, Yup, and Quill.',
    url: 'http://simple-blog-vx.herokuapp.com/',
    repo: 'https://github.com/nomyummi/simple-blog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pokemon-memory-card-example.png',
    title: 'Pokemon Memory Card',
    info: 'A Pokemon memory card game. Play on Normal mode or Hard mode by clicking on a different Pokemon card each time. Use the search bar to change which Pokemon cards are displayed. Gallery mode opens up a Pokemon card viewing gallery.',
    info2: 'Created using React and the Pokemon TCG API.',
    url: 'https://nomyummi.github.io/playground/memory-card/build/',
    repo: 'https://github.com/nomyummi/playground', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'connect-four-example.png',
    title: 'Connect 4 AI',
    info: 'Connect 4 with a 1-Player and 2-Player mode. The default is 2-Player mode. Use the keyboard numbers 1-7 to drop chips onto the corresponding column. Press \'o\' to switch to one player mode. Restart the game by pressing \'c\'. Playable in the browser thanks to WebAssembly.',
    info2: 'Created using C++ and SDL. Ported the C++ code to WebAssembly using Emscripten. ',
    url: '/static/connect_four.html',
    repo: 'https://github.com/nomyummi/Connect-Four', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
