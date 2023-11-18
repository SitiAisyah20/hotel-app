import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-elements";

const FavoriteScreen = ({ navigation }) => {
  const favoriteHotels = [
    {
      id: 1,
      name: "Hotel ABC",
      image: require("../assets/jakarta.jpg"),
      rating: 4.5,
      location: "City Center",
      price: "$150",
    },
  ];

  return (
    <View style={styles.container}>
      {favoriteHotels.map((hotel) => (
        <Pressable key={hotel.id} style={styles.cardContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="heart" size={24} color="red" />
          </View>
          <Image source={hotel.image} style={styles.hotelImage} />
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Text style={styles.hotelName}>{hotel.name}</Text>
              <View style={{ marginLeft: 0, flexDirection: "row", gap: 4 }}>
                <AirbnbRating
                  count={5}
                  defaultRating={4.5}
                  size={14}
                  showRating={false}
                  isDisabled
                />
                <Text>{hotel.rating}</Text>
              </View>
              <View style={styles.locationContainer}>
                <FontAwesome name="map-marker" size={16} color="black" />
                <Text style={styles.location}> {hotel.location}</Text>
              </View>
            </View>
            <Text style={styles.price}>{hotel.price}</Text>
            <Text> /per night</Text>
          </View>
        </Pressable>
      ))}
    </View>
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
