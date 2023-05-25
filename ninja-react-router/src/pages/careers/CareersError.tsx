import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
  const error: any = useRouteError();

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="">Back to Careers</Link>
    </div>
  );
};

export default CareersError;
