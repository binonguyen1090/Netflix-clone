import React, {useState, useContext}from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components"
import { FirebaseContext } from '../context/firebase';
import { useNavigate } from 'react-router-dom';

import * as ROUTES from  "../constant/routes"
// import { unstable_HistoryRouter } from "react-router-dom";

const SignIn = () => {
    const navigate  = useNavigate();
    const {firebase} = useContext(FirebaseContext)
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === "" || emailAddress === ""
    const handleSubmit = (e) =>{
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress,password)
            .then(() =>{
                navigate(ROUTES.BROWSE)
            })
            .catch((e)=>{
                setEmailAddress('')
                setPassword('')
                setError(e.message)
            })
    }
    const handleDemo = (e) =>{
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword("demo@gmail.com","123123")
            .then(() =>{
                navigate(ROUTES.BROWSE)
            })
            .catch((e)=>{
                setEmailAddress('')
                setPassword('')
                setError(e.message)
            })
    }
    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSubmit} method="POST" >
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
                        <Form.Submit type="submit" disable={isInvalid}>Sign In</Form.Submit>
                        <Form.Demo onClick={handleDemo}>Demo</Form.Demo>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign Up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. Learn More
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
export default SignIn