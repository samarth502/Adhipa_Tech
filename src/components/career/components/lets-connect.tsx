import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import careerConnectImage from '../../../assets/Career/careerConnect.jpg';
import { executeMutation } from '../../../server/main-server';
import { CREATE_JOB_APPLICATION_MUTATION } from '../gql/mutations';

interface SendApplicationData {
  name: string;
  email: string;
  experienceLevel: string;
  resume: File | null;
}

const defaultSendApplicationData: SendApplicationData = {
  name: '',
  email: '',
  experienceLevel: '',
  resume: null
};

export const LetsConnect: React.FC = () => {
  const [formData, setFormData] = useState<SendApplicationData>(
    defaultSendApplicationData
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = async () => {
    try {
      const variables = {
        createApplicationArgs: {
          name: formData.name,
          email: formData.email,
          experienceLevel: formData.experienceLevel
        },
        file: formData.resume
      };

      const data = await executeMutation<{
        createJobApplication: { name: string; email: string };
      }>(CREATE_JOB_APPLICATION_MUTATION, variables);
      if (data) {
        setFormData(defaultSendApplicationData);
        alert('Thanks for connecting with us!');
      } else {
        alert('Something went wrong!');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="flex flex-col xs:flex-col-reverse mx-auto w-full md:flex-row justify-between items-center px-14 md:px-20 mt-20 mb-20">
      <div className="w-full md:w-1/2">
      <h2 className=" custom-heading-style  xs:font-extrabold  lg:lg-custom-heading-style">
          Let's Connect
        </h2>
       
        
        <div className="flex flex-col gap-4 mt-4">
          <label className="flex flex-col">
            <span className="font-medium mb-2">Name*</span>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="border h-12 bg-light shadow appearance-none py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium mb-2">Email Id*</span>
            <input
              id="email"
              type="email"
              placeholder="Email Id"
              className="border h-12 bg-light shadow appearance-none py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium mb-2">Experience level*</span>
            <input
              id="experienceLevel"
              type="text"
              placeholder="Experience level"
              className="border h-12 bg-light shadow appearance-none py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium mb-2">Attach Your Resume</span>
            <div className="flex items-center border bg-light rounded cursor-pointer h-12 shadow appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
              <AiOutlineCloudUpload className="text-2xl mr-2 text-gray-400" />
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="flex-grow text-gray-400">
                {formData.resume ? formData.resume.name : 'Upload Resume'}
              </span>
            </div>
          </label>

          <button
            onClick={handleSubmit}
            className="mt-4 py-2 px-4 bg-redLightColor text-white max-w-[30%] rounded-full hover:bg-redDarkColor uppercase"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="  w-full xs:flex xs:relative xs:flex-col md:w-2/5 flex justify-center items-center">
      <h2 className=" sm:hidden custom-heading-style xs:absolute xs:left-0 xs:-top-14 xs:font-extrabold  lg:lg-custom-heading-style">
          Let's Connect
        </h2>
        <img
          src={careerConnectImage}
          alt="Career Connect"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    </div>
  );
};
