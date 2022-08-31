import { Button, Form, Modal } from 'react-bootstrap';
import { Input } from '../components';



function AddPayment({ show, setShow, addPayment, setAddPayment, addPaymentClick }) {


    const handleClose = () => setShow(false);

    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        addPayment[name] = value
        setAddPayment({ ...addPayment })
    }

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='addPatientHeaderBg'>
                    <Modal.Title>Add new payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Input inputType={"text"} placeholder={"Bill NO"} inputFor={"BillNo"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"patient-Input"}
                            name={"BillNo"}
                            onChange={handleInput}
                            value={addPayment.BillNo}
                        />
                        <Input inputType={"text"} placeholder={"Patient"} inputFor={"patient"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"patient-Input"}
                            name={"patient"}
                            onChange={handleInput}
                            value={addPayment.patient}
                        />
                        <Input inputType={"text"} placeholder={"Doctor"} inputFor={"doctor"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"patient-Input"}
                            name={"doctor"}
                            onChange={handleInput}
                            value={addPayment.doctor}
                        />
                        <Input inputType={"text"} placeholder={"Date"} inputFor={"date"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"patient-Input"}
                            name={"date"}
                            onChange={handleInput}
                            value={addPayment.date}
                        />
                        <Input inputType={"text"} placeholder={"Charger"} inputFor={"charger"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"patient-Input"}
                            name={"charger"}
                            onChange={handleInput}
                            value={addPayment.charger}
                        />
                        <Input inputType={"text"} placeholder={"Tax"} inputFor={"tax"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"patient-Input"}
                            name={"tax"}
                            onChange={handleInput}
                            value={addPayment.tax}
                        />  
                        <Input inputType={"text"} placeholder={"Discount"} inputFor={"discount"}
                            padding={"10px 10px 10px 20px"}
                            InputCSS={"patient-Input"}
                            onChange={handleInput}
                            name={"discount"}
                            value={addPayment.discount}
                        />

                        <Input inputType={"text"} placeholder={"Total"} inputFor={"total"}
                            padding={"10px 20px 10px 20px"}
                            InputCSS={"patient-Input"}
                            onChange={handleInput}
                            name={"total"}
                            value={addPayment.total}
                        />
                    </Form>
                </Modal.Body>

                <Modal.Footer className='addPatientFooterBg'>
                    <div className='modalFooterButton'>
                        <Button className='ModalCancelButton' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button className='ModalAddButton' onClick={addPaymentClick}>
                            Add Payment
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>

        </>
    );
}
export default AddPayment;