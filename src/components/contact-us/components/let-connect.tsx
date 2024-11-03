import { useState } from 'react';

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  projectDetail: string;
}

const defaultFormaData = {
  name: '',
  phoneNumber: '',
  email: '',
  companyName: '',
  projectDetail: ''
};

export const LetConnect: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormaData);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    if (!formData.projectDetail.trim()) {
      newErrors.projectDetail = 'Project details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('good to go');
    } else {
      console.log('Error');
    }
  };
  return (
    <div className="w-full mt-20">
      <div className="mx-auto px-14 lg:px-140 max-w-7xl">
        <div className="flex justify-center">
          <span className="custom-heading-style lg:lg-custom-heading-style">
            LET'S CONNECT
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 mt-8 space-y-4 md:space-y-0 font-poppins">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="flex flex-row">
              <span className="flex">Name*</span>
            </label>
            <input
              className="bg-light h-12 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mt-1"
              id="name"
              type="text"
              placeholder="Name"
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-redDarkColor text-[12px] md:text-[24px] font-poppins font-regular">
                {errors.name}
              </p>
            )}

            <label className="flex flex-row mt-4">
              <span className="flex">Phone Number*</span>
            </label>
            <input
              className="bg-light  h-12 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mt-1"
              id="phoneNumber"
              type="text"
              placeholder="Phone Number"
              onChange={handleInputChange}
            />
            {errors.phoneNumber && (
              <p className="text-redDarkColor text-[12px] md:text-[24px] font-poppins font-regular">
                {errors.phoneNumber}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="flex flex-row">
              <span className="flex">Email Id*</span>
            </label>
            <input
              className="bg-light  h-12 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mt-1"
              id="email"
              type="email"
              placeholder="Email id"
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-redDarkColor text-[12px] md:text-[24px] font-poppins font-regular">
                {errors.email}
              </p>
            )}

            <label className="flex flex-row mt-4">
              <span className="flex">Company Name*</span>
            </label>
            <input
              className="bg-light  h-12 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mt-1"
              id="companyName"
              type="text"
              placeholder="Company Name"
              onChange={handleInputChange}
            />
            {errors.companyName && (
              <p className="text-redDarkColor text-[12px] md:text-[24px] font-poppins font-regular">
                {errors.companyName}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label className="flex flex-row">
            <span className="flex">Project Details*</span>
          </label>
          <textarea
            className="bg-light shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mt-1 h-32"
            id="projectDetail"
            placeholder="Project Details"
            onChange={handleInputChange}
          />
          {errors.projectDetail && (
            <p className="text-redDarkColor text-[12px] md:text-[24px] font-poppins font-regular">
              {errors.projectDetail}
            </p>
          )}
        </div>

        <div className="flex justify-center mt-8 items-center">
          <button
            className="bg-redLightColor hover:bg-redDarkColor text-white p-2 rounded-full items-center text-[20px] w-[250px] uppercase"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
