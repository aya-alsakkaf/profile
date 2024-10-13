import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Profile from "./src/Profile";

const App = () => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "lightblue",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <View
    //     style={{
    //       height: 350,
    //       backgroundColor: "white",
    //       width: 350,
    //       borderRadius: 22,
    //     }}
    //   >
    //     <View
    //       style={{
    //         flex: 2,
    //         alignItems: "center",
    //         padding: 10,
    //         gap: 10,
    //       }}
    //     >
    //       <Image
    //         source={require("./assets/profile.webp")}
    //         style={{ height: 100, width: 100, borderRadius: 100 }}
    //       />

    //       <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rita Correia</Text>
    //       <Text style={{ fontSize: 16, color: "gray", marginBottom: 10 }}>
    //         London
    //       </Text>

    //       <View
    //         style={{ backgroundColor: "grey", width: "100%", height: 1 }}
    //       ></View>
    //     </View>
    //     <View
    //       style={{
    //         flex: 1,
    //         backgroundColor: "white",
    //         flexDirection: "row",
    //         justifyContent: "space-around",
    //         alignItems: "center",
    //       }}
    //     >
    //       <View>
    //         <Text>80K</Text>
    //         <Text>Followers</Text>
    //       </View>
    //       <View>
    //         <Text>80K</Text>
    //         <Text>Followers</Text>
    //       </View>
    //       <View>
    //         <Text>80K</Text>
    //         <Text>Followers</Text>
    //       </View>
    //     </View>
    //   </View>
    // </View>
    <Profile />
  );
};

const styles = StyleSheet.create({});

export default App;
