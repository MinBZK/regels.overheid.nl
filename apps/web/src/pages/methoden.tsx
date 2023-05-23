import { MethodCard } from '@/components/card/method-card';
import { Typography } from '@/components/typography';
import { getMethods, GetMethodsResponse } from '@/services/cms/get-methods';
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
    <Typography variant="page-title">Methoden</Typography>
    <div className="grid gap-y-4 items-start md:grid-cols-2 md:gap-y-16 md:gap-x-4 lg:grid-cols-1 lg:gap-y-8 xl:grid-cols-3 xl:gap-x-6 2xl:gap-x-14">
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
    </div>
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
