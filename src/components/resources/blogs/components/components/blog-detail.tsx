import { useParams } from 'react-router-dom';
import { useBlog } from '../../blog-context';
import { BlogItem } from './blog-item';

export const BlogDetail = () => {
  const { id } = useParams();
  const { blogs } = useBlog();
  const blogId = parseInt(id || '0', 10);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <img
        src={blog.image}
        alt={blog.heading}
        className="w-full h-[60vh] object-cover z-0"
      />
      <div className="py-20 px-14 md:px-20">
        <div className="px-6 py-4 flex flex-col">
          <h2 className="text-[24px] lg:text-[40px] font-lato font-regular mb-4">
            {blog.heading}
          </h2>
          <div className="text-[20px] font-poppins font-regular">
            <span>By {blog.author}</span> | <span>{blog.date}</span>
          </div>
          <div
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: blog.paragraph }}
          />
        </div>

        <div className="mt-10 mx-auto max-w-[95%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((item, index) => (
            <BlogItem
              key={index}
              image={item.image}
              title={item.heading}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
