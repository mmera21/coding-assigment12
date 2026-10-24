import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ width?: string; disabled?: boolean }>`
  width: ${(props) => props.width || '100%'};
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #ffffff;
  color: #333333;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${(props) => (props.disabled ? '#ccc' : '#007bff')};
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select an option',
  value,
  onChange,
  width,
  disabled = false,
  ...props
}) => {
  return (
    <StyledSelect
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      width={width}
      disabled={disabled}
      data-testid="dropdown-select"
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};