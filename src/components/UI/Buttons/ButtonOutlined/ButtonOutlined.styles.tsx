import styled from 'styled-components';

export const StyledButtonOutlined = styled.button`
  min-height: 44px;
  color: #000;
  padding: 14px 55px;

  border: solid 2px transparent;
	border-radius: 5px;

  background-image: ${props => props.theme.palette.gradients.backgroundGradient},
    ${props => props.theme.palette.gradients.backgroundGradient};

  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-visible,
  &:active {
    box-shadow: none;
    color: white;
  }
`;
