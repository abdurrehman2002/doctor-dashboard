import { Modal, Button, Row, Col, Form, Dropdown, DropdownButton } from 'react-bootstrap/';
import Input from './Input';
import addDoctorImg from '../assets/images/addDoctorImg.jpg';


function AddDoctors({ show, setShow, addDoctor, setAddDoctor, addDoctorClick }) {

    const handleClose = () => setShow(false);

    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        addDoctor[name] = value
        setAddDoctor({ ...addDoctor })
        console.log('addDoctordata', addDoctor)
    }

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='AddDoctorHeader' closeButton>
                    <Modal.Title>Add doctor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modalAddImage'>
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
                        <Input inputType={"text"} placeholder={"First name"} inputFor={"firstName"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"addDoctor-Input"}
                            onChange={handleInput}
                            value={addDoctor.firstName}
                            name={"firstName"}

                        />
                        <Input inputType={"text"} placeholder={"Last name"} inputFor={"lastName"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"addDoctor-Input"}
                            onChange={handleInput}
                            name={"lastName"}
                            value={addDoctor.lastName}
                        />
                        <Row>
                            <Col lg={6}>
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
                                    <DropdownButton className='addDoctor-Gender' title="Gender">
                                        <Dropdown.Item href="#">Male</Dropdown.Item>
                                        <Dropdown.Item href="#">Female</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </Col>
                        </Row>
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

                    </Form>
                </Modal.Body>

                <Modal.Footer className='AddDoctorFooter'>
                    <div className='modalFooterButton'>
                        <Button className='ModalCancelButton' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button className='ModalAddButton' onClick={addDoctorClick}>
                            Add doctor
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>

        </>
    );
}

export default AddDoctors;