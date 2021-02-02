import React from "react";
import { Row, Col, Button, Nav } from 'react-bootstrap';
import { connect } from "react-redux";
// Redux Actionz
import {
  thunk_action_fetch_ingredient_Details,
  thunk_action_fetch_ingredient_Cocktails
} from "../../redux/actions/fetchAction";
// Navigation - alcohol list
const Navigation = (props) => {
  // onClick on Alcohol
  const handleClick = (e) => {
    console.log("this.props" + JSON.stringify(e.Alcohol));
    props.dispatch(thunk_action_fetch_ingredient_Details(e.Alcohol));
    props.dispatch(thunk_action_fetch_ingredient_Cocktails(e.Alcohol));
    // console.log(JSON.stringify(props));
  };
  // Choosen Alcohol list
  const Alcoholz = ["Whiskey", "Scotch", "Rum", "Tequila", "Brandy", "Gin"]
  const AlcoholItems = Alcoholz.map((Alcohol, index) => (
    <Nav.Item key={index}>
      <Nav.Link eventKey={index+1} onClick={() => handleClick({ Alcohol })} >
        {Alcohol}
      </Nav.Link>
    </Nav.Item>
  ));
  // Bling
  return (<Row className="mt-4"><Col>
    <Nav variant="tabs" className="justify-content-center">
      {AlcoholItems}
    </Nav>
  </Col></Row>);
};
// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Navigation);