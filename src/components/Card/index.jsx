import "./styles.css";
import { Link } from "react-router-dom";

const Card = ({ category, nameStore, nameServicie }) => {

  return (

    <Link to={`/${category}/${nameStore}`} className="card-store">
      
      <div className="container-card">
        <div className="container-img"></div>
        <h2>{nameStore}</h2>
        <h3>{nameServicie}</h3>
      </div>

    </Link>
  );
};

export default Card;
