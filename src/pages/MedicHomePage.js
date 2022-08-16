import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Logo, SideNav, SideNavDropdown, PageHeading, Header, HomeCard } from '../components';


function MedicHomePage(props) {
  return (
    <Container fluid className="p-0 overflow-hide">
      <Row>
        <Col lg={3} className="p-5 overflow-scroll">
          <Logo marginBottom="60px" />
          <PageHeading heading={"MEDICINE"} marginBottom={"20px"} fontSize={"16px"} color={"#b3b3b3"} />
          <SideNav />
          <PageHeading heading={"UI KIT"} fontSize={"18px"} color={"#b3b3b3"} marginTop={"30px"} />
          <SideNavDropdown title={"Components"} />
        </Col>



        <Col lg={9} className="p-0">
          <Header />
          <PageHeading heading={"Pricing"} fontSize={"45px"} fontWeight={"bold"} />

          <Row className='p-4'>
            <Col lg={4}>
              <HomeCard cardTiltle={"Personal"}
                cardAmount={"39"} CardBtnColor={"#b7ce63"} />
            </Col>
            <Col lg={4}>
              <HomeCard cardTiltle={"Developers"}
                cardAmount={"59"} color={"#336cfb"} CardBtnColor={"#336cfb"} />
            </Col>
            <Col lg={4}>
              <HomeCard cardTiltle={"Premium"}
                cardAmount={"99"} CardBtnColor={"#b7ce63"} />

            </Col>

          </Row>


        </Col>

      </Row>
    </Container>
  );
}

export default MedicHomePage;