import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  fetchHotelDetails,
  removeFromFavorites,
  searchHotels,
} from "../redux/actions/hotelAction";
import HotelCard from "../components/home/HotelCart";
import useHideTabBar from "../hooks/useHideTabBar";

export default function SearchResult({ navigation, route }) {
  const { location } = route.params;
  const checkInDate = new Date(route.params.checkInDate);
  const checkOutDate = new Date(route.params.checkOutDate);
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.hotels.searchResults);
  const [loading, setLoading] = useState(true);
  const favoriteHotels = useSelector((state) => state.hotels.favoriteHotels);
  const { isAuthenticated } = useSelector((state) => state.user);
  useHideTabBar(navigation);

  const handleCardPress = (hotel) => {
    dispatch(fetchHotelDetails(hotel.hotelId));
    navigation.navigate("Hotel Details", {
      hotel,
      price: hotel.ratesSummary.minPrice,
      checkInDate: checkInDate.toISOString(),
      checkOutDate: checkOutDate.toISOString(),
    });
  };

  useEffect(() => {
    dispatch(searchHotels(location, checkInDate, checkOutDate))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  const handleFavorite = (hotel) => {
    if (!isAuthenticated) {
      navigation.navigate("Login");
    } else {
      if (favoriteHotels.some((favHotel) => favHotel.hotelId === hotel.hotelId)) {
        dispatch(removeFromFavorites(hotel.hotelId));
      } else {
        dispatch(addToFavorites(hotel));
      }
    }
  };

  const renderHotelCard = ({ item }) => (
    <HotelCard
      item={item}
      handleCardPress={handleCardPress}
      handleFavorite={handleFavorite}
      isFavorite={favoriteHotels.some((hotel) => hotel.hotelId === item.hotelId)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="where do you want to go?"
          placeholderTextColor="black"
          value={location}
        />
      </View>
      {/* Date Check-In & Check-Out */}
      <View style={styles.inputContainer}>
        <Feather name="calendar" size={24} color="black" />
        <Pressable style={styles.dateInput}>
          <Text>{checkInDate.toLocaleDateString()}</Text>
        </Pressable>
        <Feather name="calendar" size={24} color="black" />
        <Pressable style={styles.dateInput}>
          <Text>{checkOutDate.toLocaleDateString()}</Text>
        </Pressable>
      </View>

      {/* Search Results */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="tomato" />
        </View>
      ) : (
        <FlatList
          data={searchResults?.hotels || []}
          keyExtractor={(item) => String(item.hotelId)}
          renderItem={renderHotelCard}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFC72C",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  dateInput: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
  },
  loadingContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
