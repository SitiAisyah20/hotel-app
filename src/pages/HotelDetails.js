import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelDetails } from "../redux/actions/hotelAction";
import ImageHotel from "../components/details/ImageHotel";
import Facility from "../components/details/Facility";
import Review from "../components/details/Review";

const HotelDetails = ({ navigation }) => {
  const route = useRoute();
  const { hotel, price } = route.params;
  const { isAuthenticated } = useSelector((state) => state.user);
  const checkInDate = new Date(route.params.checkInDate);
  const checkOutDate = new Date(route.params.checkOutDate);
  const dispatch = useDispatch();
  const hotelDetails = useSelector((state) => state.hotels.hotelDetails);

  useEffect(() => {
    if (hotel.hotelId) {
      dispatch(fetchHotelDetails(hotel.hotelId));
    }
  }, [hotel.hotelId]);

  const handlePressBooking = () => {
    if (!isAuthenticated) {
      navigation.navigate("Login");
    } else {
      navigation.navigate("Booking", {
        hotel,
        hotelId: hotel.hotelId,
        price,
        checkInDate: checkInDate.toISOString(),
        checkOutDate: checkOutDate.toISOString(),
      });
    }
    
  };

  return (
    <ScrollView style={styles.container}>
      {hotelDetails &&
        hotelDetails.images &&
        hotelDetails.images.length > 0 && (
          <ImageHotel
            image={hotelDetails.images[0].imageUrl}
            name={hotelDetails.name}
            city={hotelDetails.location.address.cityName.split(" ").pop()}
            rating={hotelDetails.starRating}
            price={price}
          />
        )}

      <View style={styles.aboutContainer}>
        <Text style={styles.textTitle}>About</Text>
        <Text>{hotelDetails?.description}</Text>
      </View>

      <View style={styles.facilitiesContainer}>
        <Text style={styles.textTitle}>Facilities</Text>
        <ScrollView horizontal>
          {hotelDetails?.hotelFeatures?.hotelAmenities?.map((facility, idx) => (
            <Facility key={idx} type={facility.type} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.reviewsContainer}>
        <Text style={styles.textTitle}>Reviews</Text>
        {hotelDetails?.guestReviews && hotelDetails.guestReviews.length > 0 ? (
          hotelDetails.guestReviews.map((review, idx) => (
            <Review
              key={idx}
              name={review.firstName}
              positive={review.reviewTextPositive}
              negative={review.reviewTextNegative}
              rating={parseFloat(review.overallScore) - 5}
            />
          ))
        ) : (
          <Text style={styles.noReview}>No reviews available...</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => handlePressBooking()}
      >
        <Text style={styles.bookButtonText}>Book this hotel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  aboutContainer: {
    marginVertical: 10,
  },
  facilitiesContainer: {
    marginVertical: 10,
  },
  reviewsContainer: {
    marginVertical: 10,
    flex: 1,
    marginBottom: 60,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  noReview: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  floatingButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    borderRadius: 7,
    marginBottom: 20,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HotelDetails;
