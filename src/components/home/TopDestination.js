import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { topDestination } from "../../utils/city";

export default function TopDestination() {
  return (
    <>
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
});
