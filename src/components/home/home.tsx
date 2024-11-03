import React from 'react';

import { AboutUs } from './components/about-us';
import { Banner } from './components/banner';
import { Blog } from './components/blog';
import { Industry } from './components/industry';
import { Service } from './components/service';

export const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Service />
      <AboutUs />
      <Industry />
      <Blog />
    </>
  );
};
