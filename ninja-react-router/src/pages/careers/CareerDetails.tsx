import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const career: any = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias
        aliquid, quasi, nam rem dolor quae blanditiis, debitis eaque quibusdam
        aut at sapiente aliquam a deleniti qui eius commodi fugiat! Amet omnis
        labore, at, praesentium illo iure officiis dicta commodi et ratione nemo
        enim qui nihil voluptatum ipsa dolorem eius culpa quos placeat, eligendi
        aut? Enim facilis ipsa possimus deserunt.
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(`http://localhost:8000/careers/${params.id}`);
  if (!res.ok) throw Error("Could not find that career.");
  return res.json();
};
