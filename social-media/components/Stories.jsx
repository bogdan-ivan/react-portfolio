import React, { useEffect, useState } from 'react';
import Story from './Story';
import faker from '@faker-js/faker';
import { useSession } from 'next-auth/react';

const Stories = () => {
  const { data: session } = useSession();
  const [stories, setStories] = useState([]);

  const username = session?.user?.username;
  const name = session?.user?.name;
  const email = session?.user?.email;
  const image = session?.user?.image;

  useEffect(() => {
    const stories = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setStories(stories);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border rounded-sm border-gray-200
      overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {session && <Story username={username} avatar={image} />}
      {stories.map((profile) => (
        <Story
          key={profile.id}
          username={profile.username}
          avatar={profile.avatar}
        />
      ))}
    </div>
  );
};

export default Stories;
