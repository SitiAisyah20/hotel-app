const initialState = {
  searchResults: [],
  hotelDetails: null,
  bookingHotels: [],
  favoriteHotels: [],
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
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favoriteHotels: [...state.favoriteHotels, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      const updatedFavorites = state.favoriteHotels.filter(
        (hotel) => hotel.hotelId !== action.payload
      );
      return {
        ...state,
        favoriteHotels: updatedFavorites,
      };
    default:
      return state;
  }
};

export default rootReducer;
