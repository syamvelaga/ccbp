import {useState, useEffect, useContext} from 'react'

import Header from '../Header'
import Categories from '../Categories'
import CurrentDishesList from '../CurrentDishesList'
import MyContext from '../../context/MyContext'
import './index.css'

const RestoApp = () => {
  const {updateRestaurantName} = useContext(MyContext)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Data not found')
        }
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
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [updateRestaurantName])

  if (loading) {
    return <div className="loading-error-card">Loading...</div>
  }

  if (error) {
    return <div className="loading-error-card">Error: {error}</div>
  }

  return (
    <div className="resto-container">
      <Header />
      <Categories reptoDishes={data} />
      <CurrentDishesList />
    </div>
  )
}

export default RestoApp
