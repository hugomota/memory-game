import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface IInputProps {}

const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  border-radius: 8px;
  border: 0;
  color: ${(props) => props.theme.black};
  font-size: 22px;
  outline: 0;
  padding: 5px 10px;
`
const Input: FunctionComponent<IInputProps> = ({ children }) => {
  return <StyledInput>{children}</StyledInput>
}

export default Input
