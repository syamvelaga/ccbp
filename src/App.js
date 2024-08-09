import {useState} from 'react'

import './App.css'

import RestoApp from './components/RestoApp'
import MyContext from './context/MyContext'

const App = () => {
  const [restaurantName, setRestaurantName] = useState('')
  const [currentDishCategory, setCurrentDishCategory] = useState('')
  const [currentDishList, setCurrentDishList] = useState({})
  const [restaurantData, setRestaurantData] = useState([])
  const [cartItem, setCartItem] = useState(0)

  const updateCurrentDishList = currentList => {
    setCurrentDishList(currentList)
  }

  const updateRestaurantName = resName => {
    setRestaurantName(resName)
  }

  const increaseQuantity = dishId => {
    const quantityUpdate = restaurantData.map(eachItem => {
      if (eachItem.menuCategoryId === currentDishCategory) {
        return {
          ...eachItem,
          categoryDishes: eachItem.categoryDishes.map(eachDish => {
            if (eachDish.dishId === dishId) {
              return {...eachDish, quantity: eachDish.quantity + 1}
            }
            return eachDish
          }),
        }
      }

      return eachItem
    })

    setRestaurantData(quantityUpdate)
  }

  const decreaseQuantity = dishId => {
    const quantityUpdate = restaurantData.map(eachItem => {
      if (eachItem.menuCategoryId === currentDishCategory) {
        return {
          ...eachItem,
          categoryDishes: eachItem.categoryDishes.map(eachDish => {
            if (eachDish.dishId === dishId) {
              return {...eachDish, quantity: eachDish.quantity - 1}
            }
            return eachDish
          }),
        }
      }

      return eachItem
    })

    setRestaurantData(quantityUpdate)
  }

  const updateRestaurantData = data => {
    setRestaurantData(data)
  }

  const updateCurrentDishCategory = dishCategoryId => {
    setCurrentDishCategory(dishCategoryId)
  }

  const updateCartItem = dishId => {
    const currentCategory = restaurantData.filter(
      eachItem => eachItem.menuCategoryId === currentDishCategory,
    )
    const {categoryDishes} = currentCategory[0]
    const currentDish = categoryDishes.filter(
      eachItem => eachItem.dishId === dishId,
    )
    const {quantity} = currentDish[0]
    setCartItem(prevState => prevState + quantity)
  }

  return (
    <MyContext.Provider
      value={{
        restaurantData,
        updateRestaurantData,
        currentDishCategory,
        updateCurrentDishCategory,
        restaurantName,
        updateRestaurantName,
        currentDishList,
        updateCurrentDishList,
        cartItem,
        updateCartItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      <RestoApp />
    </MyContext.Provider>
  )
}

export default App
