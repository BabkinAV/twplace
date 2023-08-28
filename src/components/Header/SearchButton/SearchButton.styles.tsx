import styled from 'styled-components';

export const StyledSearchButton = styled.button`
  border: #fff;
  color: #000;
  /* background: linear-gradient(
    211.73deg,
    rgba(52, 85, 216, 0.1) -46.71%,
    rgba(255, 67, 67, 0.1) 121.33%
  ); */

  font-size: 16px;
  cursor: pointer;

  -webkit-transition: all 1s ease-out;
  -moz-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  transition: all 1s ease-out;

  background: ${props => props.theme.palette.gradients.gradientPink};
  /* background: red; */
  -webkit-transition: background 0.5s ease-out;
  -moz-transition: background 0.5s ease-out;
  -o-transition: background 0.5s ease-out;
  transition: background 0.5s ease-out;
	border-radius: 5px;

  &:hover {
    background: #dba0e2;
  }
`;
