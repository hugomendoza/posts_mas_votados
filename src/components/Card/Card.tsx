import React from 'react'
import { StyledCard } from './Card.styles'
import { Button } from '../Button/Button'
import { PostProps } from '../../interfaces/interfaces'
import { useAppDispatch } from '../../hooks/useRedux'
import { likePost } from '../../store/posts/postsSlice'

export const Card = ({
  id,
  post_image_url,
  title,
  description,
  url,
  votes,
  writer_avatar_url
}:PostProps) => {

  const dispatch = useAppDispatch();

  const onLikePost = (id: number) => {
    dispatch(likePost({ id }));
  }

  return (
    <StyledCard>
      <figure>
        <img
          src={post_image_url}
          alt={title}
          className='post-image'
        />
      </figure>
      <div className='content'>
        <figure>
          <figcaption>Escrito por:</figcaption>
          <img
            src={writer_avatar_url}
            alt="avatar"
            className='avatar'
          />
        </figure>
        <div className='card-content'>
          <a href={url}>
            <h3>{title}</h3>
          </a>
          <p className='description'>{description}</p>
          <footer className='card-footer'>
            <Button onClick={() => onLikePost(id)}></Button>
            <span>{votes}</span>
            <Button></Button>
          </footer>
        </div>
      </div>
    </StyledCard>
  )
}
