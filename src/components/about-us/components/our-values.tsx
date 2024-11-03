import AboutUsCustomer from '../../../assets/AboutUs/AboutUs_customer.svg';
import AboutUsValue from '../../../assets/AboutUs/AboutUs_Value.svg';
import { ValueCard } from './components/value-card';

export const OurValues = () => {
  return (
    <div className="w-full py-20 px-14 md:px-20">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <span className="text-[24px] md:text-[40px] font-lato font-regular">
            Our Values
          </span>
        </div>
        <div className="flex flex-col md:flex-row mt-6 justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          <ValueCard
            title="Customer Centricity"
            description="Our customers are at our “Central Focus” for all actions"
            src={AboutUsCustomer}
          />
          <ValueCard
            title="Value Proposition"
            description="Our actions adding value to the “Customer Vision”"
            src={AboutUsValue}
          />
        </div>
      </div>
    </div>
  );
};
