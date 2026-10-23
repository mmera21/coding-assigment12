import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ color?: string; disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#999999' : props.color || '#333333')};
  font-size: 1rem;
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

export const Label: React.FC<LabelProps> = ({
  text = 'Label Text',
  color,
  disabled = false,
  ...props
}) => {
  return (
    <StyledLabel color={color} disabled={disabled} {...props}>
      {text}
    </StyledLabel>
  );
};