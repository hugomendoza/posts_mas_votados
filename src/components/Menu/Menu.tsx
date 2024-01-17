import React from 'react'

import DarkModeToggle from "react-dark-mode-toggle"

import { StyledDiv, StyledInputRounded, StyledMenu } from './Menu.styles'
import { Button } from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { orderAscendingPosts, orderDescendingPosts } from '../../store/posts/postsSlice'
import { setColorScheme, setDarkMode } from '../../store/ui/uiSlice'

export const Menu = () => {

  const dispatch = useAppDispatch();
  const { darkMode, selectedColor } = useAppSelector((state) => state.ui);

  const schemaColor = [
    {
      id: 0,
      color: '--blue-11'
    },
    {
      id: 1,
      color: '--purple-11'
    },
    {
      id: 2,
      color: '--green-11'
    },
    {
      id: 3,
      color: '--yellow-11'
    }
  ]

  const onSortAsc = ():void => {
    dispatch(orderAscendingPosts())
  }

  const onSortDesc = ():void => {
    dispatch(orderDescendingPosts())
  }

  const onChangeDarkMode = ():void => {
    dispatch(setDarkMode())
  }

  const onChangeColorScheme = (id:number | string) => {
    dispatch(setColorScheme(id));
  }

  return (
    <StyledMenu>
      <StyledDiv>
        <p>Ordenar por:</p>
        <Button value="Destacados" onClick={onSortAsc}/>
        <Button value="Menos votos" onClick={onSortDesc}/>
      </StyledDiv>
      <StyledDiv>
        <DarkModeToggle
          onChange={onChangeDarkMode}
          checked={darkMode}
          size={window.matchMedia("(width < 576px)").matches ? 50 : 60}
        />
        {schemaColor.map((color) => (  
          <StyledInputRounded
            type='radio'
            name='color-scheme'
            key={color.id}
            color={color.color}
            onClick={() => onChangeColorScheme(color.id)}
            checked={color.id === selectedColor}
          />
        ))}
      </StyledDiv>
    </StyledMenu>
  )
}
