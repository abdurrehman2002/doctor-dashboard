import { Container, Row, Col, Form, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { Logo, SideNav, Header, PageHeading, Input } from '../components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SendGetRequest, SendPutRequest } from '../http';
import { format } from 'date-fns';

import DoctorProfileImg from '../assets/images/addDoctorImg.jpg';
import PaymentsDataTable from '../components/PaymentsDataTable';

function PatientProfilePage() {

    let params = useParams();
    console.log("patientId", params.id)

    const [paymentData, setpaymentData] = useState([])
    useEffect(() => {
        getPayments();
    }, [])



    const getPayments = async () => {
        const response = await SendGetRequest("/payments")
        setpaymentData(response.data)
        console.log("response", response)
    }



    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    console.log(today)


    const [addPatient, setAddPatient] = useState({
        image: '',
        patientName: "",
        id: "",
        age: "",
        address: "",
        number: "",
        lastVisit: today,
        status: ""
    });


    useEffect(() => {
        if (params.id !== "") {
            getPatients();
        }
    }, [params.id])


    const getPatients = async () => {
        const response = await SendGetRequest(`/patients/${params.id}`)
        setAddPatient({ ...response.data })
        console.log("response", response)
    }


    const saveChanges = async () => {
        debugger
        const response = await SendPutRequest(`/patients/${addPatient.id}`, addPatient)
        console.log(response)
        getPatients();
    }

    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        addPatient[name] = value
        setAddPatient({ ...addPatient })
        console.log('addPatientdata', addPatient)
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
                    <PageHeading heading={"Patient Profile Page"} marginBottom={"40px"}
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
                                <div className='SocialNetworks'><h5>Full Name</h5></div>

                                <Input inputType={"text"} placeholder={"Name"} inputFor={"patientName"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"patient-Input"}
                                    name={"patientName"}
                                    onChange={handleInput}
                                    value={addPatient.patientName}
                                />
                                <div className='SocialNetworks'><h5>Id</h5></div>
                                <Input inputType={"digit"} placeholder={"Id"} inputFor={"id"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"patient-Input"}
                                    onChange={handleInput}
                                    name={"id"}
                                    value={addPatient.id}
                                />

                                <Row>
                                    <Col lg={6}>
                                        <div className='SocialNetworks'><h5>Age</h5></div>
                                        <Input inputType={"digit"} placeholder={"age"} inputFor={"age"}
                                            padding={"10px 10px 10px 20px"}
                                            InputCSS={"patient-Input"}
                                            onChange={handleInput}
                                            name={"age"}
                                            value={addPatient.age}
                                        />
                                    </Col>
                                    <Col lg={6}>
                                        <div className='SocialNetworks'><h5>Gender</h5></div>
                                        <div>
                                            <DropdownButton className='addDoctor-Gender' title="Gender">
                                                <Dropdown.Item href="#">Male</Dropdown.Item>
                                                <Dropdown.Item href="#">Female</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='SocialNetworks'><h5>Phone number</h5></div>
                                <Input inputType={"digit"} placeholder={"Number"} inputFor={"number"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"patient-Input"}
                                    onChange={handleInput}
                                    name={"number"}
                                    value={addPatient.number}
                                />
                                <div className='SocialNetworks'><h5>Address</h5></div>
                                <Input inputType={"text"} placeholder={"Address"} inputFor={"address"}
                                    padding={"10px 20px 10px 20px"}
                                    InputCSS={"patient-Input"}
                                    onChange={handleInput}
                                    name={"address"}
                                    value={addPatient.address} />
                                <div className='SocialNetworks'><h5>Last Visit</h5></div>
                                <Input inputType={"text"} placeholder={"lastVisit"} inputFor={"lastVisit"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"patient-Input"}
                                    onChange={handleInput}
                                    name={"lastVisit"}
                                    value={format(new Date(addPatient.lastVisit), 'dd MMM yyyy')}
                                />
                                <div className='SocialNetworks'><h5>Status</h5></div>
                                <Input inputType={"text"} placeholder={"Status"} inputFor={"status"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"patient-Input"}
                                    name={"status"}
                                    onChange={handleInput}
                                    value={addPatient.status}
                                />


                                <Button className='DoctorProfileSave' onClick={saveChanges} >
                                    Save changes
                                </Button>

                            </Form>
                        </Col>


                        <Col lg={6}>
                            <div className='PatientProfilePageText '>
                                <h1 className='patientPageTextHeading'>New prescription</h1>
                                <p className='patientPageTextDate'>18 Dec 2019</p>
                                <p className='patientPageTextDescription'>Aenean lacinia bibendum nulla sed consectetur.
                                    Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>

                            <div className='PatientProfilePageText '>
                                <h1 className='patientPageTextHeading'>Appointment</h1>
                                <p className='patientPageTextDate'>05 Oct 2019</p>
                                <p className='patientPageTextDescription'>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Voluptate.</p>
                            </div>

                            <div className='PatientProfilePageText '>
                                <h1 className='patientPageTextHeading'>Medication</h1>
                                <p className='patientPageTextDate'>01 Oct 2019</p>
                                <p className='patientPageTextDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Consequuntur nam nisi veniam.</p>
                            </div>

                            <div className='PatientProfilePageText '>
                                <h1 className='patientPageTextHeading'>Operation</h1>
                                <p className='patientPageTextDate'>23 Sep 2019</p>
                                <p className='patientPageTextDescription'>Aenean lacinia bibendum nulla sed consectetur.
                                    Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>

                            <div className='PatientProfilePageText '>
                                <h1 className='patientPageTextHeading'>Examination</h1>
                                <p className='patientPageTextDate'>10 Jul 2019</p>
                                <p className='patientPageTextDescription'>Lorem ipsum dolor sit.</p>
                            </div>

                            <div className='PatientProfilePageText '>
                                <h1 className='patientPageTextHeading'>Examination</h1>
                                <p className='patientPageTextDate'>9 Jul 2019</p>
                                <p className='patientPageTextDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Consequuntur nam nisi veniam.</p>
                            </div>

                            <div className='PatientProfilePageText '>
                                <h1 className='patientPageTextHeading'>Medication</h1>
                                <p className='patientPageTextDate'>30 Mar 2019</p>
                                <p className='patientPageTextDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Consequuntur nam nisi veniam.</p>
                            </div>
                        </Col>
                    </Row>


                    <PageHeading heading={"Billings"} marginBottom={"20px"} marginTop={"40px"}
                        marginLeft={"17px"} fontSize={"30px"}  />

                    <PaymentsDataTable 
                        tableColumData={["BillNo", "Patient", "Doctor",
                            "Date", "Charger", "Tax", "Discount", "Total"]}
                        paymentData={paymentData}
                    />


                </Col>
            </Row>

        </Container>
    );
}

export default PatientProfilePage;