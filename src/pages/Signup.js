import { Container, Row, Col, Form } from 'react-bootstrap';

import signuprightImg from '../assets/images/signup-right-side.jpeg';
import { CSButton, Switch, PageHeading, Input, Logo } from '../components';

import {
    Link
} from "react-router-dom";


const Signup = () => {
    return (

        <Container fluid className="p-0 overflow-hide">

            <Row >
                <Col lg={4} className="p-5 left-section">
                    <Logo marginBottom="80px" />

                    <PageHeading heading={"Sign Up"} />
                    <p>Create your Account</p>
                    <Form>
                        <Input inputType={"text"} placeholder={"Name"} inputFor={"name"} />
                        <Input inputType={"email"} placeholder={"Email"} inputFor={"email"} />
                        <Input inputType={"password"} placeholder={"Password"} inputFor={"password"} />
                        <Switch text={"I agree to the Terms and Privacy"} defaultValue={true} id={"term-conditions"} />
                        <CSButton style={{ marginBottom: "50px" }} title={"signup"} icon={"+"} fontSize="15px" iconfontSize="20px" titlefontSize="20px" />
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
