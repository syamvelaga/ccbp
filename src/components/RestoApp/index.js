import {useState, useEffect, useContext} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import Categories from '../Categories'
import CurrentDishesList from '../CurrentDishesList'
import MyContext from '../../context/MyContext'
import './index.css'

const apiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loader: 'LOADER',
}

const RestoApp = () => {
  const {updateRestaurantName} = useContext(MyContext)
  const [currentApiStatus, setCurrentApiStatus] = useState(apiStatus.loader)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

      const response = await fetch(url)
      if (response.ok) {
        const responseData = await response.json()
        const restaurantName = responseData[0].restaurant_name
        updateRestaurantName(restaurantName)
        let tableMenuList = responseData[0].table_menu_list
        tableMenuList = tableMenuList.map(eachItem => ({
          categoryDishes: eachItem.category_dishes,
          menuCategory: eachItem.menu_category,
          menuCategoryId: eachItem.menu_category_id,
          menuCategoryImage: eachItem.menu_category_image,
          nexturl: eachItem.nexturl,
        }))
        setData(tableMenuList)
        setCurrentApiStatus(apiStatus.success)
      } else {
        setData([])
        setCurrentApiStatus(apiStatus.failure)
      }
    }

    fetchData()
  }, [currentApiStatus, updateRestaurantName])

  const renderSuccessView = () => (
    <div className="resto-container">
      <Header />
      <Categories reptoDishes={data} />
      <CurrentDishesList />
    </div>
  )

  const onClickRetry = () => {
    setCurrentApiStatus(apiStatus.loader)
  }

  const renderFailureView = () => (
    <div className="common-container">
      <p className="not-found-heading">Not Found</p>
      <button onClick={onClickRetry} type="button" className="retry-button">
        Retry
      </button>
    </div>
  )

  const renderApiStatus = () => {
    if (currentApiStatus === apiStatus.success) {
      return renderSuccessView()
    }

    return renderFailureView()
  }

  const renderLoader = () => (
    <div className="common-container">
      <Loader type="ThreeDots" height={80} width={80} color="black" />
    </div>
  )

  return (
    <div>
      {currentApiStatus === apiStatus.loader
        ? renderLoader()
        : renderApiStatus()}
    </div>
  )
}

export default RestoApp
