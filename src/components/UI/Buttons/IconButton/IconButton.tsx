import React from 'react';
import { StyledIconButton } from './IconButton.styles';
import Image from 'next/image';

const IconButton = ({
  onClick,
	title,
	imageSrc
}: {
  onClick?: () => void;
  imageSrc: string;
  title: string;
}) => {
  return (
    <StyledIconButton onClick={onClick}>
      <Image src={imageSrc} alt={`${title} Icon`} />
    </StyledIconButton>
  );
};

export default IconButton;
