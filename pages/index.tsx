import { Tab } from '@headlessui/react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';
import { Landing } from '../components/Landing';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1
            className="text-center text-4xl font-medium tracking-wide text-white
        md:text-5xl"
          >
            New Promos
          </h1>
          <Tab.Group>
            <Tab.List />
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  // const category = await fetchCategory();

  return {
    props: {},
  };
};
