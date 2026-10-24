import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { DropdownMenu } from './DropdownMenu';

const items = [
  { label: 'Action 1', onClick: jest.fn() },
  { label: 'Action 2', onClick: jest.fn() },
];

describe('DropdownMenu Component', () => {
  test('renders button label and toggles menu items on click', () => {
    render(<DropdownMenu buttonLabel="Open Menu" items={items} />);
    
    const button = screen.getByText(/Open Menu/i);
    expect(button).toBeInTheDocument();

    const menuList = screen.getByTestId('dropdown-menu-list');
    expect(menuList).not.toHaveStyle('display: block');

    fireEvent.click(button);
    expect(screen.getByText('Action 1')).toBeInTheDocument();
    expect(screen.getByText('Action 2')).toBeInTheDocument();
  });

  test('checks that opacity changes when disabled', () => {
    render(<DropdownMenu buttonLabel="Menu" items={items} disabled={true} />);
    const container = screen.getByTestId('dropdown-menu-container');
    
    expect(container).toHaveStyle('opacity: 0.4');
  });
});