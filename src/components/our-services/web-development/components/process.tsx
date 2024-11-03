import WebProcess from '../../../../assets/Services/Web-development/WebProcess.jpg';

export const Process = () => {
  return (
    <div className="relative w-full mt-20 object-fill">
      {/* Background Image */}
      <img
        src={WebProcess}
        alt="BannerImage"
        className="w-full customFive:h-[70vh] customThree:h-[75vh] customTwo:h-[95vh]  lg:h-[50vh] sm:h-[60vh] customFour:h-[90vh]   h-[150vh] md:h-[20vh] custom:h-[75vh] object-cover z-0"
      />

      {/* Heading Section */}
      <div className="absolute w-full top-0 flex flex-col bg-primary backdrop-blur text-white h-14 lg:h-20 justify-center">
        <h2 className="px-14 lg:px-20 custom-heading-style lg:lg-custom-heading-style">
          Web Development Process
        </h2>
      </div>

      {/* Circle Container */}
      <div className="w-full lg:top-[7rem] ml-[20%] md:ml-[0%]  max-w-[40%] md:max-w-[80%]  absolute lg:min-w-[90%]  top-[4.5rem] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-[12%] items-center justify-center bg-transparent px-14 lg:px-20">
        {/* Circle 1 */}
        <div className="rounded-full flex flex-col w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] items-center justify-center bg-redLightColor">
          <h2 className="text-white lg:text-[24px] text-[14px] font-bold font-poppins text-center">
            Requirement <br /> Analysis
          </h2>
        </div>

        {/* Circle 2 */}
        <div className="rounded-full flex flex-col w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] items-center justify-center bg-redLightColor">
          <h2 className="text-white font-bold lg:text-[24px] text-[14px] font-poppins text-center">
            Design
          </h2>
        </div>

        {/* Circle 3 */}
        <div className="rounded-full flex flex-col w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] items-center justify-center bg-redLightColor">
          <h2 className="text-white font-bold lg:text-[24px] text-[14px] font-poppins text-center">
            Development   
          </h2>
        </div>

        {/* Circle 4 */}
        <div className="rounded-full flex flex-col w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] items-center justify-center bg-redLightColor">
          <h2 className="text-white font-bold lg:text-[24px] text-[14px] font-poppins text-center">
            Launch
          </h2>
        </div>
      </div>
    </div>
  );
};
