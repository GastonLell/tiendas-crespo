import "./styles.css";
import { Link } from "react-router-dom";

const CardStore = ({nameStore}) => {
  return (
    <Link to={`/stores/${nameStore}`} className="card-store">
      <div className="container-card">
        <div className="container-img"></div>
        <h2>{nameStore}</h2>
      </div>
    </Link>
  );
};
export default CardStore;
