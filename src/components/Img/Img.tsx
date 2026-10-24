import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ width?: string; height?: string; borderRadius?: string; disabled?: boolean }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  object-fit: cover;
`;

export const Img: React.FC<ImgProps> = ({
  src = 'https://via.placeholder.com/150',
  alt = 'Placeholder image',
  width,
  height,
  borderRadius,
  disabled = false,
  ...props
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      borderRadius={borderRadius}
      disabled={disabled}
      {...props}
    />
  );
};