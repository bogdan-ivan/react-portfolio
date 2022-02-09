import { signOut, useSession } from 'next-auth/react';
import React from 'react';

const MiniProfile = () => {
  const {data: session} = useSession();
  const username = session?.user?.username;
  const name = session?.user?.name;
  const email = session?.user?.email;
  const image = session?.user?.image;
  return ( 
    <div className="flex items-center mt-14 ml-10">
      <img
        src={image}
        alt=""
        className="rounded-full border p-[2px] h-16 w-16"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{username}</h2>
        <h3 className="text-sm text-gray-400">{name}</h3>
      </div>
      
      <button className="text-blue-400 text-sm font-semibold" onClick={signOut}>
        Sing out
      </button>
    </div>
  );
};

export default MiniProfile;
