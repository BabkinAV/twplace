import styled from 'styled-components';

export const StyledAddToCartButton = styled.button`
  min-height: 32px;
  border: 0;
  width: 100%;
  background: ${props => props.theme.palette.backgroundGradient};
	color: #fff;
	text-transform: capitalize;
`;
