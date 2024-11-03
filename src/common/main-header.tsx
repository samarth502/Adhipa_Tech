import React, { useState, useRef, useEffect } from 'react';
import { FaCaretDown, FaBars } from 'react-icons/fa';
import LogoDark from '../assets/CompanyLogo/Adhipa_logo_Blue.svg';

export const MainHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth >= 768) {
        if (
          servicesRef.current &&
          !servicesRef.current.contains(event.target as Node)
        ) {
          setIsServicesOpen(false);
        }
        if (
          resourcesRef.current &&
          !resourcesRef.current.contains(event.target as Node)
        ) {
          setIsResourcesOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed z-[9999] w-full py-2 md:py-4 lg:py-6 h-[56px] md:h-[85px] lg:h-[104px] backdrop-blur-desktop backdrop-blur-mobile">
      <div className="mx-auto flex justify-between px-5 md:px-12 lg:px-[45px] xl:px-20 items-center">
        <a href="/">
          <img
            src={LogoDark}
            alt="Company Logo"
            className="w-[97px] md:w-[100px] lg:w-[184px] h-[24px] md:h-[34px] lg:h-[35px] md:mr-4 lg:mr-0"
          />
        </a>

        <div className="md:flex-row">
          <nav className="hidden md:flex space-x-8 items-center">
            <div className="relative" ref={servicesRef}>
              <NavItem
                label="OUR SERVICES"
                icon={<FaCaretDown />}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              />
              {isServicesOpen && (
                <DropdownMenu
                  items={[
                    'Web Development',
                    'Mobile App Development',
                    'Software Testing & QA',
                    'Digital Marketing',
                    'IT Consulting'
                  ]}
                  links={[
                    '/our-services/web-development',
                    '/our-services/mobile-development',
                    '/our-services/software-testing-qa',
                    '/our-services/digital-marketing',
                    '/our-services/it-consulting'
                  ]}
                />
              )}
            </div>
            <NavItem label="TECHNOLOGIES" href="/technologies" />
            <NavItem label="CAREER" href="/career" />
            <div className="relative" ref={resourcesRef}>
              <NavItem
                label="RESOURCES"
                icon={<FaCaretDown />}
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              />
              {isResourcesOpen && (
                <DropdownMenu
                  items={['Blogs', 'Case Study']}
                  links={['/resources/blogs', '/resources/case-study']}
                />
              )}
            </div>
            <NavItem label="ABOUT US" href="/about-us" />
          </nav>
        </div>

        <div className="hidden md:flex justify-end items-center">
          <ContactButton />
        </div>

        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>
        <div
          className={`z-10 fixed inset-0 mt-[56px] bg-white text-black transition-opacity duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 visible h-[37vh]'
              : 'opacity-0 invisible h-0'
          }`}
          ref={mobileMenuRef}
        >
          <div className="overflow-y-auto h-full p-4">
            <ul className="flex flex-col space-y-6 text-xl">
              <li
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="cursor-pointer  flex justify-between items-center hover:bg-[#F4F4F4]"
              >
                OUR SERVICES <FaCaretDown />
              </li>
              {isServicesOpen && (
                <ul className="ml-4 text-lg space-y-2">
                  <li>
                    <a href="/our-services/web-development">Web Development</a>
                  </li>
                  <li>
                    <a href="/our-services/mobile-development">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a href="/our-services/software-testing-qa">
                      Software Testing & QA
                    </a>
                  </li>
                  <li>
                    <a href="/our-services/digital-marketing">
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="/our-services/it-consulting">IT Consulting</a>
                  </li>
                </ul>
              )}
              <li>
                <a href="/technologies">TECHNOLOGIES</a>
              </li>
              <li>
                <a href="/career">CAREER</a>
              </li>
              <li
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="cursor-pointer flex justify-between items-center"
              >
                RESOURCES <FaCaretDown />
              </li>
              {isResourcesOpen && (
                <ul className="ml-4 text-lg space-y-2">
                  <li>
                    <a href="/resources/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="/resources/case-study">Case Study</a>
                  </li>
                </ul>
              )}
              <li>
                <a href="/about-us">ABOUT US</a>
              </li>
              <li>
                <a href="/contact-us">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem: React.FC<{
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}> = ({ label, href, icon, onClick }) => {
  return (
    <a
      href={href}
      className="flex items-center cursor-pointer hover:bg-red-600 hover:text-white transition-colors duration-500"
      onClick={onClick}
    >
      <span className="md:text-[12px] lg:text-[17px]">{label}</span>
      {icon && <span className="ml-2 text-[10px]">{icon}</span>}
    </a>
  );
};

const DropdownMenu: React.FC<{ items: string[]; links: string[] }> = ({
  items,
  links
}) => {
  return (
    <div className="absolute w-[250px] bg-primary text-white">
      <ul className="">
        {items.map((item, index) => (
          <li
            key={item}
            className="py-2 px-4 hover:bg-redDarkColor transition-colors duration-300"
          >
            <a href={links[index]}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactButton: React.FC = () => {
  return (
    <button className="bg-redLightColor hover:bg-redDarkColor text-white  w-[180px] lg:h-[40px] md:h-[30px] rounded-full font-poppins lg:w-[180px] md:w-[90px]  ">
      <a href="/contact-us" className="md:text-[11px]">
        CONTACT US
      </a>
    </button>
  );
};
