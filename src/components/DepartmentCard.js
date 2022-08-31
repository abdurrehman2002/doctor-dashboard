
import { Card, Button } from 'react-bootstrap';
import department1 from '../assets/images/department-1.jpg';
import teamdoctor1 from '../assets/images/teamdoctor1.jpg';
import teamdoctor2 from '../assets/images/teamdoctor2.jpg';
import teamdoctor3 from '../assets/images/teamdoctor3.jpg';

// { doctorData, viewProfile }

function DepartmentCard({ departmentData }) {


    return (
        <div className='DepartmentCardWrapper mb-4' >
            <Card className='DepartmentCard' >
                <Card.Img variant="top" src={department1} />
                <Card.Body className='DepartmentCardBody' >
                    <Card.Title className='DepartmentName'>{departmentData.title}</Card.Title>
                    <div className='departmentTeamWrapper'>
                        <Card.Text className='departmentTeamText'>Team:</Card.Text>
                        <div className='departmentTeamImg'>
                            <Card.Img className='teamDoctorImg' src={teamdoctor1} />
                            <Card.Img className='teamDoctorImg' src={teamdoctor2} />
                            <Card.Img className='teamDoctorImg' src={teamdoctor3} />
                            <Button className='teamDoctorImgBtn'>
                                <i class="fa fa-plus"></i>
                            </Button>
                        </div>
                    </div>

                    <Card.Text className='DepartmentDescription'>{departmentData.description}</Card.Text>

                    <div className='DepartmentMoreBtn'>
                        <Button>More <i class="fa fa-file-text-o"></i></Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
}

export default DepartmentCard;