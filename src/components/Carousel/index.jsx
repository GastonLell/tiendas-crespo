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
    <div className="img-container">
      <Slider>
        <Slide className="img-carrousel" index={0}>
          <img src="https://placehold.it/700x450" />
        </Slide>
        <Slide className="img-carrousel" tag="a" index={1}>
          <img src="https://placehold.it/700x450" />
        </Slide>
        <Slide className="img-carrousel" tag="a" index={2}>
          <img src="https://placehold.it/700x450" />
        </Slide>
      </Slider>
      <ButtonBack className="button-carousel back">&#10092;</ButtonBack>
      <ButtonNext className="button-carousel next">&#10093;</ButtonNext>
    </div>
  </CarouselProvider>
);

export default ImageCarousel;
