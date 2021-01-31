const initialState = {
  isFetching: false,
  isError: false,
  currentIngredientID: "", 
  ingredientDetails: {}, 
  ingredientCocktails: {},
  cocktailsDetails: {},
};

const fetchReducers = (state = initialState, action) => {
  switch (action.type) {

    // INGREDIENT_DETAILS
    case "FETCHING_INGREDIENT_DETAILS":
      return Object.assign({}, state, {
        ingredientDetails: action.data,
        isFetching: true,
        isError: false
      });
    case "FETCHED_INGREDIENT_DETAILS":
      return Object.assign({}, state, {
        currentIngredientID: action.data.ingredients[0].idIngredient,
        ingredientDetails: action.data,
        isFetching: false,
        isError: false
      });
    case "ERROR_INGREDIENT_DETAILS":
      return Object.assign({}, state, {
        ingredientDetails: action.data,
        isFetching: false,
        isError: true
      });

    // INGREDIENT_COCKTAILS
    case "FETCHING_INGREDIENT_COCKTAILS":
      return Object.assign({}, state, {
        ingredientCocktails: action.data,
        isFetching: true,
        isError: false
      });
    case "FETCHED_INGREDIENT_COCKTAILS":
      return Object.assign({}, state, {
        ingredientCocktails: action.data,
        isFetching: false,
        isError: false
      });
    case "ERROR_INGREDIENT_COCKTAILS":
      return Object.assign({}, state, {
        ingredientCocktails: action.data,
        isFetching: false,
        isError: true
      });

    // Default?
    default:
      return state;
  }
};

export default fetchReducers;