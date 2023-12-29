import React from 'react'
import { StyledHeader } from './Header.styles'

interface PropsHeader {
  title?: string
}

export const Header = ({title = 'Make it Real 2'}:PropsHeader) => {

  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  )
}