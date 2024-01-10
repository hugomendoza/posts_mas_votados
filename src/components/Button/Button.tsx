import React from 'react'
import { StyledButton, PropsButton } from './Button.styles'

interface IPropsButton extends PropsButton {
  value?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

export const Button = ({
    value = 'Guardar',
    variant = '',
    icon = <></>,
    type = "",
    onClick
  }:IPropsButton) => {

  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      type={type}
    >
      { variant === 'icon'
        ? icon
        : <p>{value}</p>
      }
    </StyledButton>
  )

}