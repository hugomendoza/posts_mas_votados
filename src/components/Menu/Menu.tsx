import React from 'react'
import { StyledDiv, StyledMenu } from './Menu.styles'
import { Button } from '../Button/Button'
import { useAppDispatch } from '../../hooks/useRedux'
import { orderAscendingPosts, orderDescendingPosts } from '../../store/posts/postsSlice'

export const Menu = () => {

  const dispatch = useAppDispatch();

  const onSortAsc = ():void => {
    dispatch(orderAscendingPosts())
  }

  const onSortDesc = ():void => {
    dispatch(orderDescendingPosts())
  }

  return (
    <StyledMenu>
      <StyledDiv>
        <p>Ordenar por:</p>
        <Button value="Destacados" onClick={onSortAsc}/>
        <Button value="Menos votos" onClick={onSortDesc}/>
      </StyledDiv>
    </StyledMenu>
  )
}
