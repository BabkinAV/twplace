import Image from 'next/image';
import { StyledIconButton } from './IconButton.styles';

const IconButton = ({
  onClick,
  title,
  imageSrc,
	borderColor
}: {
  onClick?: () => void;
  imageSrc: string;
  title: string;
  borderColor?: string;
}) => {
  return (
    <StyledIconButton
      onClick={onClick}
      borderColor={borderColor}
    >
      <Image src={imageSrc} alt={`${title} Icon`} />
    </StyledIconButton>
  );
};

export default IconButton;
