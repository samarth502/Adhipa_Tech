import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { FiFacebook } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineMail } from 'react-icons/md';

import Logo from '../assets/CompanyLogo/Adhipa_logo_white.svg';
import { Link } from 'react-router-dom';

export const MainFooter: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-white p-4 overflow-hidden">
      <div className="flex flex-col gap-1 md:flex-row  justify-between px-14 md:px-20">
        <div className="flex flex-col lg:w-[47%] gap-1 w-full mb-6 lg:mt-2 lg:mb-0 justify-between">
          <LogoAndSocialLinks />
        </div>

        <div className="flex lg:w-[100%] customFive:flex-col md:flex-row customThree:flex-col items-start lg:justify-around flex-row w-full gap-4 mb-6 lg:mb-0">
          <Services />
          <Resources />
          <QuickLinks />
        </div>
        <ContactUs />
      </div>
      <div className="hidden lg:block border-t border-[3px] border-white my-4"></div>
      <div className="flex flex-col lg:flex-row lg:justify-between px-14 md:px-20 font-lato">
        <h4>{'Privacy Policy'}</h4>
        <h2>{'All copyright @ Adhipa Technologies'}</h2>
      </div>
    </footer>
  );
};

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 lg:w-[50%] sm:w-full items-start">
      <h2 className="mb-4 text-grayish font-lato">{'Contact Us'}</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-1">
          <div className="flex mt-2">
            <FiPhone />
          </div>
          <div>
            <p className="font-lato">{'Call Us'}</p>
            <p className="font-poppins">{'+91 7209563603'}</p>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="flex mt-2">
            <HiOutlineOfficeBuilding />
          </div>
          <div>
            <p className="font-lato">{'Our Office'}</p>
            <p className="font-poppins">
              {'503 SKYI, Star Town Tower2, Near Shell Petrol'} <br />
              {'Pump, Bhukum, Pune'}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="flex mt-2">
            <MdOutlineMail />
          </div>
          <div>
            <p className="font-lato">{'Email'}</p>
            <p className="font-poppins">{'sales@adhipatech.com'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickLinks: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-grayish font-lato">{'Quick Links'}</h2>
      <div className="cursor-pointer font-poppins text-sm flex flex-col mt-4 gap-2">
        <span className=" hover:text-redDarkColor">{'Technologies'}</span>
        <span className=" hover:text-redDarkColor">{'Careers'}</span>
        <span className=" hover:text-redDarkColor">{'About Us'}</span>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-grayish font-lato">{'Resources'}</h2>
      <div className="cursor-pointer font-poppins text-sm flex flex-col mt-4 gap-2">
        <span className=" hover:text-redDarkColor">{'Blogs'}</span>
        <span className=" hover:text-redDarkColor">{'Case Study'}</span>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-grayish font-lato">{'Our Services'}</h2>
      <div className="cursor-pointer font-poppins text-sm flex flex-col mt-4 gap-2">
        <span className=" hover:text-redDarkColor">
          <a href="/our-services/web-development">{'Web Development'}</a>
        </span>
        <span className="hover:text-redDarkColor">
          <a href="/our-services/mobile-development">
            {'Mobile App Development'}
          </a>
        </span>
        <span className="hover:text-redDarkColor">
          <a href="/our-services/software-testing-qa">
            {'Software Testing & QA'}
          </a>
        </span>
        <span className="hover:text-redDarkColor">
          <a href="/our-services/digital-marketing">{'Digital Marketing'}</a>
        </span>
        <span className="hover:text-redDarkColor">
          <a href="/our-services/it-consulting">{'IT Consulting'}</a>
        </span>
      </div>
    </div>
  );
};

const LogoAndSocialLinks: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="flex flex-col gap-5">
      <Link to="/" onClick={scrollToTop}>
        <img src={Logo} alt="company logo" className="w-[140px] h-[40px]" />
      </Link>
      <div className="flex flex-row gap-5">
        <Link
          to="https://www.facebook.com/profile.php?id=61560468841566"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-white h-12 w-12 rounded-full flex justify-center items-center"
        >
          <FiFacebook
            className="w-8 h-8 duration-500 transition-transform hover:-translate-y-1"
            color="black"
          />
        </Link>
        <Link
          to="https://twitter.com/adhipatech"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-white h-12 w-12 rounded-full flex justify-center items-center"
        >
          <FaXTwitter
            className="w-8 h-8 duration-500 transition-transform hover:-translate-y-1"
            color="black"
          />
        </Link>
        <Link
          to="https://www.linkedin.com/company/adhipa-tech/"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-white h-12 w-12 rounded-full flex justify-center items-center"
        >
          <AiFillLinkedin
            className="w-8 h-8 duration-500 transition-transform hover:-translate-y-1"
            color="black"
          />
        </Link>
        <Link
          to="https://www.instagram.com/adhipatechnologies/"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-white h-12 w-12 rounded-full flex justify-center items-center"
        >
          <AiFillInstagram
            className="w-8 h-8 duration-500 transition-transform hover:-translate-y-1"
            color="black"
          />
        </Link>
      </div>
    </div>
  );
};
