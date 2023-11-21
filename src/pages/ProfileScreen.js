import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { AirbnbRating, rating } from "react-native-elements";
import Container from "../components/layout/Container";
import { useSelector } from "react-redux";

export default function ProfileScreen({ navigation }) {
  const bookingHotels = useSelector((state) => state.hotels.bookingHotels);
  const { user } = useSelector((state) => state.user);

  return (
    <ScrollView style={styles.container}>
      <Container>
        {/*  */}
        <View style={[styles.header, styles.shadow]}>
          {/* detail profile */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: 120,
              marginBottom: 24,
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                }}
              />
            </View>
            <View
              style={{ flex: 2, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 4, textAlign: "center" }}>
                {`${user.firstName} ${user.lastName}`}
              </Text>
              <Text style={{ fontWeight: "bold", color: "gray" }}>
                {user.email}
              </Text>
            </View>
          </View>
          {/* detail bookking */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 16,
              borderTopColor: "#ccc",
              borderTopWidth: 2,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.textDetail}>Bookings</Text>
              <Text style={styles.textNumber}>{bookingHotels.length}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.textDetail}>Reviews</Text>
              <Text style={styles.textNumber}>0</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.textDetail}> Favorites</Text>
              <Text style={styles.textNumber}>0</Text>
            </View>
          </View>
        </View>

        {/* hotel card */}
        
          {bookingHotels.map((bookHotel, index) => (
            <View
              key={index}
              style={{
                height: 130,
                backgroundColor: "#EEF5FF",
                marginTop: 24,
                borderRadius: 20,
                padding: 14,
                flexDirection: "row",
                gap: 20,
              }}
            >
              <View style={{ flex: 1 }}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri:
                      bookHotel.hotel.media && bookHotel.hotel.media.url
                        ? bookHotel.hotel.media.url
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                  }}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <View style={{ flex: 2, justifyContent: "space-evenly" }}>
                  <Text style={[styles.textDetail]}>{bookHotel.hotel.name}</Text>
                  <Text>
                    {bookHotel.hotel.location &&
                      bookHotel.hotel.location.address &&
                      bookHotel.hotel.location.address.cityName
                      ? bookHotel.hotel.location.address.cityName
                      : "Location, Country"}
                  </Text>
                  <View style={{ marginLeft: 0, flexDirection: "row", gap: 4 }}>
                    <AirbnbRating
                      count={5}
                      defaultRating={
                        bookHotel.hotel.starRating
                          ? bookHotel.hotel.starRating
                          : 0
                      }
                      size={14}
                      showRating={false}
                      isDisabled
                    />
                    <Text>{bookHotel.hotel.starRating}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.textNumber}>${bookHotel.price}</Text>
                  <Text>/per night</Text>
                </View>
              </View>
            </View>
          ))}
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    borderRadius: 20,
    backgroundColor: "#EEF5FF",
    overflow: "hidden",
    padding: 16,
  },
  tinyLogo: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 20,
  },
  textDetail: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  textNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "tomato",
  },
});
