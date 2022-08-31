import { Container, Row, Col, Button } from 'react-bootstrap';
import { Logo, SideNav, Header, PageHeading, DepartmentCard, AddDepartment } from '../components';
import { SendPostRequest, SendGetRequest } from '../http';
import React, { useState, useEffect } from 'react';






function Departments() {

    const [show, setShow] = useState(false);
    const [departmentData, setDepartmentData] = useState([])

    const [addDepartment, setAddDepartment] = useState({
        title: "",
        description: "",
        imageLink: "",
        imageLink2: "",
        DoctorName: "",
        imageLink3: ""
    });


    useEffect(() => {
        getDepartments();
    }, [])


    async function addDepartmentClick() {
        console.log("Clicked on AddDepartment button")
        const response = await SendPostRequest("/departments", addDepartment)
        console.log('addDepartment', response)
        getDepartments();
        setShow(false);
    }

    const getDepartments = async () => {
        const response = await SendGetRequest("/departments")
        setDepartmentData(response.data)
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
                    <PageHeading heading={"Departments"} marginBottom={"40px"}
                        marginLeft={"17px"} fontSize={"40px"} fontWeight={"bold"} />


                    <Row className='px-4'>
                        {
                            departmentData && departmentData.map((item, ind) => {
                                return (
                                    <Col lg={4}>
                                        <DepartmentCard getDepartments={getDepartments}
                                            setDepartmentData={setDepartmentData}
                                            departmentData={item}
                                        />
                                    </Col>
                                )
                            })
                        }

                    </Row>


                    <div className='AddDepartmentButtonWrapper'>
                        <Button variant="primary" onClick={() => setShow(true)}
                            className="AddDepartmentButton">
                            <i class="fa fa-plus"></i>
                        </Button>
                    </div>

                    <AddDepartment show={show} setShow={setShow}
                        addDepartment={addDepartment}
                        setAddDepartment={setAddDepartment}
                        addDepartmentClick={addDepartmentClick} />
                </Col>
            </Row>
        </Container>
    );
}

export default Departments;