import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from 'next/head';

const DUMMY = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tourism_in_London795.jpg/800px-Tourism_in_London795.jpg",
    address: "Some address",
    description: "this a meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tourism_in_London795.jpg/800px-Tourism_in_London795.jpg",
    address: "Some address",
    description: "this a meetup",
  },
];

const HomePage = (props) => {
  // const [meetups, setMeetups] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setMeetups(DUMMY);
  // }, []);

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://bogdan:bogdan@cluster0.wrfp1.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY,
//     },
//   };
// }

export default HomePage;
