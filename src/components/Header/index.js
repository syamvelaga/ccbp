import {useContext} from 'react'

import MyContext from '../../context/MyContext'

import {
  HeaderCard,
  Heading,
  CartNameIconCard,
  CartName,
  CartIcon,
  CartCard,
  SpanCount,
} from './styledComponents'

const Header = () => {
  const {cartItem} = useContext(MyContext)
  return (
    <HeaderCard>
      <Heading>UNI Resto Cafe</Heading>
      <CartNameIconCard>
        <CartName>My Orders</CartName>
        <CartCard>
          <SpanCount>{cartItem}</SpanCount>
          <CartIcon />
        </CartCard>
      </CartNameIconCard>
    </HeaderCard>
  )
}
export default Header
