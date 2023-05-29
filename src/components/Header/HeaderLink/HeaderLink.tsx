import React from 'react';
import Image from 'next/image';

import { StyledHeaderLink } from './HeaderLink.styles';

const HeaderLink = ({
  imageSrc,
  altText,
  subTitle,
  badgeCounter,
  badgeCoord,
}: {
  imageSrc: string;
  altText: string;
  subTitle: string;
  badgeCounter?: number;
  badgeCoord?: [topOffset: number, rightOffset: number];
}) => {
  return (
    <StyledHeaderLink badgeCoord={badgeCoord}>
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
