import { gql } from '@apollo/client';


export const USER_LOGIN = gql`
	query userLogin($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			userId
		}
	}
`