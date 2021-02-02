import React from "react";
import { connect } from "react-redux";
import { Row, Col, Alert, Accordion, Card, Badge, Button } from 'react-bootstrap';
// Alcohol ingredients Info
const AlchoInfo = (props) => {
  // Format Paragraph to Sentences 
  let paragraph = ["Loadding.."];
  if(!props.data.ingredientDetails.ingredients){
    paragraph = ["Loadding..."];
   // paragraph = props.data.ingredientDetails.ingredients[0].strDescription.match(/[^\s.!?]+[^.!?\r\n]+[.!?]*/g);
  } else { 
    paragraph = props.data.ingredientDetails.ingredients[0].strDescription.match(/([^.!?]+[.!?]"?)\s?/g);
  }
  // Return AlchoInfo
  return (
    <Row>
      <Col>
        {props.data.ingredientDetails.ingredients ? 
          (
            <Accordion defaultActiveKey="1" className="shadow-sm m-2 p-3 bg-white rounded">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <Button variant="light">
                    <h3>
                      {props.data.ingredientDetails.ingredients[0].strIngredient}&nbsp;&nbsp;
                      <small><Badge variant="info"><i>More info</i></Badge></small>
                    </h3>
                  </Button>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Alert variant="primary">
                      {/* Break it Down */}
                      {paragraph.map((sentances, index) => (
                        <p className="m-0 p-0">{sentances}</p>
                      ))}
                      {/* 
                        <p>{props.data.ingredientDetails.ingredients[0].strDescription}</p>
                      */}
                    </Alert>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ) : null
        }
      </Col>
    </Row>
  );
};
// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(AlchoInfo);