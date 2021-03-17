import "./styles.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={0.33}
    totalSlides={3}
  >
    <Slider>
      <Slide className="img-carrousel" index={0}>
        <img src="https://via.placeholder.com/500/0000FF/808080" />
      </Slide>
      <Slide className="img-carrousel" tag="a" index={1}>
        <img src="https://via.placeholder.com/500/FF0000/FFFFFF" />
      </Slide>
      <Slide className="img-carrousel" tag="a" index={2}>
        <img src="https://via.placeholder.com/500/0000FF/808080" />
      </Slide>
    </Slider>
    
    <ButtonBack>Anterior</ButtonBack>
    <ButtonNext>Siguiente</ButtonNext>
  </CarouselProvider>
);

export default ImageCarousel;
