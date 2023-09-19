import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';

describe('App Component', function () {
  it('should have hello world message', function () {
    let {getByText} = render(<App />);
    expect(getByText('Vite + React')).toMatchInlineSnapshot(`
      <h1>
      Vite + React
      </h1>
    `);
  });
});
