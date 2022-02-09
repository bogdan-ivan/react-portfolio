import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Modal from '../components/Modal';

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll">
      <Head>
        <title>Social Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Feed */}
      {session && <Feed />}
      {/* Modal */}
      <Modal />
    </div>
  );
}
