import React from 'react'
import { Button } from '../../components'
import styled from 'styled-components'
import BgHome from '../../assets/images/bg-home.jpg'

const StyledHome = styled.div`
  background-image: url(${BgHome});
  background-size: cover;
  display: flex;
  height: 100vh;
  padding: 0 30px;
`

export const HomePage = () => {
  return (
    <StyledHome>
      
    </StyledHome>
  )
}
