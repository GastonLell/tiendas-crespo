// componentes
import { useParams } from "react-router";
import Card from "../../components/Card";
import ItemList from "../../components/ItemList";

const Stores = () => {
  const { category } = useParams();
  console.log(category);
  if (category == "stores") {
    return (
      <ItemList>
        <Card category="stores" nameStore="Kiosco Nico" />
        <Card category="stores" nameStore="Darcy" />
        <Card category="stores" nameStore="Shell" />
        <Card category="stores" nameStore="Para vestir santos" />
        <Card category="stores" nameStore="kiosco papanata" />
        <Card category="stores" nameStore="Fabri Heladería" />
      </ItemList>
    );
  }
  
  if (category === "services") {
    return (
      <ItemList>
        <Card
          category="services"
          nameStore="Joel Derfler"
          nameServicie="Sistemas eléctricos"
        />
        <Card
          category="services"
          nameStore="Gastón Lell"
          nameServicie="Desarrollador Front-end"
        />
      </ItemList>
    );
  }
};

export default Stores;
