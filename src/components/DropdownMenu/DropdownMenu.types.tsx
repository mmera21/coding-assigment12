import React from 'react';

export interface DropdownMenuItem {
  label: string;
  onClick: () => void;
}

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonLabel?: string;
  items: DropdownMenuItem[];
  width?: string;
  disabled?: boolean;
}