import dynamic from 'next/dynamic';
import Head from 'next/head';
import ARViewer from './components/ARViewer';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Head>
        <title>MindAR Image Tracking</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Helloooooooo</h1>

        <p>
            ghjsbjbecfse
            djbfvusj jnvusirdhfvns m,fdunvnui sfiewhid iiew 7e uufreufgwuilh
        </p>
        <ARViewer></ARViewer>
      </main>
     
    </div>
  );
}
