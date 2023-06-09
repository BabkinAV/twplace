import styled from 'styled-components';

export const StyledButtonFilled = styled.button`
  /* min-height: 32px; */
  border: 0;
  width: min-content;
	height: min-content;
  background: ${props => props.theme.palette.gradients.backgroundGradient};
  color: #fff;
  cursor: pointer;
  position: relative;
	text-align: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &:hover:after {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:active:after {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:focus-visible,
  :focus {
    outline: 1px solid red;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
