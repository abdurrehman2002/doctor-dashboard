
import { Row, Col, Card } from 'react-bootstrap';


function DashboardCard(props) {
    return (
        <Row >
            <Col>
                <Card className='DashboardCard'>
                    <div className='DashboardCardWrapper'>
                    <div className='DashboardCardIcon'>
                            <i class={props.icon}></i>
                    </div>
                    <div className='DashboardCardBody'>
                        <div className='DashboardCardTitle'>{props.cardTiltle}</div>
                        <div className='DashboardCardText'>{props.cardText}</div>
                    </div>
                    </div>


                </Card>
            </Col>
        </Row>
    );
}

export default DashboardCard;