import React from 'react';
import './HeroCarousel.scss';
import { Blurhash } from 'react-blurhash';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RestaurantSection } from '../../restaurant.module';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
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
        containerClass="hero-carousel"
      >
        {restaurants.map((restaurant, i) => {
          return (
            <div className="hero-wrapper">
              <div className="hero-img-side" key={i}>
                <Blurhash
                  className="hero-img"
                  hash={restaurant.blurhash}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                />
              </div>
              <span className="hero-text-side">{restaurant.name}</span>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
