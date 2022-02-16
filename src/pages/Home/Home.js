import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import logoGig from "../../assets/gigland2.png";

export function Home() {
  return (
    <div className={styles.bgImg}>
      <div className={styles.logo}>
        <img src={logoGig} className={styles.logoGig} alt="Gig Land Cover" />
      </div>

      <div className={styles.buttons}>
        <Link to="/Freelancers">
          <span className={styles.btnFreelancer}>Freelancers</span>
        </Link>

        <Link to="/Employers">
          <span className={styles.btnEmployer}>Employers</span>
        </Link>
      </div>
    </div>
  );
}
