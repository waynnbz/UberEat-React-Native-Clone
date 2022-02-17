import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function RestaurantDetail({ route }) {
  return (
    <View>
      <About restaurantData={route.params.restaurantData} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}
