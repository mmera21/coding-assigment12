import React from 'react';

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  disabled?: boolean;
}