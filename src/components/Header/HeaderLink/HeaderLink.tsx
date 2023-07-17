import React from 'react';
import Image from 'next/image';

import { StyledHeaderLink } from './HeaderLink.styles';

const HeaderLink = ({
  imageSrc,
  altText,
  subTitle,
  badgeCounter,
  badgeCoord,
	onClick
}: {
  imageSrc: string;
  altText: string;
  subTitle: string;
  badgeCounter?: number;
  badgeCoord?: [topOffset: number, rightOffset: number];
	onClick?: ()=>void
}) => {
  return (
    <StyledHeaderLink badgeCoord={badgeCoord} onClick={onClick}>
      <Image src={imageSrc} alt={altText} />
      {badgeCounter && badgeCounter > 0 ? (
        <div className="badgeCounter">
          <span>{badgeCounter}</span>
        </div>
      ) : null}

      <span>{subTitle}</span>
    </StyledHeaderLink>
  );
};

export default HeaderLink;
