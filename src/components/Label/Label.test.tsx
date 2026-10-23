import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Label } from './Label';

describe('Label Component', () => {
  test('renders the label component and checks visibility', () => {
    render(<Label text="My Label" />);
    const labelElement = screen.getByText(/My Label/i);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toBeVisible();
  });

  test('checks that styles change when disabled', () => {
    const { rerender } = render(<Label text="Check Label" disabled={false} />);
    const labelElement = screen.getByText(/Check Label/i);
    
    expect(labelElement).toHaveStyle('cursor: default');

    rerender(<Label text="Check Label" disabled={true} />);
    expect(labelElement).toHaveStyle('cursor: not-allowed');
    expect(labelElement).toHaveStyle('color: #999999');
  });
});