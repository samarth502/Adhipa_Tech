import React from 'react';
import { useNavigate } from 'react-router-dom';
interface Post {
  id: number;
  image: string;
  heading: string;
  paragraph: string;
  author: string;
  date: string;
}

interface IProps {
  blogs: Post[];
}

export const BlogContainerItem: React.FC<IProps> = ({ blogs }) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/resources/blogs/blog-detail/${id}`);
  };
  return (
    <div className="h-auto flex font-poppins flex-col justify-center items-center">
      {blogs.map((post) => (
        <div
          key={post.id}
          className="flex flex-col shadow-gray-600 shadow-lg md:flex-row h-auto md:h-[386px] relative bg-primary text-white my-8 rounded-lg w-3/4 cursor-pointer"
          onClick={() => handleClick(post.id)}
        >
          <div className="w-full md:w-2/5 h-full flex-shrink-0">
            <img
              src={post.image}
              alt={post.heading}
              className="w-full h-full rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="flex flex-col font- lg:mt-14 w-full lg:w-3/5 px-4 py-6 lg:py-0 gap-4">
            <h2 className="text-xl font-normal  mb-2">{post.heading}</h2>
            <p className="mb-4 line-clamp-6 text-justify">{post.paragraph}</p>
            <div className="font-lato text-sm">
              <span>By {post.author}</span> | <span>{post.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
