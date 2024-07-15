import React, {useState, useRef, useEffect, useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import MyContext from '../../context/MyContext'
import {
  HorizontalScrollContainer,
  Content,
  Item,
  CategoriesList,
  CategorieItem,
  CategorieBtn,
} from './styledComponents'

const Categories = props => {
  const {reptoDishes} = props
  const menuCategory = reptoDishes.map(eachItem => ({
    id: uuidv4(),
    menuName: eachItem.menuCategory,
  }))
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
      <HorizontalScrollContainer>
        <Content ref={scrollContainerRef}>
          {items.map((item, index) => (
            <Item
              key={item.id}
              onClick={() => handleClick(index)}
              selected={index === currentIndex}
            >
              {item.menuName}
            </Item>
          ))}
          {/* Duplicate first and last items for circular navigation */}
          <Item
            key="first-duplicate"
            onClick={() => handleClick(0)}
            selected={currentIndex === items.length}
          >
            {items[0].menuName}
          </Item>
          <Item
            key="last-duplicate"
            onClick={() => handleClick(items.length - 1)}
            selected={currentIndex === -1}
          >
            {items[items.length - 1].menuName}
          </Item>
        </Content>
      </HorizontalScrollContainer>
      <CategoriesList>
        {items.map((item, index) => (
          <CategorieItem key={item.id}>
            <CategorieBtn
              data-index={index}
              onClick={onClickCategoryBtn}
              selected={index === currentIndex}
              type="button"
            >
              {item.menuName}
            </CategorieBtn>
          </CategorieItem>
        ))}
      </CategoriesList>
    </>
  )
}

export default Categories
