import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Logo, SideNav, Header, PageHeading, AppointmentsDataTable, ModalButton } from '../components';
import { SendPostRequest, SendGetRequest } from '../http';



function Appointments() {
    const [appointmentData, setAppointmentData] = useState([])

    const [show, setShow] = useState(false);


    const [addAppointment, setAddAppointment] = useState({
        image: '',
        name: "",
        email: "",
        date: "",
        timeFrom: "",
        timeTo: "",
        number: "",
        doctor: "",
        injure: "",
    });


    useEffect(() => {
        getAppointments();
    }, [])


    async function addAppointmentClick() {
        console.log("Clicked on Modal button")
        const response = await SendPostRequest("/appointment", addAppointment)
        console.log('addAppointment', response)
        getAppointments();
        setShow(false)
    }




    const getAppointments = async () => {
        const response = await SendGetRequest("/appointment")
        setAppointmentData(response.data)
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
                    <PageHeading heading={"Appointments"} marginBottom={"40px"}
                        marginLeft={"17px"} fontSize={"40px"} fontWeight={"bold"} />

                    <AppointmentsDataTable
                        tableColumData={["Photo", "Name", "Email",
                         "Date", "Visit time", "Number", "Doctor", "Injury/Condition", "Action" ]}
                        appointmentData={appointmentData}
                        getAppointments={getAppointments}
                    />

                    <div className='ModalWrapper'>
                        <Button variant="primary" onClick={() => setShow(true)} className="ModalButton">
                            <i class="fa fa-stethoscope" aria-hidden="true"></i>
                        </Button>
                    </div>


                </Col>

            </Row>
            <ModalButton show={show} setShow={setShow} addAppointment={addAppointment}
                setAddAppointment={setAddAppointment} addAppointmentClick={addAppointmentClick} />


        </Container>
    );
}

export default Appointments;