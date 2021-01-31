import React from 'react';
import ReactDOM from 'react-dom';
import VenueBanner from '../VenueBanner';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('matches VenueBanner snapshot', () => {
  const testingVenueBanner = renderer
    .create(
      <VenueBanner
        blurhash={'UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX'}
        name={'Sea Chain'}
        online={true}
      ></VenueBanner>
    )
    .toJSON();
  expect(testingVenueBanner).toMatchSnapshot();
});
