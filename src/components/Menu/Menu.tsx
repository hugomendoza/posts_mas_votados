import React from 'react'
import { StyledDiv, StyledMenu } from './Menu.styles'
import { Button } from '../Button/Button'
import { useAppDispatch } from '../../hooks/useRedux'
import { orderAscendingPosts, orderDescendingPosts } from '../../store/posts/postsSlice'

export const Menu = () => {

  const dispatch = useAppDispatch();

  const onSortAsc = () => {
    dispatch(orderAscendingPosts())
  }

  const onSortDesc = () => {
    dispatch(orderDescendingPosts())
  }

  return (
    <StyledMenu>
      <StyledDiv>
        <p>Ordenar por:</p>
        <Button value='Mejor valorados' onClick={onSortAsc}/>
        <Button value='Te pueden interesar' onClick={onSortDesc}/>
      </StyledDiv>
    </StyledMenu>
  )
}