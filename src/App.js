import {useState} from 'react'

import './App.css'

import RestoApp from './components/RestoApp'
import MyContext from './context/MyContext'

const App = () => {
  const [restaurantName, setRestaurantName] = useState('')
  const [currentDishCategory, setCurrentDishCategory] = useState('')
  const [currentDishList, setCurrentDishList] = useState({})
  const [restaurantData, setRestaurantData] = useState([])
  const [cartItem, updatedCartItem] = useState(0)

  const updateCurrentDishList = currentList => {
    setCurrentDishList(currentList)
  }

  const updateRestaurantName = resName => {
    setRestaurantName(resName)
  }

  const increaseCartItem = dishId => {
    updatedCartItem(prevItem => prevItem + 1)
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

  const decreaseCartItem = dishId => {
    updatedCartItem(prevItem => prevItem - 1)
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
        increaseCartItem,
        decreaseCartItem,
      }}
    >
      <RestoApp />
    </MyContext.Provider>
  )
}

export default App
