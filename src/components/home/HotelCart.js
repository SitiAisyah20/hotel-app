import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { AirbnbRating } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const HotelCard = ({ item, handleCardPress, handleFavorite, isFavorite }) => (
  <Pressable style={styles.cardContainer} onPress={() => handleCardPress(item)}>
    <View style={styles.iconContainer}>
      <FontAwesome
        name={isFavorite ? "heart" : "heart-o"}
        size={24}
        color="red"
        onPress={() => handleFavorite(item)}
      />
    </View>
    <Image
      source={item.media && item.media.url ? { uri: item.media.url } : null}
      style={styles.hotelImage}
    />

    <View style={styles.cardContent}>
      <View style={styles.leftContent}>
        <Text style={styles.hotelName}>{item.name}</Text>
        <View style={{ marginLeft: 0, flexDirection: "row", gap: 4 }}>
          <AirbnbRating
            count={5}
            defaultRating={item.starRating}
            size={14}
            showRating={false}
            isDisabled
          />
          <Text>{item.starRating}</Text>
        </View>
        <View style={styles.locationContainer}>
          <FontAwesome name="map-marker" size={16} color="black" />
          {item.location && item.location.address && (
            <Text style={styles.location}>
              {" "}
              {item.location.address.cityName}
            </Text>
          )}
        </View>
      </View>
      <Text style={styles.price}>${item.ratesSummary.minPrice}</Text>
      <Text> /per night</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 30,
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
    width: "auto",
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

export default HotelCard;
