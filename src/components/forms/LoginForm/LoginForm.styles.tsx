import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  .login-form {

		&__container {
			
			&:not(:first-child) {
				margin-top: 17px;
			}
			
		}
		
		&__button {
			width: 300px;
			height: 50px;
		}
  }
`;
