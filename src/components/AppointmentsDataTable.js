import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ModalButton } from '.';
import userProfile from '../assets/images/userProfile.jpg';
import { SendPutRequest, SendDeleteRequest } from '../http';


function DataTable(props) {

    const { appointmentData, getAppointments, tableColumData } = props

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


    const handleDelete = async (index) => {
        console.log("appointmentData", appointmentData[index])
        const response = await SendDeleteRequest(`/appointment/${appointmentData[index].id}`)
        console.log(response)
        if (response.status === 200) {
            appointmentData.splice(index, 1)
            setAddAppointment({ ...appointmentData })
        }
    }


    const updateAppointmentClick = async () => {
        if (addAppointment.photo === "") {
            alert("Enter photo");
        } if (addAppointment.name === "") {
            alert("Enter name");
        } if (addAppointment.email === "") {
            alert("Enter email");
        } if (addAppointment.date === "") {
            alert("Enter date");
        } if (addAppointment.timeFrom === "") {
            alert("Enter timeFrom");
        } if (addAppointment.timeTo === "") {
            alert("Enter timeTo");
        } if (addAppointment.number === "") {
            alert("Enter number");
        } if (addAppointment.doctor === "") {
            alert("Enter doctor");
        } if (addAppointment.injure === "") {
            alert("Enter injure");
        } else {
            const response = await SendPutRequest(`/appointment/${addAppointment.id}`, addAppointment)
            console.log(response)
            getAppointments();
            setShow(false)
        }
    }



    return (
        <div className='TableWrapper'>
            <Table className='table' >
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
                                                <div className='deleteAction' onClick={() => handleDelete(ind)} >
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