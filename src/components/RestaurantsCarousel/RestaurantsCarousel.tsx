import React from 'react';
import './RestaurantsCarousel.scss';
import { Header, VenueBanner } from '..';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RestaurantSection } from '../../restaurant.module';

const responsive = {
  desktop: {
    breakpoint: { max: 9999, min: 959 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 959, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

type RestaurantsCarouselPropsType = { restaurantSection: RestaurantSection };

const RestaurantsCarousel = ({
  restaurantSection,
}: RestaurantsCarouselPropsType) => {
  const { title, restaurants } = restaurantSection;
  return (
    <div className="carousel-container">
      <Header title={title} restaurantsCount={restaurants.length} />
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
