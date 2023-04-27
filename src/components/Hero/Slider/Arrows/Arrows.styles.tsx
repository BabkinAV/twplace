import styled from 'styled-components';

import ArrowIcon from '../../../assets/images/arrow.png'

export const StyledArrows = styled.div`
  color: white;
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  height: 100%;
  position: absolute;
  top: 30%;
  width: 100%;
  z-index: 1;

  & .arrow {
    height: 30px;
    width: 30px;

    &:hover {
      cursor: pointer;
    }

    &.left {
      background-image: url(${ArrowIcon.src});
      background-repeat: no-repeat;
      background-size: contain;
      margin-left: 5px;
      transform: rotate(180deg);
    }

    &.right {
      background-image: url(${ArrowIcon.src});
      background-repeat: no-repeat;
      background-size: contain;
      margin-right: 5px;
    }
  }
`;
