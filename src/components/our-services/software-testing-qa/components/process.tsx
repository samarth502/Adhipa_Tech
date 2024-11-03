import ProcessBackground from '../../../../assets/Common/ProcessBackground.jpg';

export const Process = () => {
  return (
    <div className="relative w-full mt-20 object-fill">
      <img
        src={ProcessBackground}
        alt="BannerImage"
        className="w-full customFive:h-[160vh] customThree:h-[170vh] customTwo:h-[190vh]  lg:h-[55vh] sm:h-[60vh] customFour:h-[190vh]  h-[130vh] custom:h-[155vh] object-cover z-0"
      />

      <div className="absolute w-full top-0 flex flex-col bg-[#000048] bg-opacity-80  text-white z-10 py-4">
        <h2 className="md:text-[40px]   text-[24px] font-regular font-lato ml-14 lg:ml-[110px] text-start">
          Software Testing Process
        </h2>
      </div>

      <div className="w-full max-w-[70%]  lg:min-w-[90%] lg:min-h-[100%]  ml-[20%] sm:gap-[170px] md:ml-5 absolute lg:top-[4.5rem] top-[7.5rem] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8  items-center justify-center bg-transparent  lg:gap-[230px] px-14 lg:px-20">
        <div className="rounded-full  flex font-bold flex-col w-[150px] items-center justify-center h-[150px] bg-[#B5151C] lg:absolute lg:top-[30%] left-[8%]">
          <h2 className="text-white text-[16px] text-center">
            Requirement <br /> Analysis
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[150px] items-center justify-center h-[150px] bg-[#B5151C] lg:absolute lg:top-[10%] left-[22%]">
          <h2 className="text-white text-[16px] text-center">
            Test <br /> Planning
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[150px] items-center justify-center h-[150px] bg-[#B5151C] lg:absolute lg:top-[30%] left-[36%]">
          <h2 className="text-white text-[16px] text-center">
            Test Case <br /> Development
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[150px] items-center justify-center h-[150px] bg-[#B5151C] lg:absolute lg:top-[10%] left-[50%]">
          <h2 className="text-white text-[16px] text-center">
            Environment <br /> Setup
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[150px] items-center justify-center h-[150px] bg-[#B5151C] lg:absolute lg:top-[30%] left-[64%]">
          <h2 className="text-white text-[16px] text-center">
            Test <br /> Execution
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[150px] items-center justify-center h-[150px] bg-[#B5151C] lg:absolute lg:top-[10%] left-[78%]">
          <h2 className="text-white text-[16px] text-center">
            Test <br /> Reporting
          </h2>
        </div>
        <div className="rounded-full font-bold flex flex-col w-[150px] items-center justify-center h-[150px] bg-[#B5151C] lg:absolute lg:top-[30%] left-[92%]">
          <h2 className="text-white text-[16px] text-center">
            Test <br />
            Closure
          </h2>
        </div>
      </div>
    </div>
  );
};
