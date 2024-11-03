import { BlogContainerItem } from './components/blog-container-item';
import { useBlog } from '../blog-context';

export const BlogContainer = () => {
  const { blogs } = useBlog();

  return (
    <div className="py-20">
      <BlogContainerItem blogs={blogs} />
    </div>
  );
};
