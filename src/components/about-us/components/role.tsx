import building from '../../../assets/AboutUs/building.jpg';

export const Role = () => {
  return (
    <div className="w-full min-h-[90vh] flex flex-col lg:flex-row mt-20 px-14 md:px-20 mx-auto">
      <div className="lg:w-3/5 flex flex-col justify-center">
        <span className="text-[24px] md:text-[40px] font-lato font-regular">
          Role of Adhipa Technologies
        </span>
        <div className=" text-justify mt-4 text-[16px] md:text-[20px] leading-relaxed font-poppins font-regular">
          At Adhipa Technologies, with a commitment to excellence, we specialize
          in delivering services that guarantee enhanced business efficiency.
          Driven by innovation and fueled by a passion for technology, we
          leverage our global presence to deliver comprehensive solutions that
          drive growth and innovation for our clients. By staying at the
          forefront of the ever-evolving software landscape, we ensure that our
          clients remain ahead of the curve, positioning themselves as leaders
          in their respective industries. With a relentless focus on customer
          satisfaction and a track record of success, Adhipa Technologies stands
          as a trusted partner for businesses looking to navigate the
          complexities of digital transformation. Join us on the journey to
          unlock new possibilities and achieve unprecedented success in today's
          dynamic business environment.
        </div>
      </div>

      <div className="lg:w-2/5 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="w-full max-w-[400px] h-auto relative">
          <img
            src={building}
            alt="building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
