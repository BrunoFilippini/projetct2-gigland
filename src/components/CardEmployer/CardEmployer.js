import axios from "axios";
import { Link } from "react-router-dom";

export function CardEmployer(props) {
    async function handleDelete() {
      try {
        await axios.delete(
          `https://ironrest.herokuapp.com/giglandGigs${props.id}`
        );
        props.setRerender(true);
      } catch (error) {
        console.error(error);
      }
    }

    return (
        <div>
          <img src={props.img} alt={`Foto de ${props.nameProject}`} />
          <div>
            <h5>{props.nameProject}</h5>
            <p>{`'Área': ${props.area}`}</p>
            <p>{`Descrição: ${props.description}`}</p>
            <p>{`Data de início: ${props.startDate}`}</p>
            <p>{`Budget: ${props.budget}`}</p>
            <p>{`Detalhes: ${props.details}`}</p>
            <p>{`Contato: ${props.contact}`}</p>

    
            <Link to={`/editar-card-employer/${props.id}`}>
              <button type="button">Editar Perfil</button>
            </Link>
    
            <button type="button" onClick={handleDelete}>
              Deletar Perfil
            </button>
          </div>
        </div>
    );
}
    