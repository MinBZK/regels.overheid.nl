import { MethodCard } from '@/components/method-card';
import { PageTitle } from '@/components/page-title';
import { getMethods, GetMethodsResponse } from '@/services/cms/get-methods';
import { Box, Stack } from '@mui/material';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface Props {
  methods: GetMethodsResponse;
}

const Methoden: React.FC<Props> = ({ methods }) => (
  <>
    <Head>
      <title>Regelregister van de Nederlandse Overheid - Methoden</title>
    </Head>
    <PageTitle>Methoden</PageTitle>
    <Stack spacing={2}>
      <Box
        display="grid"
        gridTemplateColumns={['100%', '1fr 1fr', '100%', 'repeat(3, 1fr)']}
        columnGap={4}
        rowGap={[2, 5, 4, 4]}
        alignItems="flex-start"
      >
        {methods.data?.map((method) => {
          return (
            <MethodCard
              key={method.id}
              href={method.attributes.Href}
              icon={method.attributes.Icon}
              title={method.attributes.Title}
              description={method.attributes.Description}
              date={method.attributes.updatedAt || method.attributes.createdAt}
            />
          );
        })}
      </Box>
    </Stack>
  </>
);

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      methods: await getMethods({ includeVisual: false }),
    },
  };
};

export default Methoden;
