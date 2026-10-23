import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  content?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}