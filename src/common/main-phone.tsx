import { FaPhoneAlt } from 'react-icons/fa';

export const MainPhone = () => {
  const openWhatsapp = () => {
    const whatsappURL = 'https://wa.me/917209563603';
    window.open(whatsappURL, '_blank');
  };
  return (
    <button
      onClick={openWhatsapp}
      className="fixed z-[999] hover:bg-[#B5151C] top-[48%] right-0 rounded-l-lg bg-[#EB373E] h-[35px] w-[35px] md:h-[45px] md:w-[45px] flex justify-center items-center shadow-md cursor-pointer"
    >
      <FaPhoneAlt size={25} color="white" />
    </button>
  );
};
