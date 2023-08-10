// Inspired by https://namanarora.vercel.app/blogs/next-js-protected-routes
import { ComponentType, useEffect } from 'react';
import Router from 'next/router';
import { useReactiveVar } from '@apollo/client';

import { isUserAuthenticatedVar } from '../../cache/userIsAuthenticated/isUserAuthenticatedVar';
import { useCookies } from 'react-cookie';

function IsAuth<T>(Component: ComponentType<T>) {
  return function InnerAuth(props: T) {
    // make a api call to check if user is authenticated
    // const { data, loading, error } = useMeQuery();
    const isUserAuthenticated = useReactiveVar(isUserAuthenticatedVar);
		const [cookies] = useCookies(['token']);

    // if (loading) {
    // 		return <div>Loading...</div>;
    // }

		useEffect(() => {
			if(!cookies.token) {
					Router.push('/')
			}
		});

		

    return (
      <>
        <Component {...props!} />
      </>
    );
  };
}

export default IsAuth;
