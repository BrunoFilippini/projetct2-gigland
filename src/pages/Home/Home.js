import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>LOGO1</h1>
      <Link to="/Freelancers">
        <button>Freelancers</button>
      </Link>

      <Link to="/Employers">
        <button>Employers</button>
      </Link>
    </>
  );
}
