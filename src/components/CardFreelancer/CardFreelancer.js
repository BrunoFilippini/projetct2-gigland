import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./CardFreelancer.module.css";

export function CardFreelancer(props) {
  const [expanded, setExpanded] = useState(false);
  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/giglandFreelas/${props.id}`
      );
      props.setRerender(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <div
      className={`${styles.profile} ${
        expanded ? styles["profile--expanded"] : styles["profile--unexpanded"]
      }`}
      onClick={() => {
        setExpanded((prevState) => !prevState);
      }}
    >
      <div className={styles.profileBanner}></div>
      <div>
        <div className={styles.profilePic}>
          <img
            className={styles.imgPerson}
            src={props.img}
            alt={`Foto de ${props.name}`}
          />
        </div>
        <div className={styles.profileInfo}>
          <span className={styles.profileInfoDisplay}>
            {props.name}
          </span>
          <span className={styles.profileInfoUsername}>{props.profession}</span>
        </div>
      </div>
      <div className={styles.profileData}>
        <span className={styles.profileDataFollowing}>
          <p className={styles.profileDataDescription}>
            <b>Descrição: </b>
            {props.branding}
          </p>
          <p className={styles.profileDataStartDate}>
            <b>Formação: </b>
            {props.education}
          </p>
          <p className={styles.profileDataBudget}>
            <b>Projetos recentes: </b> ${props.recentProjects}
          </p>
          <p className={styles.profileDataStartDetails}>
            <b>Habilidades: </b>
            {props.skills}
          </p>
          <p className={styles.profileDataStartDetails}>
            <b>Interesses: </b>
            {props.interest}
          </p>
          <p className={styles.profileDataContact}>
            <b>Contato: </b> ${props.contact}
          </p>
          <Link className={styles.textLink} to={`/edit-employer/${props.id}`}>
            <button type="button" className={styles.btn}>
              Editar Perfil
            </button>
          </Link>

          <button type="button" onClick={handleDelete} className={styles.btn}>
            Deletar Perfil
          </button>
        </span>
      </div>
    </div>
  </>
    // <div>
    //   <img src={props.img} alt={`Foto de ${props.name}`} />
    //   <div>
    //     <h5>{props.name}</h5>
    //     <p>{`Profissão: ${props.profession}`}</p>
    //     <p>{`Sobre mim: ${props.branding}`}</p>
    //     <p>{`Formação acadêmica: ${props.education}`}</p>
    //     <p>{`Projetos que participei: ${props.recentProjects}`}</p>
    //     <p>{`Minhas habilidades: ${props.skills}`}</p>
    //     <p>{`Meus interesses: ${props.interest}`}</p>
    //     <p>{`Contato: ${props.contact}`}</p>

    //     <Link to={`/edit-freelancer/${props.id}`}>
    //       <button type="button">Editar Perfil</button>
    //     </Link>

    //     <button type="button" onClick={handleDelete}>
    //       Deletar Perfil
    //     </button>
    //   </div>
    // </div>
  );
}
