import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

import signinrightImg from '../assets/images/SignInRightImg.jpg';
import { CSButton, Switch, PageHeading, Input, Logo } from '../components';

import {
    Link
} from "react-router-dom";
import { SendGetRequest } from '../http';


const Signin = () => {

    const [loginRegistration, setloginRegistration] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        loginRegistration[name] = value
        setloginRegistration({ ...loginRegistration })
    }



    async function signInBtnClick() {
        console.log("Clicked on sign in button")
        console.log("loginRegistration", loginRegistration);
        const response = await SendGetRequest("/users", loginRegistration)
        console.log("response", response)

    }

    return (

        <Container fluid className="p-0 overflow-hide">
            <Row >
                <Col lg={4} className="p-5 left-section">
                    <Logo marginBottom="80px" />

                    <PageHeading heading={"Sign In"} fontSize={"25px"} fontWeight={"bold"} />
                    <p>Sign in to access your Account</p>

                    <Form>
                        <Input inputType={"email"} placeholder={"Email"} inputFor={"email"}
                            padding={"10px 10px 10px 20px"}
                            required={true}
                            onChange={handleInput}
                            name={"email"}
                            InputCSS={"form-input "}
                        />
                        <Input inputType={"password"} placeholder={"Password"} inputFor={"password"}
                            padding={"10px 10px 10px 20px"}
                            required={true}
                            onChange={handleInput}
                            name={"password"}
                            InputCSS={"form-input "}
                        />
                        <Switch text={"Remember me"} defaultValue={true} id={"term-conditions"} />
                        <CSButton onClick={signInBtnClick}
                            style={{ marginBottom: "50px" }} title={"Sign in"} icon={<i class="fa fa-sign-in"></i>} fontSize="15px"
                            color={'#fff'} iconfontSize="20px" titlefontSize="20px" />
                    </Form>

                    <Link style={{ textDecoration: "none", marginBottom: "100px" }} to="/forgot-password">Forgot password?</Link>
                    <div className='Signinlink' style={{ display: "flex" }}>
                        <p>Don't have an account?</p>
                        <Link to="/sign-up">Sign up!</Link>
                    </div>

                    <div className='Signinlink' style={{ display: "flex" }}>
                        <p>Go to Dashboard</p>
                        <Link to="/homePage">HomePage!</Link>
                    </div>

                </Col>

                <Col lg={8} >
                    <div className='signuprightimg'>
                        <img alt={"doctor preview"} src={signinrightImg} />
                    </div>
                </Col>
            </Row>

        </Container>

    )
}
export default Signin;
