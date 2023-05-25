import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  let currentPath = "";

  const crumbs = location.pathname
    .split("/")
    .filter((s) => s.length)
    .map((crumb) => {
      currentPath += `/${crumb}`;
      return (
        <div className="crumb" key={currentPath}>
          <Link to={currentPath}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;
