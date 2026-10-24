import React from 'react';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}