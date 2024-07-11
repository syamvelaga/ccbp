import {useState, useEffect} from 'react'

import Header from '../Header'
import Categories from '../Categories'
import CurrentDishesList from '../CurrentDishesList'

import {RestoContainer} from './styledComponents'

const RestoApp = () => {
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
        let tableMenuList = responseData[0].table_menu_list
        tableMenuList = tableMenuList.map(eachItem => ({
          categoryDishes: eachItem.category_dishes,
          menuCategory: eachItem.menu_category,
          menuCategoryId: eachItem.menu_category_id,
          menuCategoryImage: eachItem.menu_category_image,
          nexturl: eachItem.nexturl,
        }))
        setData(tableMenuList)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <RestoContainer>
      <Header />
      <Categories reptoDishes={data} />
      <CurrentDishesList />
    </RestoContainer>
  )
}

export default RestoApp
