import React, { useEffect, useState } from 'react';
import Post from './Post';
import { db, storage } from '../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

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
];

const Posts = () => {
  const[posts, setPosts] = useState([]);

  useEffect(() => {
    // Snapshot listener from firebase
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return () => {
      unsubscribe();
    };
    // return unsubscribe;
  }, [db]);

  return (
    <div className="mt-8">
      {posts.map((post, index) => (
        <Post
          key={index}
          id={post.id}
          username={post.data().username}
          userImage={post.data().profileImage}
          image={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};

export default Posts;
