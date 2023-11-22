import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { popularDestination } from "../../utils/city";

export default function PopularDestination() {
  const renderPopularDestinationItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={styles.imagePop} />
      <View style={styles.overlayPop}>
        <Text style={styles.titlePop}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <Text style={styles.heading}>Popular Destination</Text>
      <FlatList
        data={popularDestination}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPopularDestinationItem}
        vertical
        showsHorizontalScrollIndicator={false}
      />
    </View>
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
