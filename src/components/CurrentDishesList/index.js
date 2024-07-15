import React, {useContext, useState, useEffect} from 'react'
import MyContext from '../../context/MyContext'

import {
  DishesList,
  ItemLogoContentCard,
  ItemDetails,
  ItemLogoCard,
  ItemLogo,
  DishNameDespPriceCard,
  DishName,
  DishCurrencyPriceCard,
  DishCurrency,
  DishPrice,
  DishDesp,
  DishCountCard,
  DishIncreaseBtn,
  DishDecreaseBtn,
  DishCount,
  DishCaloriesImageCard,
  DishCalories,
  DishImage,
  DishAvailability,
  CustomizationAvailable,
} from './styledComponents'

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
    <DishesList>
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
          <ItemDetails key={dishId}>
            <ItemLogoContentCard>
              <ItemLogoCard $availability={dishAvailability}>
                <ItemLogo $availability={dishAvailability}>{}</ItemLogo>
              </ItemLogoCard>
              <DishNameDespPriceCard>
                <DishName>{dishName}</DishName>
                <DishCurrencyPriceCard>
                  <DishCurrency>{dishCurrency}</DishCurrency>
                  <DishPrice>{dishPrice}</DishPrice>
                </DishCurrencyPriceCard>
                <DishDesp>{dishDescription}</DishDesp>
                {dishAvailability === false ? (
                  <DishAvailability>Not available</DishAvailability>
                ) : (
                  <DishCountCard>
                    <DishDecreaseBtn
                      type="button"
                      onClick={() => onClickDecreaseBtn(dishId)}
                    >
                      -
                    </DishDecreaseBtn>
                    <DishCount>{cartItem}</DishCount>
                    <DishIncreaseBtn
                      type="button"
                      onClick={() => onClickIncreaseBtn(dishId)}
                    >
                      +
                    </DishIncreaseBtn>
                  </DishCountCard>
                )}
                {addonCat.length !== 0 && (
                  <CustomizationAvailable>
                    Customizations available
                  </CustomizationAvailable>
                )}
              </DishNameDespPriceCard>
            </ItemLogoContentCard>
            <DishCaloriesImageCard>
              <DishCalories>{`${dishCalories} calories`}</DishCalories>
              <DishImage src={dishImage} alt={dishName} />
            </DishCaloriesImageCard>
          </ItemDetails>
        )
      })}
    </DishesList>
  )
}

export default CurrentDishesList
