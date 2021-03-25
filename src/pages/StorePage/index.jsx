import "./styles.css";
import Carousel from "../../components/Carousel";
import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io";
import { useParams } from "react-router";

const StorePage = () => {
  const { name } = useParams();
  return (
    <div className="container-tienda">
      <div className="header-tienda">
        <h2>{name}</h2>
      </div>

      <div className="body-tienda">
        <div className="container-description">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            nemo quos non assumenda inventore officia dignissimos molestias?
            Eveniet eum, repellendus fugiat illum architecto inventore dolorem
            harum animi, modi consequatur cumque!
          </h4>
        </div>

        <div className="container-carousel">
          <h3 className="subtitulos">Promociones</h3>
          {/* ver si se pueden hacer tres carruseles con distintas categorias
              (destacados, promociones, mas vendidos)
          */}
          <Carousel />
        </div>

        <div className="container-contactos">
          <h3 className="subtitulos">Comunicate</h3>
          <div className="redes-container">
            <div className="contacto-grupo">
              <a
                target="__blank"
                href="https://api.whatsapp.com/send?phone=3434680833"
              >
                <IoLogoWhatsapp />
              </a>
              <h4>@instagram</h4>
            </div>
            <div className="contacto-grupo">
              <a target="__blank" href="https://facebook.com">
                <IoLogoFacebook />
              </a>
              <h4>@facebook</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StorePage;
