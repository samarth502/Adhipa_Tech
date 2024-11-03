import one from '../../../assets/AboutUs/one.jpg';
import oneone from '../../../assets/AboutUs/oneone.jpg';
import two from '../../../assets/AboutUs/two.jpg';
import three from '../../../assets/AboutUs/three.jpg';
import threethree from '../../../assets/AboutUs/threethree.jpg';
import four from '../../../assets/AboutUs/four.jpg';

export const MissionVision = () => {
  return (
    <div className="mt-20">
      {/* Mission Section */}
      <div className="flex flex-col gap-4 lg:flex-row sm:flex-col bg-light px-14 md:px-20 py-12  w-full h-full">
        {/*  Mission Text */}
        <div className="flex flex-col gap-8 lg:w-[60%] md:gap-4 xs:gap-4">
          <span className="font-lato font-extrabold  text-[24px] md:text-[40px]">
            Our Mission
          </span>
          <span className="font-poppins  font-medium text-[12px] md:text-[24px]">
            Our mission is to provide top-notch agile digital transformation
            services, which will help enhance the business growth of our
            clients.
          </span>
          <p className="font-poppins text-justify font-regular text-[10px] md:text-[20px] md:px-2">
            At Adhipa Technologies, we are committed to providing agile digital
            transformation services that empower our clients to achieve
            significant business growth. We focus on delivering innovative,
            tailored solutions to meet each client's unique needs. By staying
            ahead of industry trends, we ensure that our mission of fostering
            client success remains our top priority.
          </p>
          {/* First Row */}
          <div className="flex flex-row h-[150px] gap-4 lg:h-[175px] w-full md:hidden">
            <img
              src={one}
              alt="one"
              className="w-[47%] md:w-[48%] hover:scale-105 transition-transform duration-300"
            />
            <img
              src={oneone}
              alt="oneone"
              className="w-[47%] md:w-[48%] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/*  Mission Image */}
        <div className="lg:w-[40%] md:mt-24 ">
          {/* First Row */}
          <div className="md:flex hidden flex-row h-[150px] gap-4 lg:h-[175px] w-full ">
            <img
              src={one}
              alt="one"
              className="w-[47%] md:w-[48%] hover:scale-105 transition-transform duration-300"
            />
            <img
              src={oneone}
              alt="oneone"
              className="w-[47%] md:w-[48%] hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Second Row */}
          <div className="lg:w-full  md:w-full  h-[150px] lg:h-[175px] mt-4 hover:scale-105 transition-transform duration-300">
            <img src={two} alt="two" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col gap-4 lg:flex-row bg-light px-14 md:px-20  w-full pb-14">
        {/* Vision Text */}
        <div className="flex flex-col gap-8  mt-10 md:mt-20 lg:w-[60%] md:gap-4 xs:gap-4">
          <span className="font-lato font-semibold text-[24px] md:text-[40px]">
            Our Vision
          </span>
          <span className="font-poppins font-medium text-[12px] md:text-[24px]">
            To become the Most Preferred Technology Solution & Service provider
            in the Global Market.
          </span>
          <p className="font-poppins text-justify font-regular text-[10px] md:text-[20px]">
            At Adhipa Technologies, we aspire to be the top choice for
            technology solutions and services in the global market. We are
            dedicated to this vision by consistently delivering innovative,
            high-quality solutions that exceed our clients' expectations. Our
            unwavering commitment to excellence and client satisfaction ensures
            we stay true to this vision every step of the way.
          </p>
        </div>

        {/* Vision Image */}
        <div className="lg:w-[40%] md:w-full md:mt-28  xs:w-full ">
          {/* First Row */}
          <div className="flex h-[150px] xs:w-full lg:w-full  gap-4 lg:h-[175px] md:w-full">
            <img
              src={three}
              alt="three"
              className="xs:w-[47%] lg:w-[48%] md:w-80 hover:scale-105 transition-transform duration-300 "
            />
            <img
              src={threethree}
              alt="threethree"
              className=" xs:w-[47%] lg:w-[48%] md:w-80 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Second Row */}
          <div className="lg:w-full  h-[150px] lg:h-[175px] mt-4 hover:scale-105 transition-transform duration-300 xs:w-full md:w-full ">
            <img src={four} alt="four" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
