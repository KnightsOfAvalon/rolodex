import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Ava 11/10/2020 - This is a new test that I used

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Getting started with React testing library/i)).toBeInTheDocument();
  });
});

// Ava 11/10/2020 - The code in comments below is the original test

// test('renders learn react link', () => {
//   const { getByText } = render();
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

/* IMPORTANT INFO ABOUT CHANGES TO PACKAGE.JSON FILE */

// Lines 4-11 and 44-62 were added to the package.json file
// in order to configure the test correctly. This configuration
// NEEDS the setupJest.js file (the new configuration file that I wrote)
// in order for the test to operate correctly.
