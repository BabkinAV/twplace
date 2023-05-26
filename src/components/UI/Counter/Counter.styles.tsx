import styled from 'styled-components';

export const StyledCounter = styled.div`
  display: flex;

  border: 1px solid transparent;
  background-image: ${props => props.theme.palette.backgroundGradient},
    ${props => props.theme.palette.backgroundGradient};

  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 1px 1000px 1px #fff inset;

  .counter__input {
    width: 43px;
    border: none;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  .counter__btn {
    border-radius: 0;
    background: ${props => props.theme.palette.gradientPink};
    color: inherit;
    border: none;
    padding: 0 6px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    .counter__arrow--up {
      -moz-transform: scale(-1, -1);
      -o-transform: scale(-1, -1);
      -webkit-transform: scale(-1, -1);
      transform: scale(-1, -1);
    }
  }
`;
