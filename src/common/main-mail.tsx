import { IoMailOutline } from 'react-icons/io5';

export const MainMail = () => {
  const openEmail = () => {
    const emailURL = 'mailto:sales@adhipatech.com';
    window.open(emailURL, '_blank');
  };
  return (
    <button
      onClick={openEmail}
      className="fixed z-[999] hover:bg-redDarkColor top-[40%] right-0 rounded-l-lg bg-redLightColor h-[35px] w-[35px] md:h-[45px] md:w-[45px] flex justify-center items-center shadow-md cursor-pointer"
    >
      <IoMailOutline size={25} color="white" />
    </button>
  );
};
