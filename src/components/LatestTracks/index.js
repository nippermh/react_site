import React from 'react';
import { Button, Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import RandomImg from '';


function LatestTracks() {
    return (
        <>
        <style type="text/css">
            {`
            .px-8 {
                padding-top: 8rem;
                padding-bottom: 8rem;
            }
            `}
        </style>
        <Container className="px-8">
            <Row>

            <Col className="d-flex justify-content-center" sm={12}  md={6} lrg={4}>
           {/*---------------------card------------------------- */}
                <Card className="mb-4">
                    <Card.Img variant="top" src="https://source.unsplash.com/random/250x100 text=top image" />
                    <Card.Body>
                        <Card.Title>Track Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col className="d-flex justify-content-center" sm={12} md={6} lrg={4}>
                    {/*---------------------card------------------------- */}
                <Card className="mb-4">
                    <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/250x100 text=top image" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>
                    </Col>

                <Col className="d-flex justify-content-center " sm={12} md={6} lrg={4}>
                {/*---------------------card------------------------- */}
                <Card className="mb-4">
                    <Card.Img variant="top" src="https://source.unsplash.com/random/250x100 text=top image" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>
                    </Col>
                   
            </Row>
        </Container>
        </>
    )
};

export default LatestTracks;