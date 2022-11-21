import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Heading from "../src/components/Heading";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";

export async function getServerSideProps() {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

const Home = ({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-paper">
      <Head>
        <title>Nextjs-MaterialUI-Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <p>This is header</p>
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Heading />
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <p className="text-darkteal">
            {isConnected ? "Connect to MongoDB" : "Not connected :("}
          </p>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p>This is footer</p>
      </footer>
    </div>
  );
};

export default Home;
