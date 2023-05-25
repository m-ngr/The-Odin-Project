import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData() as any[];

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

export const careersLoader = async () => {
  const res = await fetch("http://localhost:8000/careers");
  if (!res.ok) throw Error("Could not fetch the list of careers");
  return res.json();
};
