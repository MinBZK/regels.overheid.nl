import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getMethods, GetMethodsResponse } from '../services/strapi/get-methods';

interface Props {
  methods: GetMethodsResponse;
}

const Methoden: React.FC<Props> = ({ methods }) => {
  return (
    <Stack spacing={2}>
      <Head>
        <title>Regelregister van de Nederlandse Overheid - Methoden</title>
      </Head>
      <Typography variant="h3">Methoden</Typography>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" columnGap={4} alignItems="flex-start">
        {methods.data?.map((method) => {
          const mediaURL = `${process.env.NEXT_PUBLIC_CMS_ROOT_URL}${method.attributes.Visual?.data.attributes.formats.medium.url}`;

          return (
            <Card key={method.id}>
              <CardMedia
                component="img"
                height="300"
                image={mediaURL.toString()}
                alt={method.attributes.Visual?.data.attributes.formats.medium.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {method.attributes.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {method.attributes.Description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Stack>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      methods: await getMethods({ includeVisual: true }),
    },
  };
};

export default Methoden;
