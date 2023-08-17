import styled from 'styled-components';

export const StyledSlider = styled.div`
  height: 100%;
  flex: 1 1 auto;
  overflow: hidden;
  position: relative;

  & .slider__arrows {
    color: black;
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    position: absolute;
    top: 50%;
		transform: translateY(-50%);
    width: 100%;
    z-index: 100;
  }

  & .slide-list {
    display: flex;
    height: 100%;

    width: 100%;

    & .slide {
      flex: 1 0 100%;
      position: relative;
      transition: transform 0.5s ease-in-out;

      & .slide-image {
        display: flex;
        margin: 0 auto;
        max-height: 400px;
        width: 100%;
        height: 100%;
        object-fit: cover;
				object-position: top right;
      }
    }
  }
`;
