import styled from 'styled-components'

export const HorizontalScrollContainer = styled.div`
  padding: 20px;
  overflow: hidden;
  width: 100%; /* Adjust this width to fit two items */
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Content = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => props.translate}px);
`

export const Item = styled.button`
  background-color: transparent;
  border: none;
  flex: 0 0 50%; /* Each item takes 50% of the container width */
  padding: 20px;
  color: ${props => (props.selected ? '#c92d0e' : 'black')};
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: bold;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  border-bottom: ${props => (props.selected ? '3px solid #c92d0e' : 'none')};
`

export const CategoriesList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
`

export const CategorieItem = styled.li`
  list-style-type: none;
`

export const CategorieBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.selected ? '#c92d0e' : 'black')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  border-bottom: ${props => (props.selected ? '3px solid #c92d0e' : 'none')};
  padding: 20px;
`
