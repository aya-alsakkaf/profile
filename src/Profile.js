import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/profile.webp")} // Your profile image path
          style={styles.avatar}
        />
        <Text style={styles.name}>Rita Correia</Text>
        <Text style={styles.location}>London</Text>
        <View style={styles.divider} />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>80K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>803K</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>1.4K</Text>
            <Text style={styles.statLabel}>Photos</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00697A",
  },
  cardBackground: {
    width: 300,
    height: 400,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    opacity: 0.6,
  },
  card: {
    backgroundColor: "white",
    width: 250,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  avatar: {
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  location: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 12,
    color: "#777",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ddd",
    marginBottom: 10,
  },
});

export default Profile;
