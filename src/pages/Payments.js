import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Logo, SideNav, Header, PageHeading, PaymentsDataTable, AddPayment } from '../components';
import { SendPostRequest, SendGetRequest } from '../http';



function Payments() {
    const [paymentData, setpaymentData] = useState([])
    const [show, setShow] = useState(false);

    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    console.log(today)

    const [addPayment, setAddPayment] = useState({
        BillNo: '',
        patient: "",
        doctor: "",
        date: "",
        charger: "",
        tax: "",
        discount: "",
        total: ""

    });

    useEffect(() => {
        getPayments();
    }, [])

    async function addPaymentClick() {
        console.log("Clicked on Modal button")
        const response = await SendPostRequest("/payments", addPayment)
        console.log('addPayment', response)
        getPayments();
        setShow(false)
    }


    const getPayments = async () => {
        const response = await SendGetRequest("/payments")
        setpaymentData(response.data)
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
                    <PageHeading heading={"Patients"} marginBottom={"40px"}
                        marginLeft={"17px"} fontSize={"40px"} fontWeight={"bold"} />

                    <PaymentsDataTable
                        tableColumData={["BillNo", "Patient", "Doctor",
                            "Date", "Charger", "Tax", "Discount", "Total"]}
                        paymentData={paymentData}
                    />

                    <div className='PatientModalWrapper'>
                        <Button variant="primary" onClick={() => setShow(true)} className="addPatientBtn">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </Button>
                    </div>
                </Col>
            </Row>

            <AddPayment show={show} setShow={setShow} addPayment={addPayment}
                setAddPayment={setAddPayment} addPaymentClick={addPaymentClick} />

        </Container>
    );
}

export default Payments;