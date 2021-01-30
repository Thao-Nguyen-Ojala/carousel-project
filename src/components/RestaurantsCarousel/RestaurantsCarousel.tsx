import React from 'react';
import './RestaurantsCarousel.scss';
import { Header, VenueBanner } from '..';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RestaurantSection } from '../../restaurant.module';

const responsive = {
  desktopAndTablet: {
    breakpoint: { max: 9999, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

type RestaurantsCarouselPropsType = { restaurantSection: RestaurantSection };

const RestaurantsCarousel = ({
  restaurantSection,
}: RestaurantsCarouselPropsType) => {
  const { title, restaurants } = restaurantSection;
  return (
    <div className="carousel-container">
      <Header title={title} />
      <div className="carousel-container__wrapper">
        <Carousel
          responsive={responsive}
          infinite={true}
          renderButtonGroupOutside={true}
          containerClass="carousel-container__showcase"
        >
          {restaurants.map((restaurant, i) => {
            return (
              <VenueBanner
                blurhash={restaurant.blurhash}
                name={restaurant.name}
                online={restaurant.online}
                key={i}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default RestaurantsCarousel;
