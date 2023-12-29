import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import { useAppSelector } from '../../hooks/useRedux';

import { StyledSection, Grid } from './ContenCard.styles'
import { Card } from '../Card/Card'

import { PostProps } from '../../interfaces/interfaces';

export const ContentCard = () => {

  const { posts } = useAppSelector((state) => state.posts);

  return (
    <StyledSection>
      <Grid>
        <AnimatePresence>
          {posts.map((post:PostProps) => (
            <motion.div
              layout
              key={post.id}
            >
              <Card {...post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </Grid>
    </StyledSection>
  )
}
