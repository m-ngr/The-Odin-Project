import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blog = { title, body, author };
    setPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        navigate("/"); //go home
      })
      .finally(() => setPending(false));
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-author">Author:</label>
        <select
          id="new-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="ninja">ninja</option>
        </select>

        <label htmlFor="new-title">Blog title:</label>
        <input
          type="text"
          required
          id="new-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="new-body">Blog body:</label>
        <textarea
          id="new-body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button disabled={pending}>
          {" "}
          {pending ? "Posting..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default Create;
