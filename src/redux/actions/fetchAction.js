// Store
import store from "../store";

// INGREDIENT_DETAILS
// Fetching 
export const fetch_ingredient_details = () => {
  return { type: "FETCHING_INGREDIENT_DETAILS", data: "Loading" }; };
// Fetched
export const receive_ingredient_details = (data) => {
  return { type: "FETCHED_INGREDIENT_DETAILS", data: data }; };
// Error Fetching
export const receive_error_ingredient_details = (err) => {
  return { type: "ERROR_INGREDIENT_DETAILS", data: err }; };

// INGREDIENT_COCKTAILS
// Fetching 
export const fetch_ingredient_cocktails = () => {
  return { type: "FETCHING_INGREDIENT_COCKTAILS", data: "Loading" }; };
// Fetched
export const receive_ingredient_cocktails = (data) => {
  return { type: "FETCHED_INGREDIENT_COCKTAILS", data: data }; };
// Error Fetching
export const receive_error_ingredient_cocktails = (err) => {
  return { type: "ERROR_INGREDIENT_COCKTAILS", data: err }; };


// COCKTAIL_DETAILS
// Fetching 
export const fetch_cocktails_details = () => {
  return { type: "FETCHING_COCKTAIL_DETAILS", data: "Loading" }; };
// Fetched
export const receive_cocktails_details = (data) => {
  return { type: "FETCHED_COCKTAIL_DETAILS", data: data }; };
// Error Fetching
export const receive_error_cocktails_details = (err) => {
  return { type: "ERROR_COCKTAIL_DETAILS", data: err }; };




// Fetch Ingredient_Details
// Buzz is here - ACTIONS - Fetch Ingredient_Details
export const thunk_action_fetch_ingredient_Details = (ingredient) => {
  // strip ingredient for whitespace 
  const ingredientG = ingredient.replace(/\s/g, "");
  // 1.0 - Start fetch_post() - Start
  store.dispatch(fetch_ingredient_details());
  // 2.0 - During - return
  return function(dispatch, getState) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientG}`)
      .then(data => data.json())
      .then(data => { // 2.1 - when got data vs didnt get data
        if (!data.ingredients) {
          dispatch(receive_error_ingredient_details("Error retriving Ingredient_Details data"))
          // throw new Error("No such ingredient found!!");
        } else dispatch(receive_ingredient_details(data)); // 2.2 - when got data dispatch with receive_post(data) -> callback
      })
      .catch(err => dispatch(receive_error_ingredient_details(err))); // 3 - else receive_error()
  };
};

// Fetch Ingredient_Cocktails
// Buzz is here - ACTIONS - Fetch Ingredient_Cocktails
export const thunk_action_fetch_ingredient_Cocktails = (ingredient) => {
  // strip ingredient for whitespace 
  const ingredientG = ingredient.replace(/\s/g, "");
  // 1.0 - Start fetch_post() - Start
  store.dispatch(fetch_ingredient_cocktails());
  // 2.0 - During - return
  return function(dispatch, getState) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientG}`)
      .then(data => data.json())
      .then(data => { // 2.1 - when got data vs didnt get data
        if (!data.drinks) {
          dispatch(receive_error_ingredient_cocktails("Error retriving Ingredient_Cocktails data"))
          // throw new Error("No such ingredient found!!");
        } else dispatch(receive_ingredient_cocktails(data)); // 2.2 - when got data dispatch with receive_post(data) -> callback
      })
      .catch(err => dispatch(receive_error_ingredient_cocktails(err))); // 3 - else receive_error()
  };
};



// Fetch Cocktails_Details
// Buzz is here - ACTIONS - Fetch Cocktails_Details
export const thunk_action_fetch_Cocktails_Details = (cockTailID) => {
  // 1.0 - Start fetch_post() - Start
  store.dispatch(fetch_cocktails_details());
  // 2.0 - During - return
  return function(dispatch, getState) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cockTailID}`)
      .then(data => data.json())
      .then(data => { // 2.1 - when got data vs didnt get data
        if (!data.drinks) {
          dispatch(receive_error_cocktails_details("Error retriving Cocktail_Details data"))
          // throw new Error("No such ingredient found!!");
        } else dispatch(receive_cocktails_details(data)); // 2.2 - when got data dispatch with receive_post(data) -> callback
      })
      .catch(err => dispatch(receive_error_cocktails_details(err))); // 3 - else receive_error()
  };
};


/* //  Buzz is here - ACTIONS - Clear Store
export const thunk_action_clear = () => {
  // 1 - Start fetch_post() - Start
  store.dispatch(fetch_post());
  // 2.0 - During - return
  return function(dispatch, getState) {
    console.log("dispatch: " + JSON.stringify(dispatch));
    console.log("getState: " + JSON.stringify(getState));
    dispatch(receive_post("Clear"));
    dispatch(receive_error());
    console.log("Cleaned");
    console.log(JSON.stringify(getState));
  };
}; */