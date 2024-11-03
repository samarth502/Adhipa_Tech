import Maintenance from '../../../../assets/Services/Web-development/webmaintanace.jpg';
import Application from '../../../../assets/Services/Web-development/webapplication.jpg';
import Custom from '../../../../assets/Services/Web-development/customwebdesign.jpg';
import ECommerce from '../../../../assets/Services/Web-development/e-commercedevelopment.jpg';
import Cms from '../../../../assets/Services/Web-development/cmsdevelopemnt.jpg';
import { ServiceItem } from './components/service-item';

export const Service = () => {
  const data = [
    {
      image: Custom,
      title: 'Custom Website Development',
      description:
        'Our custom website development service is tailored to meet the unique needs of each client. We create websites that reflect your brand, engage your audience, and deliver a seamless user experience. From concept to launch, we ensure every detail is crafted to your specifications, resulting in a website that stands out and drives results.'
    },
    {
      image: ECommerce,
      title: 'E Commerce Development',
      description:
        'Our e-commerce development service creates powerful, user-friendly online stores tailored to your business needs. With our expert team, we design secure, scalable, and sales-optimized websites, ensuring seamless shopping experiences and efficient payment processing to drive growth and customer satisfaction.'
    },
    {
      image: Cms,
      title: 'CMS Development',
      description:
        'Our custom website development service is tailored to meet the unique needs of each client. We create websites that reflect your brand, engage your audience, and deliver a seamless user experience. From concept to launch, we ensure every detail is crafted to your specifications, resulting in a website that stands out and drives results.'
    },
    {
      image: Application,
      title: 'Web Application Development',
      description:
        'We specialize in crafting innovative and dynamic web applications, uniquely designed to meet our clients specific needs. Our expert team delivers solutions that prioritize functionality, security, and a seamless user experience. From concept to deployment, we ensure every aspect of the application aligns with your business goals for optimal results.'
    },
    {
      image: Maintenance,
      title: 'Website Maintenance and Support',
      description:
        'We offer comprehensive web maintenance and support services to keep your website secure, up-to-date, and running smoothly. Our services include regular updates, performance monitoring, and troubleshooting to prevent issues and ensure optimal functionality. '
    }
  ];

  return (
    <div className="mt-20 px-14 lg:px-20">
      <h1 className="custom-heading-style lg:lg-custom-heading-style">
        Our Web Development Services
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        {data.map((item, index) => (
          <ServiceItem
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
