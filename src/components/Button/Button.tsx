import React from 'react'
import { StyledButton } from './Button.styles'

interface PropsButton {
  value?: string;
  onClick?: () => void;
}

export const Button = ({
    value = 'Guardar',
    onClick
  }:PropsButton) => {

  return (
    <StyledButton
      onClick={onClick}
    >
      <p>{value}</p>
    </StyledButton>
  )

}