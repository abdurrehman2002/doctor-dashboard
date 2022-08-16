
import { Row, Col, Card } from 'react-bootstrap';
import CSButton from './Button';

function HomeCard(props) {
  return (
    <Row >
      <Col>
        <Card className='HomeCard'>
          {/* <Card.Body>
            <Card.Title>{props.cardTiltle} </Card.Title>
            <Card.Text>
              {props.cardAmount}
            </Card.Text>
          </Card.Body> */}
          <div className='HomeCardTitle'>{props.cardTiltle}</div>
          <div className='HomeCardBody'>
            <div className='HomeCardAmount'>
              <h5 style={{color:props.color}}>{props.cardAmount}</h5>
              <div className='HomeCardAmountMonth'>
                <h6>USD</h6>
                <p>month</p>
              </div>
            </div>
            <hr />
            <ul>
              <li>
                <span>1GB Disk Space</span>
              </li>
              <li>
                <span>10GB Monthly Bandwith</span>
              </li>
              <li>
                <span>2 Email Accounts</span>
              </li>
              <li>
                <span>Unlimited Subdomains</span>
              </li>
              <li>
                <span>Free support</span>
              </li>
            </ul>
            <div className='d-flex justify-content-center mb-4'>
            <CSButton titlefontSize={"15px"} color={"black"}
              title={"Purchase Now"} width={"170px"}
              backgroundColor={props.CardBtnColor}
              border={"none"} />
              </div>
          </div>

        </Card>
      </Col>
    </Row>
  );
}

export default HomeCard;