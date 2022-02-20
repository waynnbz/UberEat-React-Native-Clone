import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
];

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) => {
    checkboxValue
      ? dispatch({
          type: "ADD_TO_CART",
          payload: { ...item, restaurantName: restaurantName },
        })
      : dispatch({
          type: "REMOVE_FROM_CART",
          payload: { ...item, restaurantName: restaurantName },
        });
  };

  // const isSelected = createSelector(
  //   (state) => state.cartReducer.selectedItems.items
  //   (items) => items.some(item => item.title === title )
  // );
  // unable to pass in props for evaluation here in createSelector

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (title, items) =>
    items.some((item) => item.title === title);

  return (
    <FlatList
      data={foods}
      renderItem={({ item: food }) => (
        <View>
          <View style={style.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{
                borderColor: "lightgray",
                borderRadius: 0,
              }}
              fillColor="green"
              isChecked={isFoodInCart(food.title, cartItems)}
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="horizontal"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const FoodInfo = ({ food }) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={style.titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({ food }) => (
  // why wrapped in a <View>
  <View>
    <Image
      source={{ uri: food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);

const style = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "700",
  },
});
