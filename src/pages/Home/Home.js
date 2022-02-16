import { Link } from "react-router-dom";
import styles from "./Home.module.css";

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
          <h1 className={styles.logoGig}>GigLand</h1>
          <img className={styles.bgImg} src={coverHome} alt="" />
        </div>
      </div>
    </>
  );
}
