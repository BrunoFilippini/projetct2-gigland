import { CardFreelancer } from "../../components/CardFreelancer/CardFreelancer";
import { useState, useEffect } from "react";
import axios from "axios";

export function Freelancers() {
  const [freelancer, setFreelancer] = useState([]);

  useEffect(() => {
    async function fetchFreelancer() {
      try {
        const result = await axios.get(
          "https://ironrest.herokuapp.com/giglandFreelas"
        );
        setFreelancer([...result.data]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFreelancer();
  }, []);

  return (
    <>
      <h1>Freelancers</h1>
      {freelancer.map((currentFreelancer) => {
        return (
          <CardFreelancer
            key={currentFreelancer._id}
            id={currentFreelancer._id}
            name={currentFreelancer.name}
            profission={currentFreelancer.profission}
            branding={currentFreelancer.branding}
            education={currentFreelancer.education}
            recentProjects={currentFreelancer.recentProjects}
            skills={currentFreelancer.skills}
            interest={currentFreelancer.interest}
            contact={currentFreelancer.contact}
            img={currentFreelancer.img}
          />
        );
      })}
    </>
  );
}
