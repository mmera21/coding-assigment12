import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || '#007bff')};
  color: ${(props) => (props.disabled ? '#999999' : '#ffffff')};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1.0)};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (!props.disabled && props.backgroundColor ? props.backgroundColor : '#0056b3')};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  backgroundColor,
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </StyledButton>
  );
};