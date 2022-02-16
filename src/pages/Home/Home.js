import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import imgHero from "../../assets/abstract-geometric-computer-wallpaper-white-border-connecting-dots-digital-technology-vector-design.jpg";

export function Home() {
  return (
    <div className={styles.bg}>
      <h1>teste</h1>
      <Link to="/Freelancers">
        <button>Freelancers</button>
      </Link>

      <Link to="/Employers">
        <button>Employers</button>
      </Link>
    </div>
  );
}
