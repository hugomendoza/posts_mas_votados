import React from 'react'
import { StyledButton, PropsButton } from './Button.styles'

interface IPropsButton extends PropsButton {
  value?: string;
  image?: JSX.Element;
  onClick?: () => void;
}

export const Button = ({
    value,
    $icon,
    image,
    type,
    onClick
  }:IPropsButton) => {

  return (
    <StyledButton
      onClick={onClick}
      $icon={$icon}
      type={type}
    >
      { $icon === 'icon'
        ? image
        : <p>{value}</p>
      }
    </StyledButton>
  )

}