import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Framhouse Thai Banyan",
    image_url:
      "https://media.istockphoto.com/photos/classic-thai-food-dishes-picture-id1312283557?b=1&k=20&m=1312283557&s=170667a&w=0&h=hXAmitFiH9z0mK3GZdMDbkkcSl8Em84LIIlkHnVhpPE=",
    categories: ["Thai", "Cuisine"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
];

export default function RestaurantItems({ restaurantData }) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "#fff" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = ({ image }) => {
  const [fav, setFav] = useState(false);
  return (
    <>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity
        style={{ position: "absolute", top: 20, right: 20 }}
        onPress={() => setFav(!fav)}
      >
        <MaterialCommunityIcons
          name={fav ? "heart" : "heart-outline"}
          size={25}
          color={fav ? "red" : "#eee"}
        />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontSize: 13, color: "grey" }}>35-45 · min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: 30,
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
