import WomenImage from '../assets/Common/women.png';
export const MainChatBot = () => {
  return (
    <div className="z-[999] fixed hover:bg-[#5f1a1c] bg-[#EB373E] overflow-hidden rounded-[100%] h-[65px] w-[65px] top-[90%] lg:left-[95%] left-[83%]">
      <img src={WomenImage} className="cursor-pointer" alt="WomenImage" />
    </div>
  );
};
