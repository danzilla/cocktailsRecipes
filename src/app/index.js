import React from "react";
import { Container } from 'react-bootstrap';
import { connect } from "react-redux";
// Componets
import Navigation from "./Navigation";
import AlchoInfo from "./AlchInfo";
import CocktailsDetails from "./CocktailsDetails";
import {emojify} from 'react-emojione';
// App
const App = () => {
  // Random CockTails Icon on every Actionz
  let drinkIconz = ["🍻", "🧉", "🥛", "🥂", "🍺", "🍶", "🥤", "🍷", "🍸", "🍹", "🥃"]
  let drinkIcon = drinkIconz[Math.floor(Math.random() * drinkIconz.length)]
  let emojifyOptions = { style: { height: '50' } }
  // Cocktails App Dashboard
  return (
    <Container>
      <h2 className="p-2 m-2 font-weight-bold text-center">
        <i>Cocktails Recipes</i> 
        {emojify(drinkIcon, emojifyOptions)}
      </h2>
      <Navigation />
      <AlchoInfo />
      <CocktailsDetails />
    </Container>
  );
}
// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(App);