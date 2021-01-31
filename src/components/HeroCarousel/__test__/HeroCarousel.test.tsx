import React from 'react';
import ReactDOM from 'react-dom';
import HeroCarousel from '../HeroCarousel';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

const testingObj = {
  title: 'Popular Restaurants',
  restaurants: [
    {
      blurhash: 'UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX',
      launch_date: '2020-04-20',
      location: [24.938082, 60.17626],
      name: 'Sea Chain',
      online: true,
      popularity: 0.956990414084132,
    },
  ],
};

it('render HeroCarousel without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <HeroCarousel restaurantSection={testingObj}></HeroCarousel>,
    div
  );
});

it('matches HeroCarousel snapshot', () => {
  const testingHeroCarousel = renderer
    .create(<HeroCarousel restaurantSection={testingObj}></HeroCarousel>)
    .toJSON();
  expect(testingHeroCarousel).toMatchSnapshot();
});
