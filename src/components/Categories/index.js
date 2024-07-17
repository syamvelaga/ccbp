import React, {useState, useRef, useEffect, useContext} from 'react'
import MyContext from '../../context/MyContext'
import './index.css'

const Categories = props => {
  const {reptoDishes} = props
  let idCount = 0
  const menuCategory = reptoDishes.map(eachItem => {
    idCount += 1
    return {id: idCount, menuName: eachItem.menuCategory}
  })
  const items = [...menuCategory]
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const {updateCurrentDishList} = useContext(MyContext)

  const onClickCategoryBtn = event => {
    const index = parseInt(event.currentTarget.dataset.index, 10)
    setCurrentIndex(index)
  }

  useEffect(() => {
    updateCurrentDishList(reptoDishes[0])
  }, [])

  useEffect(() => {
    updateCurrentDishList(reptoDishes[currentIndex])
  }, [currentIndex])

  useEffect(() => {
    const container = scrollContainerRef.current
    const itemWidth = container.clientWidth / 2
    container.style.transition = 'transform 0.3s ease-in-out'

    const translateX = -currentIndex * itemWidth

    container.style.transform = `translateX(${translateX}px)`

    if (currentIndex === items.length) {
      setTimeout(() => {
        container.style.transition = 'none'
        container.style.transform = `translateX(0px)`
        setCurrentIndex(0)
      }, 300)
    } else if (currentIndex === -1) {
      setTimeout(() => {
        container.style.transition = 'none'
        container.style.transform = `translateX(${
          -itemWidth * (items.length - 1)
        }px)`
        setCurrentIndex(items.length - 1)
      }, 300)
    }
  }, [currentIndex, items.length])

  const handleClick = index => {
    setCurrentIndex(index)
    updateCurrentDishList(reptoDishes[index])
  }

  return (
    <>
      <div className="horizontal-scroll-container">
        <div className="content" ref={scrollContainerRef}>
          {items.map((item, index) => (
            <button
              key={item.id}
              className={`item ${index === currentIndex ? 'selected' : ''}`}
              onClick={() => handleClick(index)}
            >
              {item.menuName}
            </button>
          ))}
          {/* Duplicate first and last items for circular navigation */}
          <button
            key="first-duplicate"
            className={`item ${
              currentIndex === items.length ? 'selected' : ''
            }`}
            onClick={() => handleClick(0)}
          >
            {items[0].menuName}
          </button>
          <button
            key="last-duplicate"
            className={`item ${currentIndex === -1 ? 'selected' : ''}`}
            onClick={() => handleClick(items.length - 1)}
          >
            {items[items.length - 1].menuName}
          </button>
        </div>
      </div>
      <ul className="categories-list">
        {items.map((item, index) => (
          <li key={item.id} className="categorie-item">
            <button
              data-index={index}
              onClick={onClickCategoryBtn}
              className={`categorie-btn ${
                index === currentIndex ? 'selected' : ''
              }`}
              type="button"
            >
              {item.menuName}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Categories
