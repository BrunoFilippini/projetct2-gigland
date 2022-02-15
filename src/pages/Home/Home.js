import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles.bg}>
        <h1>LOGO</h1>
        <Link to="/Freelancers">
          <button>Freelancers</button>
        </Link>

        <Link to="/Employers">
          <button>Employers</button>
        </Link>
      </div>
    </>
  );
}
