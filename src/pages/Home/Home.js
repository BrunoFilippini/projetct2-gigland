import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import logoGigLand from "../../assets/giglandlogo.png";

import coverHome from "../../assets/coverHome.png";

export function Home() {
  return (
    <>
      <div className={styles.bgColor}>
        <div className={styles.buttons}>
          <Link to="/Freelancers">
            <span className={styles.btnFreelancer}>Freelancers</span>
          </Link>

          <Link to="/Employers">
            <span className={styles.btnEmployer}>Employers</span>
          </Link>
        </div>

        <div className={styles.logoAndimgBg}>
          <img
            className={styles.logoGigLand}
            src={logoGigLand}
            alt="Logo Gigland"
          />
          <img className={styles.bgImg} src={coverHome} alt="" />
        </div>
      </div>
    </>
  );
}
