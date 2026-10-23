import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ color?: string; size?: string; disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#aaaaaa' : props.color || '#222222')};
  font-size: ${(props) => {
    switch (props.size) {
      case 'small': return '0.875rem';
      case 'large': return '1.25rem';
      default: return '1rem';
    }
  }};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  margin: 0;
`;

export const Text: React.FC<TextProps> = ({
  content = 'Sample paragraph text.',
  color,
  size = 'medium',
  disabled = false,
  ...props
}) => {
  return (
    <StyledText color={color} size={size} disabled={disabled} {...props}>
      {content}
    </StyledText>
  );
};