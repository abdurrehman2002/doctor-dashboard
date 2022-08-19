import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ModalButton } from '.';
import userProfile from '../assets/images/userProfile.jpg';
import { SendPutRequest } from '../http';


function DataTable(props) {

    const { appointmentData, getAppointments } = props
    const [show, setShow] = useState(false);


    const [addAppointment, setAddAppointment] = useState({
        id: '',
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



    const handleEdit = (ind) => {
        console.log("appointmentData", appointmentData[ind])
        setAddAppointment({ ...appointmentData[ind] })
        console.log(addAppointment)
        setShow(true)


    }
    const updateAppointmentClick = async () => {
        const response = await SendPutRequest(`/appointment/${addAppointment.id}`, addAppointment)
        console.log(response)
        getAppointments();
        setShow(false)


    }

    return (
        <div className='TableWrapper'>
            <Table className='table' >
                <thead>
                    <tr>
                        <th class="">Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Visit time</th>
                        <th>Number</th>
                        <th>Doctor</th>
                        <th>Injury/Condition</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointmentData && appointmentData.map((item, ind) => {
                            return (
                                <tr className='tableRow'>
                                    <td><div className='appointmentProfileImg'>
                                        <img alt='user profile' src={userProfile} />
                                    </div></td>
                                    <td className='tableName'>{item.name}</td>
                                    <td className='tableBlueCol'><span>@</span>{item.email}</td>
                                    <td className='date'>{item.date}</td>
                                    <td className='visit-time'><span>{item.timeFrom}
                                    </span> <span> - </span> <span>{item.timeTo}</span></td>
                                    <td className='tableNumber'> <i class="fa fa-mobile"></i> <p>{item.number}</p></td>
                                    <td className='doctor'>{item.doctor}</td>
                                    <td className='codition'>{item.injure}</td>
                                    <td>
                                        <div>
                                            <div className='TableActionicons'>
                                                <div className='editAction' onClick={() => handleEdit(ind)} >
                                                    <i class="fa fa-pencil" ></i>
                                                </div>
                                                <div className='deleteAction'>
                                                    <i class="fa fa-trash-o"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
            <ModalButton show={show} setShow={setShow}
                addAppointment={addAppointment} setAddAppointment={setAddAppointment}
                addAppointmentClick={updateAppointmentClick} />
        </div>
    );
}

export default DataTable;