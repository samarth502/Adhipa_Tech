import { CaseStudyContentItem } from './components/case-study-content-item.tsx';
import one from '../../../../assets/Resources/CaseStudy/one.jpg';
import two from '../../../../assets/Resources/CaseStudy/two.jpg';
import three from '../../../../assets/Resources/CaseStudy/three.jpg';
import { useCase } from '../case-study-context.tsx';
import { useEffect } from 'react';
export const CaseStudyContent = () => {
  const data = [
    {
      id: 1,
      image: one,
      heading:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium obcaecati ab inventore accusantium. Doloribus.',
      paragraph:
          ` <p class="text-base leading-6 text-gray-600 mb-4">In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to digital marketing. This shift is driven by the fact that more and more consumers are spending significant amounts of time online, from browsing social media and searching on Google to making purchases and engaging with brands directly. For businesses to remain competitive, leveraging the right digital marketing strategies is no longer optional—it’s essential. At Adhipa Technologies, we understand the evolving digital ecosystem and offer a full spectrum of innovative digital marketing solutions designed to help your business grow.</p>

      <h2 class="mt-4 text-2xl font-bold">What is Digital Marketing?</h2>
      <p class="text-base leading-6 text-gray-600 mb-4">Digital marketing refers to all marketing efforts that use the internet or electronic devices to connect with potential customers. This can include various channels such as social media, search engines, email, websites, and mobile apps. Unlike traditional marketing, digital marketing offers the ability to directly engage with a target audience, providing a two-way communication flow that builds trust and fosters customer loyalty.</p>

      <h2 class="mt-4 text-2xl font-bold">Key Benefits of Digital Marketing for Your Business</h2>
      <ol class="list-decimal list-inside ml-6 mb-4">
        <li class="mb-2"><strong>Cost-Effective:</strong> Digital marketing is far more cost-effective than traditional methods such as television or print advertising. With platforms like Google Ads or social media channels, you can set your budget and only pay when users take action, whether that's clicking on an ad or engaging with your content.</li>
        <li class="mb-2"><strong>Measurable Results:</strong> Unlike traditional marketing, where the impact is hard to track, digital marketing offers robust analytics tools that help you measure the effectiveness of your campaigns. You can monitor metrics like impressions, clicks, conversions, and ROI in real-time, allowing you to adjust strategies on the fly for better results.</li>
        <li class="mb-2"><strong>Targeted Marketing:</strong> With digital marketing, you can create highly personalized campaigns targeting specific demographics, geographic locations, interests, and even browsing habits. This level of precision ensures that your marketing efforts are reaching the right audience, at the right time, and in the right place.</li>
        <li class="mb-2"><strong>Enhanced Engagement:</strong> Digital marketing enables businesses to build stronger relationships with their audience through regular engagement. Whether it's replying to comments on social media, answering queries on your website’s live chat, or sending out personalized email campaigns, these interactions contribute to long-term customer loyalty and brand awareness.</li>
      </ol>

      <h2 class="mt-4 text-2xl font-bold">Adhipa Technologies: Your Digital Marketing Partner</h2>
      <p class="text-base leading-6 text-gray-600 mb-4">At Adhipa Technologies, we specialize in providing customized digital marketing solutions that cater to your business needs. Whether you're a small startup looking to create your first online presence or an established company wanting to boost your online visibility, we have the right tools, strategies, and expertise to make it happen.</p>

      <h3 class="mt-4 text-xl font-semibold">Our Services Include:</h3>
      <ul class="list-disc list-inside ml-6 mb-4">
        <li class="mb-2"><strong>Search Engine Optimization (SEO):</strong> We help your website rank higher on search engines, making it easier for potential customers to find you.</li>
        <li class="mb-2"><strong>Social Media Marketing (SMM):</strong> We manage your social media accounts, create engaging content, and implement data-driven strategies to grow your followers and increase engagement.</li>
        <li class="mb-2"><strong>Pay-Per-Click Advertising (PPC):</strong> Our expert team creates high-converting ad campaigns on platforms like Google, Facebook, and Instagram, ensuring maximum return on your investment.</li>
        <li class="mb-2"><strong>Content Marketing:</strong> From blogs and infographics to video marketing, we create content that not only informs but also drives conversions.</li>
        <li class="mb-2"><strong>Email Marketing:</strong> We design email campaigns that nurture leads, build customer relationships, and generate sales.</li>
        <li class="mb-2"><strong>Web Development & Design:</strong> A successful digital marketing strategy requires a strong online presence, and we help you achieve that with cutting-edge web development and design services.</li>
      </ul>

      <h3 class="mt-4 text-xl font-semibold">Why Choose Adhipa Technologies?</h3>
      <ul class="list-disc list-inside ml-6 mb-4">
        <li class="mb-2"><strong>Expertise Across Industries:</strong> Whether it's e-commerce, healthcare, real estate, or IT, our experience across diverse sectors ensures that we tailor strategies specific to your industry.</li>
        <li class="mb-2"><strong>Results-Driven:</strong> Our focus is on delivering measurable results, ensuring that your investment in digital marketing translates into business growth.</li>
        <li class="mb-2"><strong>Customer-Centric Approach:</strong> We work closely with you to understand your business goals, ensuring that every campaign we run aligns with your vision and objectives.</li>
        <li class="mb-2"><strong>Innovation and Creativity:</strong> At Adhipa Technologies, we’re always ahead of the curve, employing the latest trends, tools, and strategies to ensure your brand stands out in the crowded digital space.</li>
      </ul>

      <p class="mt-6 text-base">In conclusion, your online presence is often the first point of contact for potential customers. With the right digital marketing strategies in place, your business can not only survive but thrive in this competitive landscape. At Adhipa Technologies, we are committed to helping businesses unlock their full potential through creative, data-driven, and results-oriented digital marketing solutions.</p>

      <p class="text-base">Are you ready to take your business to the next level? Contact Adhipa Technologies today and let’s craft a digital marketing strategy that drives real, tangible results.</p>
    `
    },
    {
      id: 2,
      image: two,
      heading:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium obcaecati ab inventore accusantium. Doloribus.',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptatibus ad perspiciatis tempore ab eveniet aliquid odit voluptatum dignissimos, quos natus porro cum deserunt vel ratione, maiores ipsa. Amet, hic.'
    },
    {
      id: 3,
      image: three,
      heading:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium obcaecati ab inventore accusantium. Doloribus.',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptatibus ad perspiciatis tempore ab eveniet aliquid odit voluptatum dignissimos, quos natus porro cum deserunt vel ratione, maiores ipsa. Amet, hic.'
    }
  ];
  const { Cases , setCases } = useCase();

  useEffect(() => {
    setCases(data);
  }, [setCases]);

  return (
    <div className="py-20">
      <CaseStudyContentItem posts={Cases} />
    </div>
  );
};
