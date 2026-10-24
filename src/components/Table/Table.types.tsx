import React from 'react';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  headers: string[];
  data: (string | number)[][];
  width?: string;
  disabled?: boolean;
}