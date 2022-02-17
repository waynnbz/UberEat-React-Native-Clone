import { View, Text, Image } from "react-native";
import React from "react";

// const yelpRestaurantInfo = {
//   name: "Framhouse Thai Banyan",
//   image:
//     "https://media.istockphoto.com/photos/classic-thai-food-dishes-picture-id1312283557?b=1&k=20&m=1312283557&s=170667a&w=0&h=hXAmitFiH9z0mK3GZdMDbkkcSl8Em84LIIlkHnVhpPE=",
//   price: "$$$",
//   reviews: "1500",
//   rating: 4.5,
//   categories: [{ title: "Thai" }, { title: "Comfort Food" }],
// };

// const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

// const formattedCategories = categories.map((cat) => cat.title).join(" · ");

// const description = `${formattedCategories} ${
//   price ? " · " + price : ""
// } · 🎫 · ${rating} ⭐ (${reviews}+)`;

// const description = "Thai · Comfort Food · $$ · 🎫 · 4 ⭐ (2943+)";

export default function About({restaurantData}) {
  const { name, image_url: image, price, review_count: reviews, rating, categories } = restaurantData;

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
