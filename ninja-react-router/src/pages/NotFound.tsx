import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Error Page not found</h2>
      <p>
        Go <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
