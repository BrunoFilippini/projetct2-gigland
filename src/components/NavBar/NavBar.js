import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoGigLand from "../../assets/giglandlogo.png";

export function NavBar() {
  const location = useLocation();

  return (
    <>
      <nav
        className={location.pathname === "/" ? styles.noShow : styles.navBarAll}
      >
        <div>
          <Link to="/">
            <img
              className={styles.logoGigLand}
              src={logoGigLand}
              alt="Logo Gigland"
            />
          </Link>
        </div>

        <div className={styles.allbuttonsSpace}>
          <div className={styles.buttonsLinksLists}>
            <Link to="/Freelancers">
              <button>
                <span>Freelancers</span>
              </button>
            </Link>

            <Link to="/Employers">
              <button>
                <span>Employers</span>
              </button>
            </Link>
          </div>

          <h1 className={styles.SearchBar}>searchBar??</h1>

          <div className={styles.buttonsLinksForm}>
            <Link to="/FormFreelancer">
              <button>
                <span>Cadastre seu Perfil</span>
              </button>
            </Link>

            <Link to="/FormEmployer">
              <button>
                <span>Cadastre seu Projeto</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
