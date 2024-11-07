import React from 'react';
import { NextPage } from 'next';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

const AuthProtected: NextPage = withPageAuthRequired(
    async () => {
        const session = await getSession();
        const user: any = session?.user;

        return (
            <div className='content-layout px-44'>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    },
    {
        returnTo: "/auth-protected"
        //here when a user is not logged in and tries to move to this route then the user may get a login page 
        //when a user gets logged in the user will be directly redirected to this page    
    }
);

export default AuthProtected;
