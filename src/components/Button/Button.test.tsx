import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders the button component and checks visibility', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  test('checks that the background color changes when disabled', () => {
    const { rerender } = render(<Button label="Disabled Button" disabled={false} />);
    const buttonElement = screen.getByText(/Disabled Button/i);
    

    expect(buttonElement).toHaveStyle('cursor: pointer');

   
    rerender(<Button label="Disabled Button" disabled={true} />);
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
    expect(buttonElement).toHaveStyle('background-color: #e0e0e0');
  });
});