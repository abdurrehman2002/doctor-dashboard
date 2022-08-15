import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

import signuprightImg from '../assets/images/signup-right-side.jpeg';
import { CSButton, Switch, PageHeading, Input, Logo } from '../components';
import { SendPostRequest } from '../http';

import {
    Link
} from "react-router-dom";


const Signup = () => {

    const [userRegistration, setUserRegistration] = useState({
        name: "",
        email: "",
        password: "",
        term_condition: false,
    });

    const handleNameInput = (e) => {
        const value = e.target.value;

        setUserRegistration({ ...userRegistration, name : value })
    }
    
    const handleEmailInput = (e) => {
        const value = e.target.value;

        setUserRegistration({ ...userRegistration, email : value })
    }
    const handlePasswordInput = (e) => {
        const value = e.target.value;

        setUserRegistration({ ...userRegistration, password : value })
    }
    console.log("name", userRegistration.name);
    console.log("email", userRegistration.email);
    console.log("password", userRegistration.password);


    const handleSwitch = (e) =>{
        const value = e.target.checked
        setUserRegistration({ ...userRegistration, term_condition : value })
        
    }


    async function signUpBtnClick() {
        console.log("Clicked on sign up button")
        const response = await SendPostRequest("/users", userRegistration)
        console.log('hhelo', response)
    }


    return (

        <Container fluid className="p-0 overflow-hide">

            <Row >
                <Col lg={4} className="p-5 left-section">
                    <Logo marginBottom="80px" />

                    <PageHeading heading={"Sign Up"} />
                    <p>Create your Account</p>

                    <Form onClick={signUpBtnClick}>
                        <Input inputType={"text"} placeholder={"Name"} inputFor={"name"}

                            handleInput={handleNameInput}
                        />
                        <Input inputType={"email"} placeholder={"Email"} inputFor={"email"}
                            handleInput={handleEmailInput}
                        />
                        <Input inputType={"password"} placeholder={"Password"} inputFor={"password"}
                            handleInput={handlePasswordInput}
                        />
                        <Switch text={"I agree to the Terms and Privacy"} defaultValue={false} id={"term-conditions"} handleSwitch={handleSwitch} />
                        <CSButton
                            style={{ marginBottom: "50px" }} title={"signup"} icon={"+"}
                            fontSize="15px" iconfontSize="20px" titlefontSize="20px"
                        
                        />
                    </Form>

                    <div className='Signinlink' style={{ display: "flex" }}>
                        <p>Have an account?</p>
                        <Link to="/sign-in">Sign in!</Link>
                    </div>

                </Col>

                <Col lg={8} >
                    <div className='signuprightimg'>
                        <img alt={"doctor preview"} src={signuprightImg} />
                    </div>
                </Col>
            </Row>

        </Container>

    )
}
export default Signup;
