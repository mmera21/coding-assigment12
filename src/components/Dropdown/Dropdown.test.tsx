import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'Test 1', value: '1' },
  { label: 'Test 2', value: '2' },
];

describe('Dropdown Component', () => {
  test('renders options correctly', () => {
    render(<Dropdown options={options} placeholder="Select test" />);
    const selectElement = screen.getByTestId('dropdown-select');
    
    expect(selectElement).toBeInTheDocument();
    expect(screen.getByText('Test 1')).toBeInTheDocument();
    expect(screen.getByText('Test 2')).toBeInTheDocument();
  });

  test('calls onChange when an option is selected', () => {
    const handleChange = jest.fn();
    render(<Dropdown options={options} onChange={handleChange} />);
    
    const selectElement = screen.getByTestId('dropdown-select');
    fireEvent.change(selectElement, { target: { value: '2' } });
    
    expect(handleChange).toHaveBeenCalledWith('2');
  });

  test('checks that opacity changes when disabled', () => {
    render(<Dropdown options={options} disabled={true} />);
    const selectElement = screen.getByTestId('dropdown-select');
    
    expect(selectElement).toHaveStyle('opacity: 0.4');
  });
});