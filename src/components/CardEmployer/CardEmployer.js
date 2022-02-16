import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./CardEmployer.module.css";

export function CardEmployer(props) {
  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/giglandGigs/${props.id}`
      );
      props.setRereder(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.cards}>
      <div className={styles.cardsItem}>
        <div className ={styles.card}>
          <img className = {styles.imgPerson} src={props.img} alt={`Foto de ${props.nameProject}`} />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{props.nameProject}</h2>
            <p className={styles.cardText}>{`Área: ${props.area}`}</p>
            <p className={styles.cardText}>{`Descrição: ${props.description}`}</p>
            <p className={styles.cardText}>{`Data de início: ${props.startDate}`}</p>
            <p className={styles.cardText}>{`Budget: ${props.budget}`}</p>
            <p className={styles.cardText}>{`Detalhes: ${props.details}`}</p>
            <p className={styles.cardText}>{`Contato: ${props.contact}`}</p>

            <Link className={styles.textLink} to={`/edit-employer/${props.id}`}>
              <button type="button" className={styles.btn}>Editar Perfil</button>
            </Link>

            <button type="button" onClick={handleDelete} className={styles.btn}>
              Deletar Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
