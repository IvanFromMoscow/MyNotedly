import { ValuesOfCorrectType } from 'graphql/validation/rules/ValuesOfCorrectType';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import UseForm from '../components/UseForm';



const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;

const SignUp = props => {
    useEffect(() => {
        document.title = "Sign up - Notedly";
    })

    const client = useApolloClient();
    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            localStorage.setItem('token', data.signUp);
            client.writeData({ data: { isLoggedIn: true } });
            props.history.push('/');
        }
    });
    return (
        <>
            <UseForm action={signUp} formType="signup" />
            { loading && <p>Loading ...</p> }
            { error && <p>Error creating an account! </p>}
        </>      
    );
}

export default SignUp;