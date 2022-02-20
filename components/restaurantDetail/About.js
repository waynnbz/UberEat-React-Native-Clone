import { View, Text, Image } from "react-native";
import React from "react";

export default function About({ route }) {
  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" · ");

  const description = `${formattedCategories} ${
    price ? " · " + price : ""
  } · 🎫 · ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "700",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {description}
  </Text>
);
