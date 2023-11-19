import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";
import { searchHotels } from "../redux/actions/hotelAction";
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
    navigation.navigate("Search Results", {
      location,
      checkInDate,
      checkOutDate,
      searchResults,
    });
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
});
