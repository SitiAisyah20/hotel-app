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
import { topDestination, popularDestination } from "../utils/city";

export default function HomeScreen({ navigation }) {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [showCheckInDatePicker, setShowCheckInDatePicker] = useState(false);
  const [showCheckOutDatePicker, setShowCheckOutDatePicker] = useState(false);

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

  const handleSearch = () => {};

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
          <Text>{(checkInDate ?? new Date()).toLocaleDateString()}</Text>
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
      <Text style={styles.heading}>Top Destination</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {topDestination.map((top) => (
          <View key={top.id} style={styles.cardContainer}>
            <Image source={top.image} style={styles.imageTop} />
            <View style={styles.imageOverlay}>
              <Text style={styles.titleTop}>{top.name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Popular Destination */}
      <Text style={styles.heading}>Popular Destination</Text>
      {popularDestination.map((popular) => (
        <View key={popular.id} style={styles.cardContainer}>
          <Image source={popular.image} style={styles.imagePop} />
          <View style={styles.overlayPop}>
            <Text style={styles.titlePop}>{popular.name}</Text>
          </View>
        </View>
      ))}
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
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageTop: {
    width: 200,
    height: 150,
    resizeMode: "cover",
  },
  titleTop: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 7,
    color: "white",
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  imagePop: {
    width: "auto",
    height: 250,
    resizeMode: "cover",
  },
  titlePop: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 7,
  },
  overlayPop: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 10,
  },
});
