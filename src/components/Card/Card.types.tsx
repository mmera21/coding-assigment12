import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  imageUrl?: string;
  width?: string;
  disabled?: boolean;
}