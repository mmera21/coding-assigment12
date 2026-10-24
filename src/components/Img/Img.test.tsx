import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Img } from './Img';

describe('Img Component', () => {
  test('renders the image component and checks visibility', () => {
    render(<Img src="test.jpg" alt="Test Image" />);
    const imgElement = screen.getByAltText(/Test Image/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute('src', 'test.jpg');
  });

  test('checks that styles and opacity change when disabled', () => {
    render(<Img src="test.jpg" alt="Disabled Image" disabled={true} />);
    const imgElement = screen.getByAltText(/Disabled Image/i);
    
    expect(imgElement).toHaveStyle('opacity: 0.4');
    expect(imgElement).toHaveStyle('cursor: not-allowed');
  });
});