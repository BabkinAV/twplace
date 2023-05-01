import styled from 'styled-components';

export const StyledArrow = styled.div.attrs(({side, inactive} : {side: string, inactive: boolean}) => ({
  className: side + (inactive ? ' inactive' : ''),
}))<{side: string, inactive?: boolean}>`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.palette.backgroundGradient};
  position: relative;
  border-radius: 200px;

  &:hover {
    cursor: pointer;
  }

  &.left {
    margin-left: 5px;
    transform: rotate(180deg);
  }

  &.right {
    margin-right: 5px;
  }
	&.inactive {
		background: linear-gradient(96.78deg, rgba(246, 77, 77, 0.2) -57.09%, rgba(77, 94, 246, 0.2) 101.17%);
	}
  .arrow__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
