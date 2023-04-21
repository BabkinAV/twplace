import React from 'react';
import Image from 'next/image';

import { StyledHeaderLink } from './HeaderLink.styles';

const HeaderLink = ({
  imageSrc,
  altText,
  subTitle,
  badgeCounter,
}: {
  imageSrc: string;
  altText: string;
  subTitle: string;
  badgeCounter?: number;
}) => {
  return (
    <StyledHeaderLink>
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
