import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

const SignIn = ({ providers }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center' >
        <img src="https://links.papareact.com/sq0" alt="" className='w-20 h-20'/>
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="p-3 bg-blue-500 rounded-lg text-white"
              onClick={() => signIn(provider.id, {callbackUrl: "/"})}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// // Server side render
// export const getServerSideProps = async () => {
//   const providers = await getProviders();
//   return {
//     props: {
//       providers,
//     },
//   };
// };

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIn;
