import React, { useState } from 'react';
import { RestaurantsCarousel, HeroCarousel } from '../../components';
import { RestaurantSection } from '../../restaurant.module';
import * as restaurantsListJson from '../../discovery_page.json';
import './Discovery.scss';

const HomePage: React.FC = () => {
  const [popularRestaurants] = useState<RestaurantSection>(
    restaurantsListJson.sections[0]
  );
  const [newRestaurants] = useState<RestaurantSection>(
    restaurantsListJson.sections[1]
  );
  const [nearbyRestaurants] = useState<RestaurantSection>(
    restaurantsListJson.sections[2]
  );

  return (
    <>
      <div className="container">
        <HeroCarousel restaurantSection={popularRestaurants} />
        <RestaurantsCarousel restaurantSection={newRestaurants} />
        <RestaurantsCarousel restaurantSection={popularRestaurants} />
        <RestaurantsCarousel restaurantSection={nearbyRestaurants} />
      </div>
    </>
  );
};

export default HomePage;
