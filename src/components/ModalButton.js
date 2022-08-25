import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { Input } from '../components';
import modalAddImg from '../assets/images/modalAddImg.jpg'




function ModalButton({ show, setShow, addAppointment, setAddAppointment, addAppointmentClick }) {


    const handleClose = () => setShow(false);

    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        addAppointment[name] = value
        setAddAppointment({ ...addAppointment })
    }

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new appointments</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modalAddImage'>
                        <img alt='' src={modalAddImg} />

                        <div class="variants">
                            <div class='file'>
                                <label for='input-file'>
                                    Select a file
                                    <i class="fa fa-user "></i>
                                </label>
                                <input id='input-file' type='file' name={"image"}
                                // onChange={(e) => handleInput(e)}
                                />
                            </div>
                        </div>
                    </div>



                    <Form>
                        <Input inputType={"text"} placeholder={"Name"} inputFor={"name"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"modal-Input"}
                            onChange={handleInput}
                            value={addAppointment.name}
                        />
                        <Input inputType={"text"} placeholder={"Doctor"} inputFor={"doctor"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"modal-Input"}
                            onChange={handleInput}
                            name={"doctor"}
                            value={addAppointment.doctor}
                        />
                        <Input inputType={"email"} placeholder={"Email"} inputFor={"email"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"modal-Input"}
                            name={"email"}
                            onChange={handleInput}
                            value={addAppointment.email}

                        />
                        <Input inputType={"date"} placeholder={"Date"} inputFor={"date"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"modal-Input"}
                            onChange={handleInput}
                            name={"date"}
                            value={addAppointment.date}

                        />
                        <Row>
                            <Col lg={6}>
                                <Input inputType={"digit"} placeholder={"Time from"} inputFor={"time"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"modal-TimeInput"}
                                    onChange={handleInput}
                                    name={"timeFrom"}
                                    value={addAppointment.timeFrom}

                                />
                            </Col>
                            <Col lg={6}>
                                <Input inputType={"digit"} placeholder={"Time to"} inputFor={"time"}
                                    padding={"10px 10px 10px 20px"}
                                    InputCSS={"modal-TimeInput"}
                                    onChange={handleInput}
                                    name={"timeTo"}
                                    value={addAppointment.timeTo}

                                />
                            </Col>
                        </Row>
                        <Input inputType={"number"} placeholder={"Number"} inputFor={"number"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"modal-Input"}
                            onChange={handleInput}
                            name={"number"}
                            value={addAppointment.number}

                        />
                        <Input inputType={"text"} placeholder={"Injure"} inputFor={"injury"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"modal-Input"}
                            onChange={handleInput}
                            name={"injure"}
                            value={addAppointment.injure}

                        />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <div className='modalFooterButton'>
                        <Button className='ModalCancelButton' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button className='ModalAddButton' onClick={addAppointmentClick}>
                            Add appointments
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>

        </>
    );
}

export default ModalButton;