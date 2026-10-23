import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Text } from './Text';

describe('Text Component', () => {
  test('renders the text component and checks visibility', () => {
    render(<Text content="Hello World" />);
    const textElement = screen.getByText(/Hello World/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
  });

  test('checks that styles change when disabled', () => {
    const { rerender } = render(<Text content="Sample text" disabled={false} />);
    const textElement = screen.getByText(/Sample text/i);
    
    expect(textElement).toHaveStyle('cursor: default');

    rerender(<Text content="Sample text" disabled={true} />);
    expect(textElement).toHaveStyle('cursor: not-allowed');
    expect(textElement).toHaveStyle('color: #aaaaaa');
  });
});