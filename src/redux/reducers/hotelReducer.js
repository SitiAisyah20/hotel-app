const initialState = {
  searchResults: [],
  hotelDetails: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload,
      };
    case "SET_HOTEL_DETAILS":
      return {
        ...state,
        hotelDetails: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
