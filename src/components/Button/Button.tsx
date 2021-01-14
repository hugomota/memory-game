import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface IButtonProps {
  type?: 'submit' | 'reset' | 'button'
}

const StyledButton = styled.button`
  color: ${(props) => props.theme.white};
  border-color: ${(props) => props.theme.white};
  font-size: 20px;
  border-width: 2px;
  border-radius: 98px;
  background-color: transparent;
`

const Button: FunctionComponent<IButtonProps> = ({ children, type }) => <StyledButton type={type}>{children}</StyledButton>

export default Button
