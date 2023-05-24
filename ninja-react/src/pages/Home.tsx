import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch<BlogType[]>(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {data && <BlogList blogs={data} title="All Blogs" />}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;
