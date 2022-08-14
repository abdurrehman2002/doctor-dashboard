import { Container, Row, Col, Form } from 'react-bootstrap';

import signinrightImg from '../assets/images/SignInRightImg.jpg';
import { CSButton, Switch, PageHeading, Input, Logo } from '../components';

import {
    Link
} from "react-router-dom";


const Signin = () => {
    return (

        <Container fluid className="p-0 overflow-hide">

            <Row >
                <Col lg={4} className="p-5 left-section">
                    <Logo marginBottom="80px" />

                    <PageHeading heading={"Sign In"} />
                    <p>Sign in to access your Account</p>
                    <Form>
                        <Input inputType={"email"} placeholder={"Login"} inputFor={"email"} />
                        <Input inputType={"password"} placeholder={"Password"} inputFor={"password"} />
                        <Switch text={"Remember me"} defaultValue={true} id={"term-conditions"} />
                        <CSButton style={{ marginBottom: "50px" }} title={"Sign in"} icon={<i class="fa fa-sign-in"></i>} fontSize="15px" iconfontSize="20px" titlefontSize="20px" />
                    </Form>

                    <Link style={{textDecoration:"none", marginBottom:"100px"}} to="/forgot-password">Forgot password?</Link>
                    <div className='Signinlink' style={{ display: "flex" }}>
                        <p>Don't have an account?</p>
                        <Link to="/sign-up">Sign up!</Link>
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
