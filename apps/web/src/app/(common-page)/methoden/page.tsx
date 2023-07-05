import { Typography } from '@/components/typography';
import { Metadata } from 'next';
import Head from 'next/head';
import { MethodCards } from './method-cards';
import { getMethods } from '@/services/cms/get-methods';

export default async function MethodenPage() {
  const { data: methods } = await getMethods({ includeVisual: false });

  return (
    <>
      <Head>
        <title>Regelregister van de Nederlandse Overheid - Methoden</title>
      </Head>
      <MethodCards methods={methods} />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid - Methoden',
};
