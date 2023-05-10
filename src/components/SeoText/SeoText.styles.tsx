import styled from 'styled-components';

export const StyledSeoText = styled.section`
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
		&:not(:last-child) {
			margin-bottom: 10px;
		}
  }
`;
