import styled from 'styled-components';
import CheckIcon from '../../assets/images/CheckIcon.svg';

export const StyledCheckbox = styled.div`
	line-height: 20px;
  .checkbox__label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;

    .checkbox__input {
      /* Add if not using autoprefixer */
      -webkit-appearance: none;
      /* Remove most all native input styles */
      appearance: none;
      /* For iOS < 15 */
      background-color: transparent;
      /* Not removed via appearance */
      margin: 0 0 0 40px;

      &::before {
        content: '';
        border: 2px solid black;
        border-radius: 4px;
        width: 20px;
        height: 20px;
        position: absolute;
        cursor: pointer;
        top: 0px;
        left: 0px;
      }

      &:checked::before {
        content: url(${CheckIcon.src});
        border: solid 2px transparent;

        background-image: ${props => props.theme.palette.gradients.backgroundGradient},
          ${props => props.theme.palette.gradients.backgroundGradient};

        background-origin: border-box;
        background-clip: content-box, border-box;
        box-shadow: 2px 1000px 1px #fff inset;
        vertical-align: top;
        padding-bottom: 3px;
      }
    }
  }
`;
