const initialState = {
  searchResults: [],
  hotelDetails: null,
  bookingHotels: [],
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
    case "SET_BOOKING_HOTEL":
      return {
        ...state,
        bookingHotels: [...state.bookingHotels, action.payload],
      };
    case "CLEAR_BOOKING_HOTEL":
      return {
        ...state,
        bookingHotels: [],
      }
    default:
      return state;
  }
};

export default rootReducer;
