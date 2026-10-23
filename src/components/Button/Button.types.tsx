import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}