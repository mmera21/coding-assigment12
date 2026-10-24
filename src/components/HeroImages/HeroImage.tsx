import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.div<{ bgImage?: string; height?: string; overlayColor?: string; disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || '400px'};
  background-image: url(${(props) => props.bgImage || 'https://picsum.photos/1200/600'});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  padding: 2rem;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.overlayColor || 'rgba(0, 0, 0, 0.5)'};
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  bgImage,
  title = 'Welcome to Our Website',
  subtitle = 'Discover amazing features and components.',
  height,
  overlayColor,
  disabled = false,
  ...props
}) => {
  return (
    <StyledHero
      bgImage={bgImage}
      height={height}
      overlayColor={overlayColor}
      disabled={disabled}
      {...props}
    >
      <ContentWrapper>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </ContentWrapper>
    </StyledHero>
  );
};