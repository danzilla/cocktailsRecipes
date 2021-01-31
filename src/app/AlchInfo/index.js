import React from "react";
import { connect } from "react-redux";
import { Row, Col, Alert, Accordion, Card, Badge } from 'react-bootstrap';
// Alcohol ingredients Info
const AlchoInfo = (props) => {
  return (
    <Row className="m-2">
      <Col>
        {props.data.ingredientDetails.ingredients ? 
          (
            <Accordion defaultActiveKey="1">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <h3>
                    {props.data.ingredientDetails.ingredients[0].strIngredient}&nbsp;&nbsp;
                    <small><Badge variant="info"><i>More info</i></Badge></small>
                  </h3> 
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Alert variant="primary">
                      <p>{props.data.ingredientDetails.ingredients[0].strDescription}</p>
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