let defaultState = {
  selectedItems: {
    items: [],
    restaurantName: "",
  },
};

// why must be `let` type??? why not just `export default const`???
export default function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        // isn't action.payload includes the restaurantName here?????
        restaurantName: action.payload.restaurantName,
      };

      console.log("👉", newState);
      return newState;
    }
    case "REMOVE_FROM_CART": {
      let newState = { ...state };
      newState.selectedItems = {
        items: newState.selectedItems.items.filter(
          (item) => item.title !== action.payload.title
        ),
        restaurantName: action.payload.restaurantName,
      };

      console.log("🤞", newState);
      return newState;
    }
    default:
      return state;
  }
}
