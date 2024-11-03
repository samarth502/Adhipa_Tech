import WebProcess from "../../../../assets/Services/Software-testing-qa/Process.jpg";

export const Process = () => {
  return (
    <div className="relative w-full mt-20 object-fill">
      <img
        src={WebProcess}
        alt="BannerImage"
        className="w-full customFive:h-[110vh] customThree:h-[120vh] customTwo:h-[135vh] md:h-[45vh] lg:h-[55vh] sm:h-[60vh] customFour:h-[135vh] h-[130vh] custom:h-[105vh] object-cover z-0"
      />

      <div className="absolute jus w-full top-0 flex flex-col bg-[#000048] bg-opacity-80 gap-4 text-white z-10 py-2">
        <h2 className="lg:text-[40px]  text-[32px] font-regular ml-6 lg:ml-28 text-start">
          IT Consulting Process
        </h2>
      </div>

      <div className="w-full lg:top-[7rem] ml-[20%] md:ml-[0%]  max-w-[40%] md:max-w-[80%]  absolute lg:min-w-[90%]  top-[4.5rem] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-[12%] items-center justify-center bg-transparent px-14  lg:px-20 ">
        <div className="rounded-full flex font-bold flex-col w-[160px] items-center justify-center h-[160px] bg-red-600 lg:absolute lg:top-[10%] lg:left-[4%] ">
          <h2 className="text-white text-[20px] lg:text-[24px] text-center">
            Requirement <br />
            Analysis
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[160px] items-center justify-center h-[160px] bg-red-600 lg:absolute lg:top-[30%] lg:left-[23%]">
          <h2 className="text-white text-[20px] text-center">
            Strategic <br />
            Planning
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[160px] items-center justify-center h-[160px] bg-red-600 lg:absolute lg:top-[10%] lg:left-[45%]">
          <h2 className="text-white text-[20px] text-center">
            Solution <br />
            Design
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[160px] items-center justify-center h-[160px] bg-red-600 lg:absolute lg:top-[30%] lg:left-[70%]">
          <h2 className="text-white text-[20px] text-center">Implementation</h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[160px] items-center justify-center h-[160px] bg-red-600 lg:absolute lg:top-[10%] lg:left-[90%]">
          <h2 className="text-white text-[20px] text-center">Optimization</h2>
        </div>
      </div>
    </div>
  );
};
