import { Banner } from './components/banner';
import { Frontend } from './components/frontend';
import { Backend } from './components/backend';
import { MobileDevelopment } from './components/mobile-development';
import { CloudServices } from './components/cloud-services';
import { TechnologicalAdvancement } from './components/technological-advancement';

export const Technologies = () => {
  return (
    <>
      <Banner />
      <Frontend />
      <Backend />
      <MobileDevelopment />
      <CloudServices />
      <TechnologicalAdvancement />
    </>
  );
};
