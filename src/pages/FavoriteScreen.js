import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../redux/actions/hotelAction";

const FavoriteScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const favoriteHotels = useSelector((state) => state.hotels.favoriteHotels);

  const handleFavorite = (hotel) => {
    // Remove from favorites
    dispatch(removeFromFavorites(hotel));
  };

  return (
    <ScrollView style={styles.container}>
      {favoriteHotels.map((hotel) => (
        <Pressable key={hotel.id} style={styles.cardContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome
              name="heart"
              size={24}
              color="red"
              onPress={() => handleFavorite(hotel)}
            />
          </View>
          <Image
            source={
              hotel.media && hotel.media.url ? { uri: hotel.media.url } : null
            }
            style={styles.hotelImage}
          />
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Text style={styles.hotelName}>{hotel.name}</Text>
              <View style={{ marginLeft: 0, flexDirection: "row", gap: 4 }}>
                <AirbnbRating
                  count={5}
                  defaultRating={hotel.starRating}
                  size={14}
                  showRating={false}
                  isDisabled
                />
                <Text>{hotel.starRating}</Text>
              </View>
              <View style={styles.locationContainer}>
                <FontAwesome name="map-marker" size={16} color="black" />
                <Text style={styles.location}>
                  {hotel.location &&
                    hotel.location.address &&
                    hotel.location.address.cityName}
                </Text>
              </View>
            </View>
            <Text style={styles.price}>{hotel.ratesSummary.minPrice}</Text>
            <Text> /per night</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  cardContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#EEF5FF",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  hotelImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContent: {
    flex: 1,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 16,
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginLeft: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "tomato",
  },
});

export default FavoriteScreen;
