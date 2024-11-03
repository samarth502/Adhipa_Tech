export const Milestones = () => {
  return (
    <div className="w-full px-14 md:px-20 flex flex-col items-center mt-20">
      <h2 className="text-3xl font-bold">Milestones</h2>
      <div className="relative w-full max-w-4xl mx-auto mt-10">
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 border-l-2 border-gray-400 h-[90%]"></div>
        <div className="relative flex flex-col gap-20">
          {/* Milestone 1 */}
          <div className="flex lg:justify-start">
            <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 -translate-x-1/2"></div>
            <div className="flex flex-col lg:ml-[120px] text-center lg:text-right">
              <h3 className="text-xl font-semibold xs:mr-20 xs:-mt-1 md:mr-3 ">2024</h3>
              <p className="text-gray-700 xs:mr-40 md:mr-0">
                Incorporated and started Digital Marketing
              </p>
            </div>
          </div>
          {/* Milestone 2 */}
          <div className="flex lg:justify-end">
            <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 -translate-x-1/2"></div>
            <div className="flex flex-col items-start lg:mr-[220px] text-center lg:text-left">
              <h3 className="text-xl font-semibold xs:ml-44 -mt-1 md:ml-0">2023</h3>
              <p className="text-gray-700 xs:ml-40 md:ml-0">Completed our 10th project</p>
            </div>
          </div>
          {/* Milestone 3 */}
          <div className="flex lg:justify-start">
            <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 -translate-x-1/2"></div>
            <div className="flex flex-col text-center lg:text-right">
              <h3 className="text-xl font-semibold  xs:mr-20 xs:-mt-1 md:mr-3">2022</h3>
              <p className="text-gray-700 xs:mr-40 md:mr-0 text-center">
                Successfully delivered 5 web applications and 1 mobile app
              </p>
            </div>
          </div>
          {/* Milestone 4 */}
          <div className="flex lg:justify-end">
            <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 -translate-x-1/2"></div>
            <div className="flex flex-col items-start lg:mr-[320px] text-center lg:text-left">
              <h3 className="text-xl font-semibold xs:ml-44 -mt-1 md:ml-0">2021</h3>
              <p className="text-gray-700 xs:ml-40 md:ml-0">First Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
