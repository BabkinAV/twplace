import { gql } from '@apollo/client';


export const USER_SIGNUP = gql`
	mutation userSignup($email: String!, $password: String!, $passwordConfirmation: String!) {
		signup(email: $email, password: $password, passwordConfirmation: $passwordConfirmation) {
			token
			userId
		}
	}
`