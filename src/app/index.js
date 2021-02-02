import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import {emojify} from 'react-emojione';
// Componets
import Navigation from "./Navigation";
import AlchoInfo from "./AlchInfo";
import CocktailsDetails from "./CocktailsDetails";
// App
const App = () => {
  // Random CockTails Icon on every Actionz
  let drinkIconz = ["🍻", "🧉", "🥛", "🥂", "🍺", "🍶", "🥤", "🍷", "🍸", "🍹", "🥃"]
  let drinkIcon = drinkIconz[Math.floor(Math.random() * drinkIconz.length)]
  let emojifyOptions = { style: { height: '50' } }
  // RandomColor
  const randomColor = require('randomcolor');
  let Color = randomColor({
    luminosity: 'dark',
    format: 'rgba',
    alpha: 0.7
  })
  // Cocktails App Dashboard
  return (
    <Container>
      <h2 className="display-4 p-2 m-2 font-weight-bold text-center">
        <i style={{color: Color}}>Cocktails Recipes</i> {emojify(drinkIcon, emojifyOptions)}
      </h2>
      <Row>
        <Col className="shadow-sm bg-white rounded">
          <Navigation />
          <AlchoInfo />
          <CocktailsDetails />
        </Col>
      </Row>
    </Container>
  );
}
// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(App);