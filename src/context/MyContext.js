import {createContext} from 'react'

const MyContext = createContext({
  restaurantName: '',
  updateRestaurantName: () => {},
  currentDishList: {},
  updateCurrentDishList: () => {},
  cartItem: 0,
  increaseCartItem: () => {},
  decreaseCartItem: () => {},
})

export default MyContext
