import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #f5f4f0; 
`;

const Form = styled.form`
    label,
    input {
        display: block;
        line-height: 2em;
    }
    input {
        width: 100%;
        margin-bottom: 1em;
    }
`;

const UserForm = props => {
    const [values, setValues] = useState();

    const onChange = event => {
        setValues(
            {
                ...values,
                [event.target.name]: event.target.value
            });
    };
    return (
        <Wrapper>
        {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
       <Form 
        onSubmit={(event) => {
            event.preventDefault();
            props.action({
                variables: {
                    ...values
                }
            });
       }}
       >
           {props.formType === 'signup' && (
               <React.Fragment>
                    <label htmlFor="username">Username: </label>
                    <input 
                    required 
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={onChange}/>                  
               </React.Fragment>
           )}
            <label htmlFor="email">Email: </label>
            <input 
                  required 
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={onChange}>
            </input>
            <label htmlFor="password">Password: </label>
            <input 
                  required 
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={onChange}>
            </input>
            <Button type="submit">Submit</Button>
       </Form>
    </Wrapper>

    )
}
export default UserForm;