import { PageTitle } from '@/components/page-title';
import { RoadmapQuarterCard } from '@/components/roadmap-quarter-card';
import { roadmapQuarterCardsItems } from '@/components/roadmap-quarter-card/roadmap-quarter-cards-items';
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { GetServerSideProps } from 'next';
import { useEffect, useRef, useState } from 'react';
import { IconBrandGithub, IconComponents, IconGavel, IconLicense, IconBinaryTree2 } from '@tabler/icons-react';

const Roadmap = () => {
  const { palette, breakpoints } = useTheme();

  const quartersRef = useRef<HTMLDivElement>(null);
  const [overflowMargin, setOverflowMargin] = useState(0);

  const shouldOverflow = useMediaQuery(breakpoints.between('sm', 'lg'));

  useEffect(() => {
    if (!window || !quartersRef.current) return;

    if (!shouldOverflow) return setOverflowMargin(0);

    setOverflowMargin(window.innerWidth - quartersRef.current.clientWidth);
  }, [quartersRef, shouldOverflow]);

  return (
    <Stack>
      <PageTitle>Roadmap</PageTitle>
      <Stack rowGap={1.5} direction={['column', 'column', 'column', 'row']} justifyContent={[, , , 'space-between']}>
        <Typography color="primary.dark" fontSize={20} width={[, , , 437]}>
          Verken onze roadmap om een duidelijk inzicht te krijgen in onze strategie voor het centraal vindbaar maken van
          alle regels.
        </Typography>
        <Typography color="grey.100" fontSize={16} display={['block', 'none']}>
          Roadmap legenda
        </Typography>
        <Box
          display={['grid', 'flex']}
          gridTemplateColumns={['auto auto']}
          rowGap={2}
          columnGap={[, 2]}
          alignSelf={[, , , 'flex-end']}
        >
          <Stack direction="row" columnGap={1}>
            <IconLicense color={palette.primary.dark} />
            <Typography color="primary.dark">Content management</Typography>
          </Stack>
          <Stack direction="row" columnGap={1}>
            <IconBinaryTree2 stroke={palette.primary.dark} />
            <Typography color="primary.dark">Linked Data</Typography>
          </Stack>
          <Stack direction="row" columnGap={1}>
            <IconBrandGithub color={palette.primary.dark} />
            <Typography color="primary.dark">DevOps</Typography>
          </Stack>
          <Stack direction="row" columnGap={1}>
            <IconComponents color={palette.primary.dark} />
            <Typography color="primary.dark">Design</Typography>
          </Stack>
          <Stack direction="row" columnGap={1}>
            <IconGavel color={palette.primary.dark} />
            <Typography color="primary.dark">Legal</Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack
        ref={quartersRef}
        rowGap={3}
        mt={4.5}
        direction={['column', 'row']}
        columnGap={3}
        overflow="auto"
        alignItems={[, 'flex-start']}
        marginRight={`-${overflowMargin}px`}
      >
        {roadmapQuarterCardsItems.map((items, index) => (
          <RoadmapQuarterCard key={index} quarter={index + 1} items={items} />
        ))}
        {shouldOverflow && <Box mr={`${overflowMargin}px`} />}
      </Stack>
    </Stack>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Roadmap;
