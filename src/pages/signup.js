import React, {useState, useContext}from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components"
import { FirebaseContext } from '../context/firebase';
import { useNavigate } from 'react-router-dom';

import * as ROUTES from  "../constant/routes"
// import { unstable_HistoryRouter } from "react-router-dom";

const SignUp = () => {
    const navigate  = useNavigate();
    const {firebase} = useContext(FirebaseContext)
    const [firstName, setfirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === "" || emailAddress === "" || firstName === ""
    const handleSubmit = (e) =>{
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress,password)
            .then((result) =>{
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(()=>{
                    navigate(ROUTES.BROWSE)
                })
            })
            .catch((e)=>{
                setfirstName('')
                setEmailAddress('')
                setPassword('')
                setError(e.message)
            })
    }
    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSubmit} method="POST" >
                        <Form.Input 
                            placeholder="First Name"
                            value={firstName}
                            onChange={({target}) => setfirstName(target.value)}
                        />
                        <Form.Input 
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit type="submit" disable={isInvalid}>Sign Up</Form.Submit>
                        <Form.Link to="/signin">Already a user ?</Form.Link>
                  
                    </Form.Base>
                    
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
export default SignUp