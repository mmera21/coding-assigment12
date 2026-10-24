import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #333333;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
`;

const StyledInput = styled.input`
  accent-color: #007bff;
  width: 1.1rem;
  height: 1.1rem;
  cursor: inherit;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  disabled = false,
  ...props
}) => {
  return (
    <Wrapper disabled={disabled}>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        data-testid="radio-input"
        {...props}
      />
      {label}
    </Wrapper>
  );
};