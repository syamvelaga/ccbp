import styled from 'styled-components'

export const DishesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
  padding: 20px;
`

export const ItemDetails = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  list-style-type: none;
  border: 1px solid #94979c;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 6px;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
`
export const ItemLogoContentCard = styled.div`
  display: flex;
  width: 44%;
  @media screen and (min-width: 768px) {
    width: 48%;
  }
`

export const ItemLogoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  min-width: 20px;
  border: ${props => {
    if (props.availability === true) {
      return '1px solid #08750c'
    }

    return '1px solid #ad2c0c'
  }};
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    height: 40px;
    min-width: 40px;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    height: 32px;
    min-width: 32px;
    margin-right: 16px;
  }
`

export const ItemLogo = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.availability === true) {
      return '#08750c'
    }

    return '#ad2c0c'
  }};
  border: none;
  @media screen and (min-width: 576px) {
    height: 26px;
    min-width: 26px;
  }
  @media screen and (min-width: 768px) {
    height: 20px;
    min-width: 20px;
  }
`

export const DishNameDespPriceCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const DishName = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    font-size: 26px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const DishCurrencyPriceCard = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    width: 160px;
  }
`

export const DishCurrency = styled.p`
  color: #3c403c;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 4px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
    margin-right: 12px;
  }
`

export const DishPrice = styled.p`
  color: #3c403c;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const DishDesp = styled.p`
  color: #94979c;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const DishCountCard = styled.div`
  background-color: #08750c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  height: 30px;
  border-radius: 18px;
  padding: 8px;
  @media screen and (min-width: 576px) {
    width: 120px;
    height: 50px;
    border-radius: 28px;
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 130px;
    height: 40px;
    border-radius: 24px;
    padding: 10px;
  }
`

export const DishIncreaseBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 576px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`
export const DishDecreaseBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 576px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const DishCount = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const DishCaloriesImageCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`

export const DishCalories = styled.p`
  color: #db9c37;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  align-self: center;
  margin-right: 10px;
  margin-left: 10px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
    margin-right: 20px;
    margin-left: 20px;
  }
`

export const DishImage = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 20px;
  border-radius: 6px;
  @media screen and (min-width: 576px) {
    height: 100px;
    width: 100px;
    margin-top: 20px;
    border-radius: 8px;
  }
  @media screen and (min-width: 768px) {
    height: 80%;
    width: 140px;
    margin-top: 20px;
    border-radius: 8px;
  }
`

export const DishAvailability = styled.p`
  color: #c93814;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const CustomizationAvailable = styled.p`
  color: #5163cf;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
