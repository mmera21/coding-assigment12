import React from 'react';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  width?: string;
  disabled?: boolean;
}