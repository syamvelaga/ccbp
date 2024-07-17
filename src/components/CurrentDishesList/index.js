import React, {useContext, useState, useEffect} from 'react'
import MyContext from '../../context/MyContext'
import './index.css'

const CurrentDishesList = () => {
  const {currentDishList, increaseCartItem, decreaseCartItem} =
    useContext(MyContext)
  const {categoryDishes} = currentDishList

  const [categoryDishesList, setCategoryDishesList] = useState([])

  useEffect(() => {
    if (categoryDishes !== undefined) {
      setCategoryDishesList(
        categoryDishes.map(eachItem => ({
          addonCat: eachItem.addonCat,
          dishAvailability: eachItem.dish_Availability,
          dishType: eachItem.dish_Type,
          dishCalories: eachItem.dish_calories,
          dishCurrency: eachItem.dish_currency,
          dishDescription: eachItem.dish_description,
          dishId: eachItem.dish_id,
          dishImage: eachItem.dish_image,
          dishName: eachItem.dish_name,
          dishPrice: eachItem.dish_price,
          nexturl: eachItem.nexturl,
          cartItem: 0,
        })),
      )
    }
  }, [categoryDishes])

  const onClickIncreaseBtn = dishId => {
    setCategoryDishesList(prevState =>
      prevState.map(eachItem =>
        eachItem.dishId === dishId
          ? {...eachItem, cartItem: eachItem.cartItem + 1}
          : eachItem,
      ),
    )
    increaseCartItem()
  }

  const onClickDecreaseBtn = dishId => {
    const currentDish = categoryDishesList.find(
      eachDish => eachDish.dishId === dishId,
    )
    if (currentDish.cartItem > 0) {
      setCategoryDishesList(prevState =>
        prevState.map(eachItem =>
          eachItem.dishId === dishId
            ? {
                ...eachItem,
                cartItem: eachItem.cartItem - 1,
              }
            : eachItem,
        ),
      )
      decreaseCartItem()
    }
  }

  return (
    <ul className="dishes-list">
      {categoryDishesList.map(eachItem => {
        const {
          dishId,
          dishName,
          dishPrice,
          dishCurrency,
          dishDescription,
          dishImage,
          dishCalories,
          addonCat,
          dishAvailability,
          cartItem,
        } = eachItem

        return (
          <li className="item-details" key={dishId}>
            <div className="item-logo-content-card">
              <div
                className={`item-logo-card ${
                  dishAvailability ? 'available' : 'not-available'
                }`}
              >
                <div
                  className={`item-logo ${
                    dishAvailability ? 'available' : 'not-available'
                  }`}
                >
                  {}
                </div>
              </div>
              <div className="dish-name-desp-price-card">
                <h1 className="dish-name">{dishName}</h1>
                <div className="dish-currency-price-card">
                  <p className="dish-currency">{dishCurrency}</p>
                  <p className="dish-price">{dishPrice}</p>
                </div>
                <p className="dish-desp">{dishDescription}</p>
                {dishAvailability === false ? (
                  <p className="dish-availability">Not available</p>
                ) : (
                  <div className="dish-count-card">
                    <button
                      className="dish-decrease-btn"
                      type="button"
                      onClick={() => onClickDecreaseBtn(dishId)}
                    >
                      -
                    </button>
                    <p className="dish-count">{cartItem}</p>
                    <button
                      className="dish-increase-btn"
                      type="button"
                      onClick={() => onClickIncreaseBtn(dishId)}
                    >
                      +
                    </button>
                  </div>
                )}
                {addonCat.length !== 0 && (
                  <p className="customization-available">
                    Customizations available
                  </p>
                )}
              </div>
            </div>
            <div className="dish-calories-image-card">
              <p className="dish-calories">{`${dishCalories} calories`}</p>
              <img className="dish-image" src={dishImage} alt={dishName} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default CurrentDishesList
