import React from "react";
import { connect } from "react-redux";
import { Row, Col, Accordion, Card } from 'react-bootstrap';
// Cocktails Details
const CocktailsDetails = (props) => {
  return (
    <Row className="m-2">
      <Col>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click me! 
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h1>Hello! I'm the body</h1>
                {JSON.stringify(props.data.ingredientCocktails)}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
  );
};
// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(CocktailsDetails);