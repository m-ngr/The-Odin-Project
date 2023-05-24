import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { MouseEvent } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch<BlogType>(
    `http://localhost:8000/blogs/${id}`
  );

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!data) return;
    fetch(`http://localhost:8000/blogs/${data.id}`, {
      method: "DELETE",
    }).finally(() => navigate("/"));
  };

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>No Such Blog</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
