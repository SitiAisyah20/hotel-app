import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";
import { searchHotels } from "../redux/actions/hotelAction";
import { AirbnbRating } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import TopDestination from "../components/home/TopDestination";
import PopularDestination from "../components/home/PopularDestination";

export default function HomeScreen({ navigation }) {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [showCheckInDatePicker, setShowCheckInDatePicker] = useState(false);
  const [showCheckOutDatePicker, setShowCheckOutDatePicker] = useState(false);
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.hotels.searchResults);

  const handleCheckInDateChange = (event, selectedDate) => {
    setShowCheckInDatePicker(false);
    if (selectedDate) {
      setCheckInDate(selectedDate);
    }
  };

  const handleCheckOutDateChange = (event, selectedDate) => {
    setShowCheckOutDatePicker(false);
    if (selectedDate) {
      setCheckOutDate(selectedDate);
    }
  };

  const handleSearch = () => {
    dispatch(searchHotels(location, checkInDate, checkOutDate));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="where do you want to go?"
          placeholderTextColor="black"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
      </View>
      {/* Date Check-In & Check-Out */}
      <View style={styles.inputContainer}>
        <Feather name="calendar" size={24} color="black" />
        <Pressable
          style={styles.dateInput}
          onPress={() => setShowCheckInDatePicker(true)}
        >
          <Text>{checkInDate.toLocaleDateString()}</Text>
        </Pressable>
        <Feather name="calendar" size={24} color="black" />
        <Pressable
          style={styles.dateInput}
          onPress={() => setShowCheckOutDatePicker(true)}
        >
          <Text>{checkOutDate.toLocaleDateString()}</Text>
        </Pressable>

        {showCheckInDatePicker && (
          <DateTimePicker
            value={checkInDate}
            mode="date"
            display="default"
            onChange={handleCheckInDateChange}
          />
        )}
        {showCheckOutDatePicker && (
          <DateTimePicker
            value={checkOutDate}
            mode="date"
            display="default"
            onChange={handleCheckOutDateChange}
          />
        )}
      </View>

      <Pressable style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchText}>Search</Text>
      </Pressable>

      {/* Search Results */}
      {searchResults &&
        searchResults.hotels &&
        searchResults.hotels.length > 0 &&
        searchResults.hotels.map((result) => (
          <Pressable key={result.hotelId} style={styles.cardContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name="heart-o" size={24} color="red" />
            </View>
            <Image
              source={
                result.media && result.media.url
                  ? { uri: result.media.url }
                  : null
              }
              style={styles.hotelImage}
            />

            <View style={styles.cardContent}>
              <View style={styles.leftContent}>
                <Text style={styles.hotelName}>{result.name}</Text>
                <View style={{ marginLeft: 0, flexDirection: "row", gap: 4 }}>
                  <AirbnbRating
                    count={5}
                    defaultRating={result.starRating}
                    size={14}
                    showRating={false}
                    isDisabled
                  />
                  <Text>{result.starRating}</Text>
                </View>
                <View style={styles.locationContainer}>
                  <FontAwesome name="map-marker" size={16} color="black" />
                  {result.location && result.location.address && (
                    <Text style={styles.location}>
                      {" "}
                      {result.location.address.cityName}
                    </Text>
                  )}
                </View>
              </View>
              <Text style={styles.price}>${result.ratesSummary.minPrice}</Text>
              <Text> /per night</Text>
            </View>
          </Pressable>
        ))}

      {/* Top Destination */}
      <TopDestination />

      {/* Popular Destination */}
      <PopularDestination />
    </ScrollView>
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
  searchButton: {
    backgroundColor: "tomato",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  searchText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  },
  cardContainer: {
    marginTop: 30,
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
