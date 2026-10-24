import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Table } from './Table';

const headers = ['Name', 'Role'];
const data = [
  ['Micaela', 'Developer'],
  ['Alex', 'Designer'],
];

describe('Table Component', () => {
  test('renders table headers and data correctly', () => {
    render(<Table headers={headers} data={data} />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Micaela')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  test('checks that wrapper opacity changes when disabled', () => {
    render(<Table headers={headers} data={data} disabled={true} />);
    const wrapper = screen.getByTestId('table-wrapper');
    
    expect(wrapper).toHaveStyle('opacity: 0.4');
  });
});