import { Container, Row, Col, Form, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { Logo, SideNav, Header, PageHeading, Input } from '../components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SendGetRequest, SendPutRequest } from '../http';



import DoctorProfileImg from '../assets/images/addDoctorImg.jpg';
function DoctorProfilePage({ setShow }) {
    let params = useParams();
    console.log(params.id)


    const [addDoctor, setAddDoctor] = useState({
        id: "",
        firstName: "",
        lastName: "",
        specility: "",
        address: "",
        instagramLink: "",
        facebookLink: "",
        twitterLink: ""
    });


    useEffect(() => {
        if (params.id !== "") {
            getDoctors();
        }
    }, [params.id])


    const getDoctors = async () => {
        const response = await SendGetRequest(`/doctors/${params.id}`)
        setAddDoctor({ ...response.data })
        console.log("response", response)
    }


    const saveChanges = async () => {
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
            const response = await SendPutRequest(`/doctors/${addDoctor.id}`, addDoctor)
            console.log(response)
            getDoctors();
            setShow(false)
        }
    }

    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        addDoctor[name] = value
        setAddDoctor({ ...addDoctor })
        console.log('addDoctordata', addDoctor)
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
                    <PageHeading heading={"Doctor Profile Page"} marginBottom={"40px"}
                        marginLeft={"17px"} fontSize={"40px"} fontWeight={"bold"} />

                    <Row>
                        <Col className='p-4' lg={6}>
                            <div className='SocialNetworks'><h5>Photo</h5></div>
                            <div className='doctorProfileImage'>

                                <img alt='' src={DoctorProfileImg} />
                                <div class="variants">
                                    <div class='file'>
                                        <label for='input-file'>
                                            Select a file
                                            <i class="fa fa-user "></i>
                                        </label>
                                        <input id='input-file' type='file' name={"image"}
                                        />
                                    </div>
                                </div>
                            </div>

                            <Form>
                                <div className='SocialNetworks'><h5>First Name</h5></div>

                                <Input inputType={"text"} placeholder={"First name"} inputFor={"firstName"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"addDoctor-Input"}
                                    onChange={handleInput}
                                    value={addDoctor.firstName}
                                    name={"firstName"}

                                />
                                <div className='SocialNetworks'><h5>Last Name</h5></div>
                                <Input inputType={"text"} placeholder={"Last name"} inputFor={"lastName"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"addDoctor-Input"}
                                    onChange={handleInput}
                                    name={"lastName"}
                                    value={addDoctor.lastName}
                                />
                                <Row>
                                    <Col lg={6}>
                                        <div className='SocialNetworks'><h5>specility</h5></div>
                                        <Input inputType={"text"} placeholder={"Speciality"} inputFor={"specility"}
                                            padding={"10px 10px 10px 20px"}
                                            InputCSS={"addDoctor-speciality"}
                                            onChange={handleInput}
                                            name={"specility"}
                                            value={addDoctor.specility}

                                        />
                                    </Col>
                                    <Col lg={6}>
                                        <div>
                                            <div className='SocialNetworks'><h5>Gender</h5></div>
                                            <DropdownButton className='addDoctor-Gender' title="Gender">
                                                <Dropdown.Item href="#">Male</Dropdown.Item>
                                                <Dropdown.Item href="#">Female</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='SocialNetworks'><h5>Address</h5></div>
                                <Input inputType={"text"} placeholder={"Address"} inputFor={"address"}
                                    padding={"10px 10px 50px 20px"}
                                    InputCSS={"addDoctor-Input"}
                                    onChange={handleInput}
                                    name={"address"}
                                    value={addDoctor.address}
                                />

                                <div>
                                    <div className='SocialNetworks'><h5>Social networks</h5></div>
                                    <Row className='socialLink'>
                                        <Col lg={5}>
                                            <div className='socialIconText'>
                                                <i class="fa fa-instagram" ></i>
                                                <p>icofont-instagram</p>
                                            </div>
                                        </Col>
                                        <Col lg={5}>
                                            <Input inputType={"text"} placeholder={"#"}
                                                padding={"10px 10px 10px 20px"}
                                                InputCSS={"SocialIconLink"}
                                                onChange={handleInput}
                                                name={"instagramLink"}
                                                value={addDoctor.instagramLink}

                                            />
                                        </Col>
                                        <Col lg={2}>
                                            <div className='SocialLinkIcon'>
                                                <i class="fa fa-trash-o"></i>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className='socialLink'>
                                        <Col lg={5}>
                                            <div className='socialIconText'>
                                                <i class="fa fa-facebook"></i>
                                                <p>icofont-facebook</p>
                                            </div>
                                        </Col>
                                        <Col lg={5}>
                                            <Input inputType={"text"} placeholder={"#"}
                                                padding={"10px 10px 10px 20px"}
                                                InputCSS={"SocialIconLink"}
                                                onChange={handleInput}
                                                name={"facebookLink"}
                                                value={addDoctor.facebookLink}

                                            />
                                        </Col>
                                        <Col lg={2}>
                                            <div className='SocialLinkIcon'>
                                                <i class="fa fa-trash-o"></i>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className='socialLink'>
                                        <Col lg={5}>
                                            <div className='socialIconText'>
                                                <i class="fa fa-twitter"></i>
                                                <p>icofont-twitter</p>
                                            </div>
                                        </Col>
                                        <Col lg={5}>
                                            <Input inputType={"text"} placeholder={"#"}
                                                padding={"10px 10px 10px 20px"}
                                                InputCSS={"SocialIconLink"}
                                                onChange={handleInput}
                                                name={"twitterLink"}
                                                value={addDoctor.twitterLink}
                                            />
                                        </Col>
                                        <Col lg={2}>
                                            <div className='SocialLinkIcon'>
                                                <i class="fa fa-trash-o"></i>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <hr></hr>


                                <Row className='addSocialLink'>
                                    <div className='addSocialNetworks'><h5>Add social networks</h5></div>

                                    <Col lg={5}>
                                        <div></div>

                                        <Input inputType={"text"} placeholder={"Icon class"}
                                            padding={"10px 10px 10px 20px"}
                                            InputCSS={"SocialIconLink"}
                                            onChange={handleInput}
                                            name={"link"}

                                        />
                                    </Col>
                                    <Col lg={5}>
                                        <Input inputType={"text"} placeholder={"Link"} value={"#"}
                                            padding={"10px 10px 10px 20px"}
                                            InputCSS={"SocialIconLink"}
                                            onChange={handleInput}
                                            name={"link"}
                                        />
                                    </Col>
                                    <Col lg={2}>
                                        <div className='SocialLinkIcon'>
                                            <i class="fa fa-plus"></i>
                                        </div>
                                    </Col>
                                </Row>
                                <Button className='DoctorProfileSave' onClick={saveChanges} >
                                    Save changes
                                </Button>

                            </Form>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>

                </Col>
            </Row>

        </Container>
    );
}

export default DoctorProfilePage;