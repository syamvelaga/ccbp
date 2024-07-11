import styled from 'styled-components'

import {GrCart} from 'react-icons/gr'

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const CartNameIconCard = styled.div`
  display: flex;
  align-items: center;
`

export const CartName = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
    margin-right: 20px;
  }
`

export const CartCard = styled.div`
  position: relative;
`

export const CartIcon = styled(GrCart)`
  width: 40px;
  height: 40px;
  color: #575c59;
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

export const SpanCount = styled.span`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 50%;
  @media screen and (min-width: 768px) {
    height: 22px;
    width: 22px;
    font-size: 16px;
  }
`
