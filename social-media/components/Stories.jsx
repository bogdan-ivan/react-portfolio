import React, { useEffect, useState } from 'react'
import Story from './Story'
import faker from '@faker-js/faker'

const Stories = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    const stories = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setStories(stories)
  }, [])

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border rounded-sm border-gray-200
     justify-center overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {stories.map((profile) => (
        <Story
          key={profile.id}
          username={profile.username}
          avatar={profile.avatar}
        />
      ))}
    </div>
  )
}

export default Stories
