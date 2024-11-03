interface IProps {
  title: string;
  description: string;
  src?: string;
}

export const ValueCard = (props: IProps) => {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-xl flex flex-col p-4 my-4 hover:scale-105 transition-transform duration-300 bg-primary text-white rounded-2xl md:h-[30rem] justify-center">
      <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto rounded-full flex items-center justify-center bg-white ">
        <img
          src={props.src}
          alt={`${props.title} icon`}
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
        />
      </div>
      <span className="text-[18px] md:text-[24px] font-poppins font-semibold text-center mt-8">
        {props.title}
      </span>
      <div className="text-center text-[10px] md:text-[17px] font-poppins font-regular mt-4">
        <p className="py-2 mx-8">{props.description}</p>
      </div>
    </div>
  );
};
