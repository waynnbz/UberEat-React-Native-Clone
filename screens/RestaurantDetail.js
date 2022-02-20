import { View, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import React from "react";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

export default function RestaurantDetail({ navigation, route }) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
