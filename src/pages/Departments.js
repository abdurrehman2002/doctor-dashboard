import { Container, Row, Col } from 'react-bootstrap';
import { Logo, SideNav, Header, PageHeading } from '../components';




function Departments() {

    return (
        <Container fluid className="p-0 overflow-hide">
            <Row>
                <Col lg={3} className="p-5">
                    <Logo marginBottom="60px" />
                    <PageHeading heading={"MEDICINE"} marginBottom={"20px"}
                        fontSize={"16px"} color={"#b3b3b3"} />
                    <SideNav />
                </Col>



                <Col lg={9} className="p-0">
                    <Header />
                    <PageHeading heading={"Departments"} marginBottom={"40px"}
                        marginLeft={"17px"} fontSize={"40px"} fontWeight={"bold"} />

                </Col>
            </Row>
        </Container>
    );
}

export default Departments;