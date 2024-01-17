import React from 'react'
import { Container, StyledLayout } from './Layout.styles'
import { ThemeProvider } from 'styled-components'
import { useAppSelector } from '../hooks/useRedux'
import GlobalStyles from '../theme/GlobalStyles'

interface PropsLayout {
  children: React.ReactNode
}

export const Layout = ({ children }:PropsLayout) => {

  const ui = useAppSelector((state) => state.ui);

  return (
    <ThemeProvider theme={ui}>
      <GlobalStyles />
      <StyledLayout>
        <Container>
          {children}
        </Container>
      </StyledLayout>
    </ThemeProvider>
  )
}