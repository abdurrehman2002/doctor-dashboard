import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Logo, SideNav, PageHeading, Header, HomeCard } from '../components';


function HomePage(props) {
  return (
    <Container fluid className="p-0 overflow-hide">
      <Row>
        <Col lg={3} className="p-5 ">
          <Logo marginBottom="60px" />
          <PageHeading heading={"MEDICINE"} marginBottom={"20px"} fontSize={"16px"} color={"#b3b3b3"} />
          <SideNav />
        </Col>



        <Col lg={9} className="p-0">
          <Header />
          <PageHeading heading={"Pricing"} marginLeft={"30px"} fontSize={"45px"} fontWeight={"bold"} />

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

export default HomePage;