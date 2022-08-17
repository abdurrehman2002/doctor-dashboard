import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Logo, SideNav, Header, PageHeading, DataTable } from '../components';


function Appointments(props) {
    return (
        <Container fluid className="p-0 overflow-hide">
            <Row>
                <Col lg={3} className="p-5">
                    <Logo marginBottom="60px" />
                    <PageHeading heading={"MEDICINE"} marginBottom={"20px"} fontSize={"16px"} color={"#b3b3b3"} />
                    <SideNav />
                </Col>



                <Col lg={9} className="p-0">
                    
                    <Header />
          <PageHeading heading={"Appointments"} marginBottom={"40px"} marginLeft={"0px"} fontSize={"40px"} fontWeight={"bold"} />
                    <DataTable />

                </Col>

            </Row>
        </Container>
    );
}

export default Appointments;