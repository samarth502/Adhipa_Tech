import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="h-auto w-full bg-[#F0F0F5] flex items-center justify-center p-4 flex-col">
      <h1 className="text-blue-500 text-[15px]">{`WE ARE HERE FOR YOU`}</h1>
      <h1 className="text-black text-[30px] mb-[40px] text-center">
        Contact Form
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[80%]">
        <input
          type="text"
          placeholder="First Name*"
          required
          className="text-bold p-2 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Last Name*"
          required
          className="p-2 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Email*"
          required
          className="p-2 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Phone*"
          required
          className="p-2 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="p-2 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Product Detail"
          className="p-2 rounded-md w-full"
        />
      </div>

      <button className="bg-[#EB373E] p-2  rounded-md text-[20px] w-[170px] text-white mt-[30px] uppercase">
        Submit
      </button>
    </div>
  );
};
