import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownMenuProps } from './DropdownMenu.types';

const MenuContainer = styled.div<{ width?: string; disabled?: boolean }>`
  position: relative;
  display: inline-block;
  width: ${(props) => props.width || '200px'};
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const MenuButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const MenuList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 10;
`;

const MenuItem = styled.li`
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  color: #333333;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #f1f3f5;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f1f3f5;
  }
`;

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  buttonLabel = 'Menu',
  items,
  width,
  disabled = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (onClick: () => void) => {
    onClick();
    setIsOpen(false);
  };

  return (
    <MenuContainer width={width} disabled={disabled} data-testid="dropdown-menu-container" {...props}>
      <MenuButton onClick={handleToggle} type="button">
        {buttonLabel} <span>▼</span>
      </MenuButton>
      <MenuList isOpen={isOpen} data-testid="dropdown-menu-list">
        {items.map((item, index) => (
          <MenuItem key={index} onClick={() => handleItemClick(item.onClick)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};