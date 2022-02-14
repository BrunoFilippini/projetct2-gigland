import axios from "axios";
import { Link } from "react-router-dom";

export function CardFreelancer(props) {
  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/giglandFreelas${props.id}`
      );
      props.setRerender(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <img src={props.img} alt={`Foto de ${props.name}`} />
      <div>
        <h5>{props.name}</h5>
        <p>{`Profissão: ${props.profission}`}</p>
        <p>{`Sobre mim: ${props.branding}`}</p>
        <p>{`Formação acadêmica: ${props.education}`}</p>
        <p>{`Projetos que participei: ${props.recentProjects}`}</p>
        <p>{`Minhas habilidades: ${props.skills}`}</p>
        <p>{`Meus interesses: ${props.interest}`}</p>
        <p>{`Contato: ${props.contact}`}</p>

        <Link to={`/editar-pet/${props.id}`}>
          <button type="button">Editar Perfil</button>
        </Link>

        <button type="button" onClick={handleDelete}>
          Deletar Perfil
        </button>
      </div>
    </div>
  );
}
