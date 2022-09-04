import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Logo, SideNav, Header, PageHeading, PatientsDataTable, AddPatient } from '../components';
import { SendPostRequest, SendGetRequest } from '../http';
import { useNavigate } from 'react-router-dom';




function Patients() {

    const [page, setPage] = useState(1);
    console.log("pageno", page)


    const navigate = useNavigate();
    const viewProfile = (id) => {
        debugger
        navigate(`/PatientProfilePage/${id}`);
    }


    const [patientData, setpatientData] = useState([])
    const [show, setShow] = useState(false);
    var today = new Date()
    // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    console.log(today)

    const [addPatient, setAddPatient] = useState({
        image: '',
        patientName: "",
        id: "",
        age: "",
        address: "",
        number: "",
        lastVisit: today,
        status: "Approved"
    });


    useEffect(() => {
        getPatients();
    }, [])


    async function addPatientClick() {
        console.log("Clicked on Modal button")
        const response = await SendPostRequest("/patients", addPatient)
        console.log('addPatient', response)
        getPatients();
        setShow(false)
    }


    const getPatients = async () => {
        const response = await SendGetRequest(`/patients?_page=${page}&_limit=5`)
        if (response.data.length > 0) {
            setpatientData(response.data)
            console.log("response", response)
        } if(response.data.length===0){
            setPage(page - 1)
            
        }
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
                    <PageHeading heading={"Patients"} marginBottom={"40px"}
                        marginLeft={"17px"} fontSize={"40px"} fontWeight={"bold"} />

                    <PatientsDataTable
                        tableColumData={["Photo", "Name", "ID",
                            "Age", "Address", "Number", "Last visit", "Status", "Action"]}
                        patientData={patientData}
                        getPatients={getPatients}
                        viewProfile={viewProfile}
                    />



                    <div className='PatientModalWrapper'>
                        <Button variant="primary" onClick={() => setShow(true)} className="addPatientBtn">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </Button>
                    </div>


                    <div className='d-flex justify-content-center mb-5'>
                        <Button className='PaginationPrevBtn'
                            onClick={() => {
                                setPage(page - 1);
                                getPatients()
                            }
                            }>Prev</Button>
                        <Button className='PaginationNextBtn'
                            onClick={() => {
                                setPage(page + 1)
                                getPatients()
                            }}>Next</Button>
                    </div>



                </Col>
            </Row>
            <AddPatient show={show} setShow={setShow} addPatient={addPatient}
                setAddPatient={setAddPatient} addPatientClick={addPatientClick} />

        </Container>
    );
}

export default Patients;