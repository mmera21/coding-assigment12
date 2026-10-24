import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders the card with title and description', () => {
    render(<Card title="Test Card Title" description="Test Card Description" />);
    const titleElement = screen.getByText(/Test Card Title/i);
    const descElement = screen.getByText(/Test Card Description/i);
    
    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
    expect(titleElement).toBeVisible();
  });

  test('checks that opacity changes when disabled', () => {
    render(<Card title="Disabled Card" disabled={true} data-testid="card-container" />);
    const cardElement = screen.getByTestId('card-container');
    
    expect(cardElement).toHaveStyle('opacity: 0.4');
  });
});