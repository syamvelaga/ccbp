import {useState} from 'react'

import './App.css'

import RestoApp from './components/RestoApp'
import MyContext from './context/MyContext'

const App = () => {
  const [currentDishList, setCurrentDishList] = useState({})
  const [cartItem, updatedCartItem] = useState(0)

  const updateCurrentDishList = currentList => {
    setCurrentDishList(currentList)
  }

  const increaseCartItem = () => {
    updatedCartItem(prevItem => prevItem + 1)
  }

  const decreaseCartItem = () => {
    updatedCartItem(prevItem => prevItem - 1)
  }

  return (
    <MyContext.Provider
      value={{
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
