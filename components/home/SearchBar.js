import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityHandler }) {
  const [input, setInput] = useState("");

  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#eee",
        padding: 7,
        borderRadius: 50,
      }}
    >
      <View style={{ marginRight: 5 }}>
        <Ionicons name="location-sharp" size={24}></Ionicons>
      </View>
      <TextInput
        placeholder="Search"
        onChangeText={setInput}
        style={{
          backgroundColor: "#eee",
          borderRadius: 30,
          fontWeight: "700",
          width: 250,
        }}
      />
      <TouchableOpacity
        onPress={() => cityHandler(input)}
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          padding: 9,
          borderRadius: 30,
          alignItems: "center",
        }}
      >
        <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
{
  /* <GooglePlacesAutocomplete
        query={{ key: "" }}
        onPress={(data, details = null) => {
          console.log(data.description);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24}></Ionicons>
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      /> */
}
