import React from "react";
import { connect } from "react-redux";
import { Row, Col, Accordion, Card, Alert, Media } from 'react-bootstrap';
// Redux Actionz
import { thunk_action_fetch_Cocktails_Details } from "../../redux/actions/fetchAction";
// Cocktail Details
const CocktailsDetails = (props) => {
  // onClick on Cocktails for MoreInfo
  // CockTails information => fire action onClick
  const handleClickOnCard = (e) => {
    props.dispatch(thunk_action_fetch_Cocktails_Details(e.idDrink));
    // console.log("this.props" + JSON.stringify(e));
  };
  // Cocktail Detail => into => Componets
  let CockTailCardDetails = props.data.cocktailsDetails;
  let CockTailCardData;
  if(CockTailCardDetails.drinks) {
    // CockTailCardData = props.data.cocktailsDetails.drinks
    CockTailCardData = CockTailCardDetails.drinks.map((CockTail, index) => (
      // Card Details
      <Card key={index} className="text-wrap p-2 m-2">
        <Card.Body>
          <Card.Title className="mb-2 text-muted">
            <h5 className="p-1 m-0">Category: <small>{CockTail.strCategory}</small></h5>
            <h5 className="p-1 m-0">Drink Type: <small>{CockTail.strAlcoholic}</small></h5>
            <h5 className="p-1 m-0">Glass Type: <small>{CockTail.strGlass}</small></h5>
            {CockTail.dateModified 
              ? (<h5 className="p-1 m-0">Updated: <small>{CockTail.dateModified}</small></h5>)
              : (null)
            }
          </Card.Title>
          <Card.Text>
            {/* Instructions */}
            <Alert className="p-3" variant="success">
              <h5>Instructions: </h5>
              {
                Object.keys(CockTail).filter(CockTailx => CockTailx.includes('strInstruction')).map((item, index) => {
                  return(
                    CockTail[item] != null
                      ? (
                          <p className="p-0 m-0">
                            {index+1} : {item} : {CockTail[item]}
                          </p>
                        )
                      : (null)
                  )
                })
              }
            </Alert>
            {/* Ingredients */}
            <Alert className="p-3" variant="success">
              <h5>Ingredients:</h5>
              {
                Object.keys(CockTail).filter(CockTailx => CockTailx.includes('strIngredient')).map((item, index) => {
                  return(
                    CockTail[item] != null
                      ? (
                          <p className="p-0 m-0">
                            {index+1} : {CockTail[item]}
                          </p>
                        )
                      : (null)
                  )
                })
              }
            </Alert>
            {/* Measure */}
            <Alert className="p-3" variant="success">
              <h5>Measure:</h5>
              {
                Object.keys(CockTail).filter(CockTailx => CockTailx.includes('strMeasure')).map((item, index) => {
                  return(
                    CockTail[item] != null
                      ? (
                          <p className="p-0 m-0">
                            {index+1} : {CockTail[item]}
                          </p>
                        )
                      : (null)
                  )
                })
              }
            </Alert>
            {/* Raw Data */}
            <Alert className="p-3" variant="info">
              <h4>Raw Data:</h4>
              {
                Object.keys(CockTail).map((item,index) => {
                  return(
                    CockTail[item] != null
                      ? (
                          <p className="p-0 m-0">
                            {item} : {CockTail[item]}
                          </p>
                        )
                      : (null)
                  )
                })
              }
            </Alert>
          </Card.Text>
        </Card.Body>
      </Card>
    ))
  } else { CockTailCardData = "Loading..." }
  // CockTails Cards
  let CockTails = props.data.ingredientCocktails;
  let CockTailsCard;
  if (CockTails.drinks) {
    console.log("Drink is on");
    CockTailsCard = CockTails.drinks.map((CockTail, index) => (
      <Card key={index}>
        <Accordion.Toggle as={Card.Header} eventKey={index + 1}
          onClick={() => handleClickOnCard(CockTail)}>
            {CockTail.strDrink} &#11167;
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={index + 1}>
          <Card.Body>
            <Row>
              <Col md={12}>
                <Media>
                  <img
                    width={128}
                    height={128}
                    className="mr-3"
                    src={CockTail.strDrinkThumb}
                    alt={CockTail.strDrink} />
                  <Media.Body>
                    <h3> {CockTail.strDrink} </h3>
                    <Media>
                      <Media.Body>
                        {CockTailCardData}
                      </Media.Body>
                    </Media>
                  </Media.Body>
                </Media>
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ));
  } else { console.log("Drink is Not on"); }
  // Render
  return (
    <Row className="m-2">
      {CockTails.drinks ?
        (
          <Col className="mb-4">
            <Accordion defaultActiveKey="0">
              {CockTailsCard}
            </Accordion>
          </Col>
        ) :
        (
          <Row className="w-100">
            <Col className="container">
              <Alert className="p-4 m-4 text-center w-100" variant="success">
                <h2>
                  Learn about Cocktails Recipes!
                  <br />
                  <small>Click on any Ingrident ...</small>
                </h2>
              </Alert>
            </Col>
          </Row>
        )
      }
    </Row>
  );
};
// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(CocktailsDetails);