import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantsCarousel from '../RestaurantsCarousel';
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

const testingObjs2 = {
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
    {
      blurhash: 'UKNaZ$xnRXaQO5WEt2f7DfRpo?k8MptKV}ou',
      launch_date: '2020-03-14',
      location: [24.924752, 60.179213],
      name: 'Charming Pepper Emporium',
      online: true,
      popularity: 0.741748846018373,
    },
    {
      blurhash: 'ULFgVE}sE3bvGNORnUj=A1JCoaniMUj0tMS5',
      launch_date: '2020-09-24',
      location: [24.936465, 60.178633],
      name: 'Loving Meat Basket',
      online: true,
      popularity: 0.7400471016913404,
    },
    {
      blurhash: 'ULDK46wNI@jJ15NuxDbF0Ys+W.oc?8n+RoWF',
      launch_date: '2020-03-06',
      location: [24.943776, 60.153804],
      name: 'Vegetable Factory',
      online: true,
      popularity: 0.7332623605450638,
    },
    {
      blurhash: 'UQCBXU,@JQn,${xEWXWo31OTwzW-N4Ncs+sV',
      launch_date: '2020-01-12',
      location: [24.925688, 60.178389],
      name: 'Cucumber Hotel',
      online: true,
      popularity: 0.6259073873586668,
    },
  ],
};

it('render RestaurantsCarousel without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RestaurantsCarousel restaurantSection={testingObj}></RestaurantsCarousel>,
    div
  );
});

it('render RestaurantsCarousel a restaurant array', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RestaurantsCarousel
      restaurantSection={testingObjs2}
    ></RestaurantsCarousel>,
    div
  );
});

it('matches RestaurantsCarousel snapshot', () => {
  const testingRestaurantsCarousel = renderer
    .create(
      <RestaurantsCarousel restaurantSection={testingObj}></RestaurantsCarousel>
    )
    .toJSON();
  expect(testingRestaurantsCarousel).toMatchSnapshot();
});
