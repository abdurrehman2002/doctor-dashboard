import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Logo, SideNav, Header, PageHeading, DoctorsCard, AddDoctors } from '../components';
import { SendPostRequest, SendGetRequest } from '../http';
import { useNavigate } from 'react-router-dom';




function Doctors() {
    
    const navigate = useNavigate();
    const viewProfile = (id) => {
        navigate(`/DoctorProfilePage/${id}`);
    }


    const [show, setShow] = useState(false);
    const [doctorData, setDoctorData] = useState([])
    const [addDoctor, setAddDoctor] = useState({
        firstName: "",
        lastName: "",
        specility: "",
        address: "",
        instagramLink: "",
        facebookLink: "",
        twitterLink: ""
    });

    useEffect(() => {
        getDoctors();
    }, [])


    async function addDoctorClick() {
        if (addDoctor.photo === "") {
            alert("Enter photo");
        } if (addDoctor.firstName === "") {
            alert("Enter firstName");
        } if (addDoctor.lastName === "") {
            alert("Enter lastName");
        } if (addDoctor.specility === "") {
            alert("Enter specility");
        } if (addDoctor.address === "") {
            alert("Enter address");
        } if (addDoctor.instagramLink === "") {
            alert("Enter instagramLink");
        } if (addDoctor.facebookLink === "") {
            alert("Enter facebookLink");
        } if (addDoctor.twitterLink === "") {
            alert("Enter twitterLink");
        } else {
            console.log("Clicked on addDoctor button")
            const response = await SendPostRequest("/doctors", addDoctor)
            console.log('addDoctor', response)
            getDoctors();
            setShow(false);
        }
    }

    const getDoctors = async () => {
        const response = await SendGetRequest("/doctors")
        setDoctorData(response.data)
        console.log("response", response)
    }

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
                    <PageHeading heading={"Doctors"} marginBottom={"40px"}
                        marginLeft={"17px"} fontSize={"40px"} fontWeight={"bold"} />

                    <Row className='px-4'>
                        {
                            doctorData && doctorData.map((item, ind) => {
                                return (
                                    <Col lg={4}>
                                        <DoctorsCard getDoctors={getDoctors}
                                            setDoctorData={setDoctorData}
                                            doctorData={item} index={ind}
                                            viewProfile={viewProfile}
                                        />

                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div className='AddDoctorButtonWrapper'>
                        <Button onClick={() => setShow(true)} className="AddDoctorButton">
                            <i class="fa fa-address-card-o"></i>
                        </Button>
                    </div>

                    <AddDoctors show={show} setShow={setShow}
                        addDoctor={addDoctor} setAddDoctor={setAddDoctor} addDoctorClick={addDoctorClick} />

                </Col>
            </Row>
        </Container>
    );
}
export default Doctors;