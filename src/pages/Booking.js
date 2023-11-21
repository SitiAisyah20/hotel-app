import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// import { Picker } from "@react-native-picker/picker";
import useHideTabBar from "../hooks/useHideTabBar";
import { useDispatch, useSelector } from "react-redux";
import { setBookingHotel } from "../redux/actions/hotelAction";
import { CommonActions } from "@react-navigation/native";

const Booking = ({ navigation, route }) => {
  const { user } = useSelector((state) => state.user);
  const { hotel, hotelId, price } = route.params;
  const checkInDate = new Date(route.params.checkInDate);
  const checkOutDate = new Date(route.params.checkOutDate);
  const [name, setName] = useState(`${user.firstName} ${user.lastName}`);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);
  // const [countryCode, setCountryCode] = useState("+62");
  const [numberOfNights, setNumberOfNights] = useState(0);
  useHideTabBar(navigation);
  const dispatch = useDispatch();

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const nightsDifference = Math.floor(
        (checkOutDate - checkInDate) / (24 * 60 * 60 * 1000)
      );
      setNumberOfNights(nightsDifference);
    }
  }, [checkInDate, checkOutDate]);

  const totalPayment = () => {
    return price * numberOfNights;
  };

  const handlePressCheckout = () => {
    if (!name || !email || !phoneNumber) {
      alert("Please fill in all required fields (Name, Email, Phone Number).");
      return;
    }
    const bookingHotel = {
      hotel,
      price,
    };
    dispatch(setBookingHotel(bookingHotel));

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Home page',
          }
        ],
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CONTACT INFORMATION</Text>
      <Text style={styles.textLabel}>Full name</Text>
      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.textLabel}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.textLabel}>Phone number</Text>
      <View style={styles.phoneContainer}>
        {/* <View style={styles.countryCodeContainer}>
          <Text style={styles.countryCodeText}>{countryCode}</Text>
        </View> */}
        {/* <Picker
          style={styles.picker}
          selectedValue={countryCode}
          onValueChange={(itemValue) => setCountryCode(itemValue)}
        >
          <Picker.Item label="Indonesia (+62)" value="+62" />
          <Picker.Item label="United States (+1)" value="+1" />
          <Picker.Item label="United Kingdom (+44)" value="+44" />
          <Picker.Item label="Australia (+61)" value="+61" />
          <Picker.Item label="China (+86)" value="+86" />
        </Picker> */}
        <TextInput
          style={[styles.input, styles.phoneInput]}
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.textTitle}>BOOKING SUMMARY</Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.textSubtitle}>
          Number of nights: {numberOfNights} nights
        </Text>
        <View style={styles.underline} />
        <View style={styles.priceInformationContainer}>
          <Text style={styles.textTotal}>Total Payment</Text>
          <Text style={styles.textPrice}>$ {totalPayment()}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={handlePressCheckout}
      >
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EEF5FF",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
    marginBottom: 15,
  },
  textSubtitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    fontSize: 15,
    borderRadius: 7,
    marginVertical: 5,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    backgroundColor: "#fff",
    width: 40,
  },
  countryCodeContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 7,
  },
  countryCodeText: {
    fontSize: 15,
  },
  phoneInput: {
    flex: 1,
  },
  summaryContainer: {
    borderRadius: 7,
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 20,
  },
  priceInformationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  textPrice: {
    fontSize: 18,
    color: "tomato",
    fontWeight: "bold",
  },
  textTotal: {
    fontSize: 18,
    fontWeight: "bold",
  },
  underline: {
    borderBottomWidth: 2,
    marginTop: 10,
  },
  checkoutButton: {
    backgroundColor: "tomato",
    paddingVertical: 15,
    borderRadius: 7,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Booking;
