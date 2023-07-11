import { Container } from '@/components/container';
import { Typography } from '@/components/typography';
import { getMethods } from '@/prisma/get-methods';
import { Metadata } from 'next';
import { MethodsPage } from './methods-page';

export default async function MethodenPage() {
  const methods = await getMethods();

  return <MethodsPage methods={methods} />;
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid - Methoden',
};
