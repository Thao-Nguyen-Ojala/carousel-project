import './HeroCarousel.scss';
import { Blurhash } from 'react-blurhash';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RestaurantSection } from '../../restaurant.module';

const responsive = {
  screen: {
    breakpoint: { max: 9999, min: 0 },
    items: 1,
  },
};

type HeroCarouselPropsType = { restaurantSection: RestaurantSection };

const HeroCarousel = ({ restaurantSection }: HeroCarouselPropsType) => {
  const { restaurants } = restaurantSection;
  return (
    <div className="hero-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        renderButtonGroupOutside={true}
        containerClass="hero-container__carousel"
      >
        {restaurants.map((restaurant, i) => {
          return (
            <div className="hero-container__carousel__hero-wrapper" key={i}>
              <div className="hero-container__carousel__hero-wrapper__img-section">
                <Blurhash
                  className="hero-container__carousel__hero-wrapper__img-section__img"
                  hash={restaurant.blurhash}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                />
              </div>
              <span className="hero-container__carousel__hero-wrapper__text-section">
                {restaurant.name}
              </span>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
