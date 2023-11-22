import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../redux/actions/hotelAction";
import Container from "../components/layout/Container";

const FavoriteScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const favoriteHotels = useSelector((state) => state.hotels.favoriteHotels);

  const handleFavorite = (hotel) => {
    // Remove from favorites
    dispatch(removeFromFavorites(hotel.hotelId));
  };

  const renderHotelItem = ({ item }) => (
    <Container key={item.hotelId}>
      <Pressable style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome
            name="heart"
            size={24}
            color="red"
            onPress={() => handleFavorite(item)}
          />
        </View>
        <Image
          source={
            item.media && item.media.url ? { uri: item.media.url } : null
          }
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
              <Text style={styles.location}>
                {item.location &&
                  item.location.address &&
                  item.location.address.cityName}
              </Text>
            </View>
          </View>
          <Text style={styles.price}>{item.ratesSummary.minPrice}</Text>
          <Text> /per night</Text>
        </View>
      </Pressable>
    </Container>
  );

  return (
    <FlatList
      style={styles.container}
      data={favoriteHotels}
      keyExtractor={(item) => item.hotelId.toString()}
      renderItem={renderHotelItem}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
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
