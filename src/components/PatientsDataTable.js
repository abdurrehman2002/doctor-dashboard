import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AddPatient } from '.';
import profileImg from '../assets/images/addPatientImg.jpg';
import { SendPutRequest, SendDeleteRequest } from '../http';
import { format } from 'date-fns';
import _ from "lodash";



function PatientsDataTable(props) {

    const pageSize = 10;


    const { patientData, getPatients, tableColumData, viewProfile } = props
    const [show, setShow] = useState(false);
    const [addPatient, setAddPatient] = useState({
        patientName: "",
        id: '',
        image: '',
        age: "",
        address: "",
        number: "",
        lastVisit: "",
    });


    const handleEdit = (ind) => {
        console.log("patientData", patientData[ind])
        setAddPatient({ ...patientData[ind] })
        console.log(addPatient)
        setShow(true)
    }


    const handleDelete = async (index) => {
        console.log("patientData", patientData[index])
        const response = await SendDeleteRequest(`/patients/${patientData[index].id}`)
        console.log(response)
        if (response.status === 200) {
            patientData.splice(index, 1)
            setAddPatient({ ...patientData })
        }
    }


    const updatePatientClick = async () => {
        const response = await SendPutRequest(`/patients/${addPatient.id}`, addPatient)
        console.log(response)
        getPatients();
        setShow(false)

    }

    const pageCount = patientData ? Math.ceil(patientData.length / pageSize) : 0;
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);


    return (
        <>

            <div className='TableWrapper'>
                <Table className='patientTable' >
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
                            patientData && patientData.map((item, ind) => {
                                return (
                                    <tr className='tableRow'>
                                        <td><div className='patientProfileImg'>
                                            <img alt='user profile' src={profileImg} />
                                        </div></td>
                                        <td className='patientTableName'>{item.patientName}</td>
                                        <td className='patientid'>{item.id}</td>
                                        <td className='patientage'>{item.age}</td>
                                        <td className='patientAddress'>{item.address}</td>
                                        <td className='patientTableNumber'> <i class="fa fa-mobile"></i><p>{item.number}</p></td>
                                        <td className='patientlastVisit'>{format(new Date(item.lastVisit), 'dd MMM yyyy')} </td>
                                        <td className='patientStatus'><span>{item.status}</span></td>
                                        <td>
                                            <div>
                                                <div className='PatientTableActionicons'>
                                                    <div className='patientProfileAction' onClick={() => viewProfile(item.id)}  >
                                                        <i class="fa fa-external-link" ></i>
                                                    </div>
                                                    <div className='PatientEditAction' onClick={() => handleEdit(ind)} >
                                                        <i class="fa fa-pencil" ></i>
                                                    </div>
                                                    <div className='patientDeleteAction' onClick={() => handleDelete(ind)} >
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


                <nav className='d-flex justify-content-center'>
                    <ul className='pagination'>
                        {
                            pages.map((page) => (
                                <li className='page-link'>{page}</li>

                            ))
                        }
                    </ul>
                </nav>


                <AddPatient show={show} setShow={setShow}
                    addPatient={addPatient} setAddPatient={setAddPatient}
                    addPatientClick={updatePatientClick} />
            </div>

        </>

    );
}

export default PatientsDataTable;