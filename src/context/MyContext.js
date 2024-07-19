import React, {createContext} from 'react'

const MyContext = React.createContext({
  restaurantName: '',
  updateRestaurantName: () => {},
  currentDishList: {},
  updateCurrentDishList: () => {},
  cartItem: 0,
  increaseCartItem: () => {},
  decreaseCartItem: () => {},
})

export default MyContext
