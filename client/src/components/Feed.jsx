import React from 'react'

import Post from './Post'
import Container from './Container'

const Feed = () => {
  return (
    <div className="flex flex-col sm:flex-1 md:flex-[0.6]">
      <Container/>
      <Post/>
    </div>
  )
}

export default Feed
