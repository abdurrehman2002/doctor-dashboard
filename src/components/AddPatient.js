import { Button, Form, Modal, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { Input } from '../components';
import addPatientImg from '../assets/images/addPatientImg.jpg'


function AddPatient({ show, setShow, addPatient, setAddPatient, addPatientClick }) {

    const handleClose = () => setShow(false);
    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        addPatient[name] = value
        setAddPatient({ ...addPatient })
    }

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='addPatientHeaderBg'>
                    <Modal.Title>Add new patient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modalAddImage'>
                        <img alt='' src={addPatientImg} />
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
                        <Input inputType={"text"} placeholder={"Name"} inputFor={"patientName"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"patient-Input"}
                            name={"patientName"}
                            onChange={handleInput}
                            value={addPatient.patientName}
                        />
                        <Input inputType={"digit"} placeholder={"Number"} inputFor={"number"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"patient-Input"}
                            onChange={handleInput}
                            name={"number"}
                            value={addPatient.number}
                        />
                        <Row>
                            <Col lg={6}>
                                <Input inputType={"digit"} placeholder={"age"} inputFor={"age"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"patient-Input"}
                                    onChange={handleInput}
                                    name={"age"}
                                    value={addPatient.age}

                                />
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <DropdownButton className='addDoctor-Gender' title="Gender">
                                        <Dropdown.Item href="#">Male</Dropdown.Item>
                                        <Dropdown.Item href="#">Female</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </Col>
                        </Row>

                        <Input inputType={"text"} placeholder={"Address"} inputFor={"address"}
                            padding={"10px 20px 10px 20px"}
                            InputCSS={"patient-Input"}
                            onChange={handleInput}
                            name={"address"}
                            value={addPatient.address}

                        />
                    </Form>
                </Modal.Body>

                <Modal.Footer className='addPatientFooterBg'>
                    <div className='modalFooterButton'>
                        <Button className='ModalCancelButton' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button className='ModalAddButton' onClick={addPatientClick}>
                            Add Patient
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>

        </>
    );
}
export default AddPatient;