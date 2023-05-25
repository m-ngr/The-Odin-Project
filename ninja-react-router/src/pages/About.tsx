import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  // memic user login/logout
  const [user, setUser] = useState<string | null>("ninja");

  if (!user) return <Navigate to="/" replace={true} />;

  return (
    <div>
      <h2>About Page</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
        voluptate aut corrupti saepe est. Aliquid nam impedit atque expedita sed
        nesciunt iste aliquam perspiciatis commodi veniam, ad exercitationem.
        Magni, eius.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        quibusdam error veritatis odit ipsa eveniet, rerum consectetur quo.
        Veritatis quas quam, porro itaque repellat aliquid numquam consectetur
        est fugiat rem!
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default About;
