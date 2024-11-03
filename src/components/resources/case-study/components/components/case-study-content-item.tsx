import React from 'react';
import { useNavigate } from 'react-router-dom';
interface Post {
  id: number;
  image: string;
  heading: string;
  paragraph: string;
}

interface IProps {
  posts: Post[];
}

export const CaseStudyContentItem: React.FC<IProps> = ({ posts }) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/resources/case-study/case-study-detail/${id}`);
  };
  return (
    <div className="h-auto  flex font-poppins flex-col justify-center items-center">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col cursor-pointer shadow-gray-600 shadow-lg lg:flex-row h-auto lg:h-[386px] relative bg-primary text-white my-8 rounded-lg w-3/4"
          onClick={() => handleClick(post.id)}
        >
          <div className="w-full h-auto lg:h-full overflow-hidden lg:w-2/5">
            <img
              src={post.image}
              alt={post.heading}
              className="w-full h-full lg:h-full rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="flex  font-poppins flex-col lg:mt-10 w-full lg:w-2/3 px-4 py-6 lg:py-0 gap-9">
            <h2 className="text-lg lg:text-xl font-normal mb-2">
              {post.heading}
            </h2>
            <p className="mb-4 line-clamp-6 text-justify">{post.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
