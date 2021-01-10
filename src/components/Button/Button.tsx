import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface IButtonProps {
  
  
}

const StyledButton = styled.button`
  background-image: linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%);
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
`

export const Button: FunctionComponent<IButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

