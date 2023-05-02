import styled from 'styled-components';

interface StyledHeaderLinkProps {
  badgeCoord?: [topOffset: number, rightOffset: number];
}
export const StyledHeaderLink = styled.div<StyledHeaderLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  position: relative;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000;
    text-transform: capitalize;
  }
  & .badgeCounter {
    border-radius: 50%;
    height: 12px;
    width: 12px;
    background-color: red;
    position: absolute;
		top: ${p => p.badgeCoord ? p.badgeCoord[0] : '0'}px;
    right: ${p => p.badgeCoord ? p.badgeCoord[1] : '0'}px;
		
  }
  & .badgeCounter span {
    font-size: 7px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 800;
    line-height: 8px;
    font-style: normal;
  }
`;
