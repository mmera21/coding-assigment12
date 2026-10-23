import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  color?: string;
  disabled?: boolean;
}