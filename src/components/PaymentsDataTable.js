import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AddPayment } from '.';


function PaymentsDataTable(props) {

    const { paymentData, tableColumData } = props

    const [show, setShow] = useState(false);
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

    return (
        <div className='PaymentTableWrapper'>
            <Table className='paymentTable' >
                <thead>
                    <tr>
                        {
                            tableColumData && tableColumData.map((item, ind) => {
                                console.log(item)
                                return (
                                    <th class="">{item}</th>
                                )
                            })
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        paymentData && paymentData.map((item, ind) => {
                            return (
                                <tr className='tableRow'>
                                    <td className='paymentBillNo'>{item.BillNo}</td>
                                    <td className='patientPayment'>{item.patient}</td>
                                    <td className='doctorPayment'>{item.doctor}</td>
                                    <td className='paymentDate'>{item.date}</td>
                                    <td className='paymentCharger'>{item.charger}</td>
                                    <td className='paymentTax'>{item.tax}</td>
                                    <td className='paymentDiscount'>{item.discount}</td>
                                    <td className='totalPayment'>{item.total}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
            <AddPayment show={show} setShow={setShow}
                addPayment={addPayment} setAddPayment={setAddPayment}
            />
        </div>
    );
}

export default PaymentsDataTable;