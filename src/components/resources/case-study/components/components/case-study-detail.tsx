import { useParams } from 'react-router-dom';
import { useCase } from '../../case-study-context';
import { CaseStudyItem } from './case-study-item';

export const CaseStudyDetail = () => {
  const { id } = useParams();
  const { Cases } = useCase();
  const caseId = parseInt(id || '0', 10);
  const caseDetails = Cases.find((b) => b.id === caseId);

  if (!caseDetails) {
    return <div>Case study not found!</div>;
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <img
        src={caseDetails.image}
        alt={caseDetails.heading}
        className="w-full h-[60vh] object-cover z-0"
      />
      <div className="py-20 px-14 md:px-20">
        <div className="px-6 py-4 flex flex-col">
          <h2 className="text-[24px] lg:text-[40px] font-lato font-regular mb-4">
            {caseDetails.heading}
          </h2>
          <div
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: caseDetails.paragraph }}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[95%] gap-8">
          {
            Cases.map((item)=>(
              <CaseStudyItem
              paragraph={item.paragraph}
              heading={item.heading}
              image={item.image}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
