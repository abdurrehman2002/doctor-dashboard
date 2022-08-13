import { Container, Row, Col, Form } from 'react-bootstrap';

import signuprightImg from '../assets/images/signup-right-side.jpeg';
import Logo from '../components/Logo'
import PageHeading from '../components/PageHeading';
import CSButton from '../components/Button';
import Input from '../components/Input';


const Signup = () => {
    return (
        <Container>

            <Row >
                <Col lg={4}>
                    <Logo />
                    <PageHeading heading={"Sign Up"} />
                    <p>Create your Account</p>
                    <Form>
                        <Input inputType={"text"} placeholder={"Name"} inputFor={"name"} />
                        <Input inputType={"email"} placeholder={"Email"} inputFor={"email"} />
                        <Input inputType={"password"} placeholder={"Password"} inputFor={"password"} />
                        <CSButton title={"signup"} icon={"+"} />
                    </Form>

                </Col>

                <Col lg={8}>
                    <div className='signuprightimg'>
                        <img alt={"doctor preview"} src={signuprightImg} />
                    </div>
                </Col>
            </Row>

        </Container>

    )
}
export default Signup;
