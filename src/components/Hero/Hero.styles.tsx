import styled from 'styled-components';

export const StyledHero = styled.section`
  display: flex;
  align-items: center;

  justify-content: space-between;

  gap: 20px;

  & .hero__navigation-wrapper {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: #fff;
    max-width: 296px;
    flex: 1 0 auto;

		border-radius: 5px;
		overflow: hidden;
  }

  & .hero__slider-wrapper {
    align-self: stretch;
    flex: 1 1 auto;
		border-radius: 5px;
		overflow: hidden;
  }

	@media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
		flex-direction: column;

		& .hero__navigation-wrapper {
			width: 100%;
			max-width: unset;
		}

		& .hero__slider-wrapper {
			height: 350px;
			width: 100%;
			margin-bottom: 50px;
		}
	}
	@media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
		& .hero__slider-wrapper {
			height: 250px;
		}
	}
	@media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
		& .hero__slider-wrapper {
			height: 200px;
		}
	}
`;
