import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button with label correctly', () => {
    render(<RadioButton label="Choose me" name="test-group" value="1" />);
    const radioElement = screen.getByTestId('radio-input');
    
    expect(radioElement).toBeInTheDocument();
    expect(screen.getByText('Choose me')).toBeInTheDocument();
  });

  test('calls onChange / click event when selected', () => {
    const handleChange = jest.fn();
    render(<RadioButton label="Click me" name="test-group" value="1" onChange={handleChange} />);
    
    const radioElement = screen.getByTestId('radio-input');
    fireEvent.click(radioElement);
    
    expect(handleChange).toHaveBeenCalled();
  });

  test('checks that wrapper opacity changes when disabled', () => {
    render(<RadioButton label="Disabled radio" name="test-group" value="1" disabled={true} />);
    const labelWrapper = screen.getByText('Disabled radio');
    
    expect(labelWrapper).toHaveStyle('opacity: 0.4');
  });
});