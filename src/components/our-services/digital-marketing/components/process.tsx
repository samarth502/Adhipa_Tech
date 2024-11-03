import WebProcess from '../../../../assets/Services/Software-testing-qa/Process.jpg';

export const Process = () => {
  return (
    <div className="relative w-full mt-[100px] object-fill">
      <img
        src={WebProcess}
        alt="BannerImage"
        className="w-full customFive:h-[160vh] customThree:h-[140vh] customTwo:h-[170vh]  lg:h-[55vh] sm:h-[60vh] customFour:h-[190vh]  h-[130vh] custom:h-[130vh] object-cover z-0"
      />

      <div className="absolute jus w-full top-0 flex flex-col bg-[#000048] bg-opacity-80 gap-4 text-white z-10 py-4">
        <h2 className="md:text-[40px] text-[24px] font-regular ml-24 text-start">
          Digital Marketing Process
        </h2>
      </div>

      <div className="w-full max-w-[70%]  lg:min-w-[90%] lg:min-h-[100%]  ml-[20%] sm:gap-[170px] md:ml-5 absolute lg:top-[4.5rem] top-[7.5rem] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8  items-center justify-center bg-transparent  lg:gap-[230px] px-14 lg:px-20">
        <div className="rounded-full flex font-bold flex-col w-[140px] items-center justify-center h-[140px] bg-red-600 lg:absolute lg:top-[10%] lg:left-[5%]">
          <h2 className="text-white text-[20px] text-center">
            Research & <br /> Planning
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[140px] items-center justify-center h-[140px] bg-red-600 lg:absolute lg:top-[30%] lg:left-[23%]">
          <h2 className="text-white text-[20px] text-center">
            Content <br /> Creation
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[140px] items-center justify-center h-[140px] bg-red-600 lg:absolute lg:top-[10%] lg:left-[40%]">
          <h2 className="text-white text-[20px] text-center">Execution</h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[140px] items-center justify-center h-[140px] bg-red-600 lg:absolute lg:top-[30%] lg:left-[55%]">
          <h2 className="text-white text-[20px] text-center">Optimization</h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[140px] items-center justify-center h-[140px] bg-red-600 lg:absolute lg:top-[10%] lg:left-[70%]">
          <h2 className="text-white text-[20px] text-center">
            Analysis & <br />
            Reporting
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[140px] items-center justify-center h-[140px] bg-red-600 lg:absolute lg:top-[30%] lg:left-[87%]">
          <h2 className="text-white text-[20px] text-center">
            Continuous <br />
            Improvement
          </h2>
        </div>
      </div>
    </div>
  );
};
