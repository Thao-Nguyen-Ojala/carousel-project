import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('render Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header title="test1" restaurantsCount={1}></Header>, div);
});

it('matches Header snapshot', () => {
  const testingHeader = renderer
    .create(<Header title="Testing Header" restaurantsCount={3}></Header>)
    .toJSON();
  expect(testingHeader).toMatchSnapshot();
});
