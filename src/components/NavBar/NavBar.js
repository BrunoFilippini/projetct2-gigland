import { Link } from "react-router-dom";
import logo from "../../assets/gigland2.png";
import styles from "./NavBar.module.css";


export function NavBar() {
  return (
    <>
      <nav className={styles.navBarAll}>
        <div>
          <Link to="/">
            <img className={styles.logoImg} src={logo} alt="Imagem Logo" />
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
