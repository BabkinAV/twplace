import styled from 'styled-components';

export const StyledIconButton = styled.button`
	background-color: transparent;
	padding: 6px;
	border: 1px solid ${props => props.theme.palette.colors.red100};
	border-radius: 4px;
	cursor: pointer;
`;