import styled from 'styled-components';

export const StyledButtonOutlined = styled.button`
  min-height: 44px;
  color: #000;

  border: solid 3px transparent;

  background-image: ${props => props.theme.palette.backgroundGradient},
    ${props => props.theme.palette.backgroundGradient};

  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;

  
  &:hover {
    box-shadow: none;
    color: white;
  } 
`;
