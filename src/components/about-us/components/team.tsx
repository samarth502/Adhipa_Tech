import RightOne from '../../../assets/AboutUs/right-one.jpg';
import RightTwo from '../../../assets/AboutUs/right-two.jpg';
import RightThree from '../../../assets/AboutUs/right-three.jpg';
import LeftOne from '../../../assets/AboutUs/left-one.jpg';
import LeftTwo from '../../../assets/AboutUs/left-two.jpg';

export const Team = () => {
  return (
    <div className="bg-primary overflow-hidden text-white flex flex-col md:flex-row w-full lg:overflow-hidden overflow-y-auto mt-20 px-14 lg:px-20 gap-10 lg:gap-0">
      {/* Left Text Section */}
      <div className="lg:w-2/3 flex flex-col lg:pr-10 py-5 lg:py-20">
        <span className="text-[20px] md:text-[30px] font-poppins tracking-wider">
          Adhipa Technologies is your trusted IT <br /> Outsourcing partner.
        </span>
        <span className="text-[17px] md:text-[19px] mt-8 font-poppins">
          Our technology team comes from myriad industries bringing in the best{' '}
          <br /> of Diverse Industry Rich Experience unified by a common passion
          for <br /> innovation and excellence.
        </span>
        <span className="mt-8 text-[14px] md:text-[15px] font-poppins font-regular leading-relaxed">
          Our constant endeavor is to accelerate business value for our clients.
          Right from in-depth Analysis and Realistic Inputs before starting a
          project to execution to Post-delivery Client Support, we ensure our
          team is an integral part of your project in every possible way. Even
          the smallest delivery is streamlined by our finely chiseled processes
          & quality checks. We nurture every project as our own.
        </span>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/3 overflow-hidden flex flex-col xs:flex-row gap-4 lg:gap-3 md:flex-row justify-center mb-10 lg:mg-0">
        <div className="flex flex-row md:flex-col xs:w-28  xs:flex-col md:w-full   gap-2 w-full">
          <img
            src={LeftOne}
            alt="LeftOne"
            className="object-cover rounded-md animate-upwards h-40 w-full"
          />
          <img
            src={LeftTwo}
            alt="LeftTwo"
            className="object-cover rounded-md animate-upwards h-40 w-full"
          />
        </div>
        <div className="flex flex-row md:flex-col xs:w-28 md:w-full xs:flex-col gap-3 justify-between w-full">
          <img
            src={RightOne}
            alt="RightOne"
            className="object-cover rounded-md animate-downwards h-40 "
          />
          <img
            src={RightTwo}
            alt="RightTwo"
            className="object-cover rounded-md animate-downwards h-40 "
          />
          <img
            src={RightThree}
            alt="RightThree"
            className="object-cover rounded-md animate-downwards h-40 "
          />
        </div>
      </div>
    </div>
  );
};
