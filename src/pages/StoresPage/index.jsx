import "./styles.css";
import CardStore from "../../components/CardStore";
const StoresPage = () => {
  return (
    <div className="container-tiendas">
      <CardStore nameStore="Kiosco Nico" />
      <CardStore nameStore="Darcy" />
      <CardStore nameStore="Shell" />
      <CardStore nameStore="Para vestir santos" />
      <CardStore nameStore="kiosco papanata" />
      <CardStore nameStore="Fabri Heladería" />
    </div>
  );
};

export default StoresPage;
