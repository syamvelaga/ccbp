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
  const [showArrow, setShowArrow] = useState(false)
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

    // Show or hide the arrow based on the current index
    if (currentIndex === items.length - 1) {
      setShowArrow(true)
    } else {
      setShowArrow(false)
    }
  }, [currentIndex])

  const handleClick = index => {
    setCurrentIndex(index)
  }

  const scrollToFirst = () => {
    setCurrentIndex(0)
    setShowArrow(false) // Hide the arrow after resetting
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
        </div>
        {showArrow && (
          <button className="scroll-to-first" onClick={scrollToFirst}>
            &larr; {/* Right arrow symbol */}
          </button>
        )}
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
