import React from 'react'
import { Container, StyledLayout } from './Layout.styles'

interface PropsLayout {
  children: React.ReactNode
}

export const Layout = ({ children }:PropsLayout) => {
  return (
    <StyledLayout>
      <Container>
        {children}
      </Container>
    </StyledLayout>
  )
}