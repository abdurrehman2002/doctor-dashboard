import { Modal, Button, Row, Col, Form } from 'react-bootstrap/';
import Input from './Input';
import addDoctorImg from '../assets/images/addDoctorImg.jpg';


function AddDepartment({ show, setShow, addDepartment, setAddDepartment, addDepartmentClick }) {

    const handleClose = () => setShow(false);
    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        addDepartment[name] = value
        setAddDepartment({ ...addDepartment })
        console.log('addDepartmentData', addDepartment)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='AddDepartmentHeader'>
                    <Modal.Title>Add Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='departmentAddImage'>
                        <img alt='' src={addDoctorImg} />
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
                        <Input inputType={"text"} placeholder={"Title"} inputFor={"title"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"addDepartment-Input"}
                            onChange={handleInput}
                            value={addDepartment.title}
                            name={"title"}

                        />
                        <Input inputType={"text"} placeholder={"Description"} inputFor={"description"}
                            padding={"10px 10px 50px 20px"}
                            InputCSS={"addDepartment-Input"}
                            onChange={handleInput}
                            name={"description"}
                            value={addDepartment.description}
                        />

                        <div>
                            <div className='employeeHeading'><h5>Employees</h5></div>
                            <Row className='socialLink'>
                                <Col lg={5}>
                                    <div className='employeeName'>
                                        <p>Dr.Sophie</p>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <Input inputType={"text"} placeholder={"Link"}
                                        padding={"10px 10px 10px 20px"}
                                        InputCSS={"employeeImageLink"}
                                        onChange={handleInput}
                                        name={"imageLink"}
                                        value={addDepartment.imageLink}
                                    />
                                </Col>
                                <Col lg={2}>
                                    <div className='DeleteEmployeeIcon'>
                                        <i class="fa fa-trash-o"></i>
                                    </div>
                                </Col>
                            </Row>

                            <Row className='socialLink'>
                                <Col lg={5}>
                                    <div className='employeeName'>
                                        <p>Dr.Liam</p>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <Input inputType={"text"} placeholder={"Link"}
                                        padding={"10px 10px 10px 20px"}
                                        InputCSS={"employeeImageLink"}
                                        onChange={handleInput}
                                        name={"imageLink2"}
                                        value={addDepartment.imageLink2}
                                    />
                                </Col>
                                <Col lg={2}>
                                    <div className='DeleteEmployeeIcon'>
                                        <i class="fa fa-trash-o"></i>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <hr></hr>

                        <Row>
                            <div className='addEmployee'>
                                <h5>Add employee</h5>
                            </div>
                            <Col lg={5}>
                                <Input inputType={"text"} placeholder={"Doctor Name"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"employeeImageLink"}
                                    onChange={handleInput}
                                    name={"DoctorName"}
                                    value={addDepartment.DoctorName}
                                />
                            </Col>
                            <Col lg={5}>
                                <Input inputType={"text"} placeholder={"Doctor Image"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"employeeImageLink"}
                                    onChange={handleInput}
                                    name={"imageLink3"}
                                    value={addDepartment.imageLink3}

                                />
                            </Col>
                            <Col lg={2}>
                                <div className='addEmployeeIcon'>
                                    <i class="fa fa-plus"></i>
                                </div>
                            </Col>
                        </Row>

                    </Form>
                </Modal.Body>

                <Modal.Footer className='AddDoctorFooter'>
                    <div className='modalFooterButton'>
                        <Button className='ModalCancelButton' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button onClick={addDepartmentClick}>
                            Add department
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>

        </>
    );
}

export default AddDepartment;