import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTableWrapper = styled.div<{ width?: string; disabled?: boolean }>`
  width: ${(props) => props.width || '100%'};
  overflow-x: auto;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: inherit;
  font-size: 0.95rem;
  text-align: left;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  overflow: hidden;
`;

const Th = styled.th`
  background-color: #f8f9fa;
  color: #333333;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-bottom: 2px solid #dee2e6;
`;

const Td = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #dee2e6;
  color: #555555;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #fdfdfe;
  }
  &:hover {
    background-color: #f1f3f5;
  }
`;

export const Table: React.FC<TableProps> = ({
  headers,
  data,
  width,
  disabled = false,
  ...props
}) => {
  return (
    <StyledTableWrapper width={width} disabled={disabled} data-testid="table-wrapper">
      <StyledTable {...props}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};