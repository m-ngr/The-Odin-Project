import { Link } from "react-router-dom";

// declare this type across the project
declare global {
  type BlogType = {
    readonly id: number;
    title: string;
    body: string;
    author: string;
  };

  type BlogListProps = {
    title: string;
    blogs: BlogType[];
  };
}

const BlogList = ({ blogs, title }: BlogListProps) => {
  return (
    <div className="blog-list">
      <h2> {title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
