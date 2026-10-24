import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ width?: string; disabled?: boolean }>`
  width: ${(props) => props.width || '300px'};
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  transition: transform 0.2s ease;

  &:hover {
    transform: ${(props) => (props.disabled ? 'none' : 'translateY(-4px)')};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #333333;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #666666;
  margin: 0;
  line-height: 1.5;
`;

export const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  description = 'This is a sample description for the card component.',
  imageUrl = 'https://picsum.photos/300/180',
  width,
  disabled = false,
  ...props
}) => {
  return (
    <StyledCard width={width} disabled={disabled} data-testid="card-container" {...props}>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </StyledCard>
  );
};