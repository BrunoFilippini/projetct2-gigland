import { CardEmployer } from "../../components/CardEmployer/CardEmployer";
import { useState, useEffect } from "react";
import axios from "axios";



export function Employers() {
  const [employer, setEmployer] = useState([]);

  useEffect(() => {
    async function fetchEmployer() {
      try {
        const result = await axios.get(
          "https://ironrest.herokuapp.com/giglandGigs"
        );
        setEmployer([...result.data]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchEmployer();
  }, [])


  return (
    <>
      <h1>Employers</h1>
      {employer.map((currentEmployer) => {
        return (
          <CardEmployer
            key={currentEmployer._id}
            id={currentEmployer._id}
            nameProject={currentEmployer.nameProject}
            area={currentEmployer.area}
            description={currentEmployer.description}
            startDate={currentEmployer.startDate}
            budget={currentEmployer.budget}
            details={currentEmployer.details}
            contact={currentEmployer.contact}
            img={currentEmployer.img}
          />
        );
      })}
    </>
  );
}
