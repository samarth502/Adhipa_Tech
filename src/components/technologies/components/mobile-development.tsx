import { TechnologiesItem } from './components/technology-item';
import react from '../../../assets/Technologies/React.jpg';
import Flutter from '../../../assets/Technologies/flutter.jpg';
import Android from '../../../assets/Technologies/android.svg';
import IOS from '../../../assets/Technologies/ios.jpg';

const technologiesData = [
  { id: 1, title: 'React Native', image: react },
  { id: 2, title: 'Flutter', image: Flutter },
  { id: 3, title: 'Android', image: Android },
  { id: 4, title: 'iOS', image: IOS }
];

export const MobileDevelopment = () => {
  return (
    <div className="flex w-full flex-col px-14 lg:px-20 mt-20">
      <span className="custom-heading-style  lg:lg-custom-heading-style">
        Mobile Development
      </span>
      <span className="text-justify tracking-wide custom-body-style lg:lg-custom-body-style mt-8">
        At Adhipa Technologies, we bring your mobile app ideas to life with
        cutting-edge development frameworks like React Native, Flutter, Android,
        and iOS. Our expertise in mobile development ensures that your app is
        not only visually appealing but also optimized for performance across
        all devices. We focus on creating user-friendly, feature-rich mobile
        applications that provide a seamless and engaging experience for your
        customers.
      </span>
      <div className="mt-10 grid  xs:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        {technologiesData.map((tech) => (
          <TechnologiesItem
            key={tech.id}
            title={tech.title}
            image={tech.image}
          />
        ))}
      </div>
    </div>
  );
};
