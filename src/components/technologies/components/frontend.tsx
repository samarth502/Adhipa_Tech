import { TechnologiesItem } from './components/technology-item';
import react from '../../../assets/Technologies/React.jpg';
import vue from '../../../assets/Technologies/Vue.jpg';
import wordpress from '../../../assets/Technologies/Wordpress.jpg';
import angular from '../../../assets/Technologies/Angular.jpg';

const technologiesData = [
  { id: 1, title: 'React JS', image: react },
  { id: 2, title: 'Vue.JS', image: vue },
  { id: 3, title: 'WordPress', image: wordpress },
  { id: 4, title: 'Angular', image: angular }
];

export const Frontend = () => {
  return (
    <div className="flex w-full flex-col px-14 lg:px-20 mt-20">
      <span className="custom-heading-style  lg:lg-custom-heading-style">
        Frontend
      </span>
      <span className=" text-justify tracking-wide custom-body-style lg:lg-custom-body-style mt-8">
        At Adhipa Technologies, we specialize in building responsive, intuitive,
        and visually appealing front-end applications. Leveraging modern
        frameworks like React, Vue.js, WordPress, and Angular, we deliver
        seamless user experiences that are fast, accessible, and tailored to
        your needs. Our front-end solutions ensure that your website or app not
        only looks great but also functions flawlessly across all devices.
      </span>
      <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        {technologiesData.map((tech) => (
          <div className=''>
          <TechnologiesItem
            key={tech.id}
            title={tech.title}
            image={tech.image}
          />
          </div>
        ))}
      </div>
    </div>
  );
};
