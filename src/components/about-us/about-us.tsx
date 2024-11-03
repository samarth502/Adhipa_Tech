import { Banner } from './components/banner';
import { Role } from './components/role';
import { Team } from './components/team';
import { Milestones } from './components/milestones';
import { MissionVision } from './components/mission-vision';
import { OurValues } from './components/our-values';

export const AboutUs = () => {
  return (
    <>
      <Banner />
      <Role />
      <Team />
      <Milestones />
      <MissionVision />
      <OurValues />
    </>
  );
};
