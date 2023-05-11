import styled from 'styled-components';



export const StyledFooter = styled.footer`
	background: ${props => props.theme.palette.backgroundGradient};
	min-height: 300px;
	color: #fff;
	padding-top: 40px;
	padding-bottom: 40px;

	& .footer__content {
		display: flex;

		.footer__links {
			border: 1px solid green;
			flex-grow: 1;
		}

		.footer__form {
			border: 1px solid red;
			min-width:  400px;
		}
		
	}

	

	
`