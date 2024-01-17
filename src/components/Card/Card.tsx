import React from 'react'
import { StyledCard } from './Card.styles'
import { Button } from '../Button/Button'
import { PostProps } from '../../interfaces/interfaces'
import { useAppDispatch } from '../../hooks/useRedux'
import { likePost, dislikePost } from '../../store/posts/postsSlice'

import { icons } from '../../assets/svg'

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

  const { Like, Dislike } = icons;

  const onLikePost = (id: number):void => {
    dispatch(likePost({ id }));
  }

  const onDislikePost = (id: number):void => {
    dispatch(dislikePost({ id }));
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
          <h3>
            <a
              href={url}
              target='_blank'
              rel="noreferrer noopenner"
            >
              {title}
            </a>
          </h3>
          <p className='description'>{description}</p>
          <footer className='card-footer'>
            <Button
              onClick={() => onLikePost(id)}
              $icon='icon'
              image={<div dangerouslySetInnerHTML={{ __html: Like }} />}
              type='like'
            />
            <span>{votes}</span>
            <Button
              onClick={() => onDislikePost(id)}
              $icon='icon'
              image={<div dangerouslySetInnerHTML={{ __html: Dislike }} />}
              type='dislike'
            />
          </footer>
        </div>
      </div>
    </StyledCard>
  )
}
