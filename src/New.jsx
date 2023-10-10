import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


function New(props) {

    return (
        <Col sm={12} md={6} lg={4}>
        <Card className="h-100">
            <Card.Img variant="top" src={props.dataNew.urlToImage} />
            <Card.Header><Card.Title>{props.dataNew.title}</Card.Title></Card.Header>
            <Card.Body>
            <Card.Text>
                {props.dataNew.description}
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
  }

export default New;