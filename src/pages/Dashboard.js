import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Logo, SideNav, Header, PageHeading, DashboardCard } from '../components';


function Dashboard(props) {
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

                    <Row className='p-4'>
                        <Col lg={3}>
                            <DashboardCard icon={"fa fa-medkit"} cardTiltle={"Appointments"}
                                cardText={"213"} />
                        </Col>
                        <Col lg={3}>
                            <DashboardCard icon={"fa fa-wheelchair"} cardTiltle={"New Patients"}
                                cardText={"104"} />
                        </Col>
                        <Col lg={3}>
                            <DashboardCard icon={"fa fa-hospital-o"} cardTiltle={"Operations"}
                                cardText={"24"} />
                        </Col>
                        <Col lg={3}>
                            <DashboardCard icon={"fa fa-usd"} cardTiltle={"Hospital Earning"}
                                cardText={"$5238"} />
                        </Col>
                    </Row>

                </Col>

            </Row>
        </Container>
    );
}

export default Dashboard;