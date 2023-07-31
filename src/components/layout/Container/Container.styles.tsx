import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 100%;
  max-width: 1366px;
  margin-left: auto;
  margin-right: auto;
	padding-left: 43px;
	padding-right: 43px;
	@media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
		padding-left: 10px;
		padding-right: 10px;
	}
	
`;
