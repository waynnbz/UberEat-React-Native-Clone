import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabs from "../components/BottomTabs";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
  "mgaIs-4vgYpeKNL2Z201gvfdrJpIzwbvBg1g7m2KxqACEvlajTWfhiqK30No6UvTrYtz2Tkr1zXhq-fuovqKspAfdDi-BVTBYMuGy3zev4csmFlz_M2dGN0NGqIDYnYx";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("SantaMonica");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
