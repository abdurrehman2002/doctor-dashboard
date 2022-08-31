
import { Card, Button } from 'react-bootstrap';
import doctorImg from '../assets/images/doctorImg.jpg';

function DoctorsCard({ doctorData, viewProfile }) {


    return (
        <div className='DoctorCardWrapper mb-4' >
            <Card className='DoctorCard' >
                <Card.Img variant="top" src={doctorImg} />
                <Card.Body className='DoctorCardBody' >
                    <div className='DoctorNameWrapper'>
                        <Card.Title className='DoctorName'>{doctorData.firstName}</Card.Title>
                        <Card.Title className='DoctorName'>{doctorData.lastName}</Card.Title>
                    </div>
                    <Card.Text className='DoctorSpecility'>{doctorData.specility}</Card.Text>
                    <div className='Social-links'>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twitter"></i>
                    </div>
                    <Card.Text className='DoctorAddress'>{doctorData.address}</Card.Text>

                    <div className='DoctorProfileBtn'>
                        <Button
                            onClick={() => viewProfile(doctorData.id)} >View profile</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
}

export default DoctorsCard;