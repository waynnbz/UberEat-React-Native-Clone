import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import OrderItem from "./OrderItem";

export default function ViewCart({ restaurantName }) {
  const [modalVisible, setModalVisible] = useState(false);

  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  // const selectTotal = createSelector(
  //   (state) => state.cartReducer.selectedItems.items,
  //   (items) =>
  //     items
  //       .map((item) => Number(item.price.replace("$", "")))
  //       .reduce((a, b) => a + b, 0)
  // );
  // const total = useSelector(selectTotal);

  // const totalUSD = total.toLocaleString("en", {
  //   style: "currency",
  //   currency: "USD",
  // });

  // const addOrderToFirebase = () => {
    
  // }

  const checkoutModalContent = (items, restaurantName) => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
          {items.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text>${total.toFixed(2)}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={styles.modalCheckoutButton}
              onPress={setModalVisible}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>Checkout</Text>
              <Text
                style={{
                  color: "#fff",
                  position: "absolute",
                  right: 20,
                  top: 20,
                  fontSize: 15,
                }}
              >
                ${total.toFixed(2)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        statusBarTranslucent={true}
      >
        {checkoutModalContent(items, restaurantName)}
      </Modal>
      {total > 0 && (
        <View
          style={{
            alignItems: "center",
            width: "100%",
            position: "absolute",
            bottom: 30,
            zIndex: 99,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: "black",
              marginTop: 20,
              padding: 15,
              borderRadius: 30,
              width: 300,
              position: "relative",
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
                position: "absolute",
                left: "50%",
                transform: [{ translateX: -30 }],
              }}
            >
              View Cart
            </Text>
            <Text style={{ color: "#fff", fontSize: 18, marginRight: 5 }}>
              ${total.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
    //an alpha channel => specifies the opacity for a color
  },

  modalCheckoutContainer: {
    backgroundColor: "#fff",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 10,
  },

  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  subtotalText: {
    textAlign: "left",
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 10,
  },

  modalCheckoutButton: {
    backgroundColor: "black",
    alignItems: "center",
    marginTop: 20,
    width: 300,
    padding: 15,
    borderRadius: 30,
    position: "relative",
  },
});
