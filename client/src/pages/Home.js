//DEPENDENCIES
import React from 'react';

//PAGES
//COMPONENTS
import Showcase from '../components/Showcase';
import Section from '../components/Section';

//ASSETS

const SECTIONS = [
  {
    title: 'Enjoy on your TV.',
    description:
      'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    image:
      'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
    swap: false,
  },
  {
    title: 'Download your shows to watch offline.',
    description:
      'Save your favorites easily and always have something to watch.',
    image:
      'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
    swap: true,
  },
  {
    title: 'Watch everywhere.',
    description:
      'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
    image:
      'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png',
    swap: false,
  },
  {
    title: 'Create profiles for kids.',
    description:
      'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    image:
      'https://occ-0-767-1336.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd',
    swap: true,
  },
];

const Home = () => {
  return (
    <>
      <Showcase />
      {SECTIONS.map((section) => (
        <Section section={section} />
      ))}
    </>
  );
};

export default Home;
