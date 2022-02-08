import React from 'react'
import Post from './Post'

const POSTS = [
  {
    id: 1,
    username: 'Bogdan Daniel',
    userImage: 'https://i.imgur.com/8kQqO2y.png',
    image: 'https://i.imgur.com/8kQqO2y.png',
    caption: 'hello world this my post',
  },
  {
    id: 2,
    username: 'Bogdan Daniel',
    userImage: 'https://i.imgur.com/8kQqO2y.png',
    image: 'https://i.imgur.com/8kQqO2y.png',
    caption: 'hello world this my post',
  },
]

const Posts = () => {
  return (
    <div className='mt-8'>
      {POSTS.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImage={post.userImage}
          image={post.image}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
