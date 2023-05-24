import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Error 404: Page not found</h2>
      <Link to="/">go to Home page</Link>
    </div>
  );
};

export default NotFound;
