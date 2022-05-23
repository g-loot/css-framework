import { compose, flexbox, layout, space } from 'styled-system';

import Button from '../../components/Button/Button';
import CustomComponent from '../../components/CustomComponent/CustomComponent';
import Head from 'next/head';
import MainNav from '../../components/MainNav/MainNav';
import Topbar from '../../components/Topbar/Topbar';
import { Typography } from '@g-loot/component-library';
import styled from 'styled-components';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

const MainNavArray = [
  {
    label: "home",
    icon: "home-2",
    url: "url"
  },
  {
    label: "profile",
    icon: "circle-09",
    url: "url"
  },
  {
    label: "teams",
    icon: "multiple-12",
    url: "url"
  },
  {
    label: "shop",
    icon: "shop",
    url: "url"
  },
  {
    label: "premium",
    icon: "ic_stars_24px",
    url: "url"
  },
]

export default function Home() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/users/self', { delay: 1000 });

  return (
    <div>
        <Head>
          <title>Gnog Prototype</title>
          <meta name="description" content="Internal playground" />
          <link rel="icon" href="https://res.cloudinary.com/gloot/image/upload/v1653321618/Marketing/2022_prototype/favicon.png" />
        </Head>
        
        <Topbar />

        <div className="container flex mx-auto space-x-12">
          <div className="hidden md:block sticky h-screen w-auto md:w-3/12 lg:w-2/12 py-4">
            <div className="card rounded-lg overflow-hidden">
              <MainNav items={MainNavArray} />
            </div>
          </div>
          <div className="pt-4 pb-8 w-full md:w-9/12 lg:w-10/12 ">
            <div className="card rounded-lg overflow-hidden">

              <div className="p-4">

                <Button variant="Primary" label="Learn more" icon="home-2" iconSize="16"></Button>

                <div className="flex gap-4 mt-4">
                  <Button variant="primary" label="save" icon="backup" iconDirection="left" />
                  <Button variant="secondary" label="save" icon="backup" iconDirection="left" />
                </div>

              </div>
            </div>
          </div>
          
        </div>
        <div>
          <h1 className="font-headings italic text-5xl">
            {loading ? 'Hello ???' : `Hello ${data.username}`}
          </h1>
          <Typography variant="h1" color="ui.100">
            {loading ? 'Hello ???' : `Hello ${data.username}`}
          </Typography>

          <a onClick={() => router.push('/example-perks')}>
            Utilities
          </a>

          
        </div>
    </div>
  );
}
