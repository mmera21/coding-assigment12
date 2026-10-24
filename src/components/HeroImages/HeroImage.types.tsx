import React from 'react';

export interface HeroImageProps extends React.HTMLAttributes<HTMLDivElement> {
  bgImage?: string;
  title?: string;
  subtitle?: string;
  height?: string;
  overlayColor?: string;
  disabled?: boolean;
}