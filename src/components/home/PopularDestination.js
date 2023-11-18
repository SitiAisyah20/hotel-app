import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { popularDestination } from "../../utils/city";

export default function PopularDestination() {
  return (
    <>
      <Text style={styles.heading}>Popular Destination</Text>
      {popularDestination.map((popular) => (
        <View key={popular.id} style={styles.cardContainer}>
          <Image source={popular.image} style={styles.imagePop} />
          <View style={styles.overlayPop}>
            <Text style={styles.titlePop}>{popular.name}</Text>
          </View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
    backgroundColor: "#EEF5FF",
    padding: 10,
  },
});
