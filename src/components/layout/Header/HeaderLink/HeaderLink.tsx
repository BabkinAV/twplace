import React from 'react';
import Image from 'next/image';

import { StyledHeaderLink } from './HeaderLink.styles';

const HeaderLink = ({
  imageSrc,
  altText,
  subTitle,
  badgeCounter,
	badgeCoord
}: {
  imageSrc: string;
  altText: string;
  subTitle: string;
  badgeCounter?: number;
	badgeCoord?: [topOffset:number, rightOffset:number]
}) => {
  return (
    <StyledHeaderLink badgeCoord={badgeCoord}>
      <Image priority src={imageSrc} alt={altText} />
      {badgeCounter && (
        <div className="badgeCounter">
          <span>{badgeCounter}</span>
        </div>
      )}

      <span>{subTitle}</span>
    </StyledHeaderLink>
  );
};

export default HeaderLink;
