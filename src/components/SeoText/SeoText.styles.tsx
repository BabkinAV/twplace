import styled from 'styled-components';

export const StyledSeoText = styled.section`
  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 25px;
  & .description__heading {
    font-weight: 500;
    font-size: 28px;
    line-height: 35px;
    color: #000;
    margin-bottom: 15px;
  }

  & .description__paragraph {
    font-weight: 300;
    font-size: 14px;
    line-height: 126.19%;
    &--transparent {
      -webkit-mask-image: linear-gradient(
        to bottom,
        black 50%,
        transparent 100%
      );
      mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  & .description__collapsible {
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }

  & .description__button {
    cursor: pointer;
    background: unset;
    border: unset;

    .description__read-more {
      margin-right: 10px;
			background-color: #000;
      background: linear-gradient(96.78deg, #f64d4d -57.09%, #4d5ef6 101.17%);
      -webkit-background-clip: text;
			-moz-background-clip: text;
      -webkit-text-fill-color: transparent;
			-moz-text-fill-color: transparent;
      background-clip: text;
    }
    .description__down-arrow {
      display: inline-block;
      transition: transform 0.3s ease-in-out;
      &--rotated {
        transform: rotate(-90deg);
      }
    }

    :focus-visible,
    :focus {
      outline: 1px solid blue;
    }

    /* Remove the focus outline */
    :focus:not(:focus-visible) {
      outline: none;
    }
  }
`;
