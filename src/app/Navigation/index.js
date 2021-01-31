import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from "react-redux";
// Redux Actionz
import {
  thunk_action_fetch_ingredient_Details,
  thunk_action_fetch_ingredient_Cocktails
} from "../../redux/actions/fetchAction";
// Navigation - alcohol list
const Navigation = (props) => {
  // onClick
  const handleClick = (e) => {
    console.log("this.props" + JSON.stringify(e.Alcohol));
    props.dispatch(thunk_action_fetch_ingredient_Details(e.Alcohol));
    props.dispatch(thunk_action_fetch_ingredient_Cocktails(e.Alcohol));
    console.log(JSON.stringify(props));
  };
  // Choosen Alcohol list
  const Alcoholz = ["Whiskey", "Scotch", "Rum", "Tequila", "Brandy"]
  const AlcoholItems = Alcoholz.map((Alcohol, index) => (
    <Col key={index}>
      <Button onClick={() => handleClick({ Alcohol })} variant="primary" block> {Alcohol} </Button>
    </Col>
  ));
  // Bling
  return (<Row className="m-3">{AlcoholItems}</Row>);
};
// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Navigation);