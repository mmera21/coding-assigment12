import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  test('renders the hero image with title and subtitle', () => {
    render(<HeroImage title="Test Hero Title" subtitle="Test Hero Subtitle" />);
    const titleElement = screen.getByText(/Test Hero Title/i);
    const subtitleElement = screen.getByText(/Test Hero Subtitle/i);
    
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(titleElement).toBeVisible();
  });

  test('checks that opacity changes when disabled', () => {
    render(<HeroImage title="Disabled Hero" disabled={true} data-testid="hero-container" />);
    const heroElement = screen.getByTestId('hero-container');
    
    expect(heroElement).toHaveStyle('opacity: 0.4');
  });
});