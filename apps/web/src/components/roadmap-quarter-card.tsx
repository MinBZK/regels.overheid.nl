import { ThereforeIcon } from '@/theme/icons/therefore-icon';
import { Box, Collapse, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import { IconBrandGithub, IconComponents, IconGavel, IconLicense } from '@tabler/icons-react';
import { useMemo, useState } from 'react';

type Icons = 'devops' | 'linked data' | 'design' | 'content management' | 'legal';

export interface RoadmapQuarterCardProps {
  quarter: number;
  items: [icon: Icons, content: string | JSX.Element][];
}

const IconMapping = (icon: Icons) => {
  const { palette } = useTheme();

  switch (icon) {
    case 'devops':
      return <IconBrandGithub color={palette.warning.dark} size={22} strokeWidth={1} />;
    case 'linked data':
      return <ThereforeIcon stroke={palette.warning.dark} />;
    case 'design':
      return <IconComponents color={palette.warning.dark} size={22} strokeWidth={1} />;
    case 'content management':
      return <IconLicense color={palette.warning.dark} size={22} strokeWidth={1} />;
    case 'legal':
      return <IconGavel color={palette.warning.dark} size={22} strokeWidth={1} />;
  }
};

export const RoadmapQuarterCard: React.FC<RoadmapQuarterCardProps> = ({ quarter, items }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const currentQuarter: number = useMemo(() => {
    const date = new Date();
    const month = date.getMonth() + 1;

    return Math.ceil(month / 3);
  }, []);

  const [isOpened, setIsOpened] = useState(quarter === currentQuarter);

  const bgcolor = useMemo(() => {
    if (quarter < currentQuarter) return 'grey.200'; // past

    if (currentQuarter + 1 === quarter) return 'primary.light'; // up next

    if (currentQuarter + 2 <= quarter) return 'primary.lighter'; // future

    return 'primary.main';
  }, [quarter, currentQuarter]);

  return (
    <Stack
      padding={1.5}
      bgcolor={bgcolor}
      borderRadius={1}
      width={['auto', '270px', '270px', '230px', '270px']}
      flexShrink="0"
    >
      <Typography
        component="span"
        onClick={() => setIsOpened(!isOpened)}
        textAlign="center"
        color="common.white"
        fontWeight="bold"
        fontSize="32px"
        sx={{
          cursor: ['pointer', 'default'],
        }}
      >
        Q{quarter}
      </Typography>

      <Collapse in={!isMobile ? true : isOpened}>
        <Box mt={1.5} />
        <Stack rowGap={1.5}>
          {items.map(([icon, content], i) => (
            <Stack
              key={i}
              padding={1.5}
              columnGap={2}
              fontSize="16px"
              direction="row"
              borderRadius={0.5}
              bgcolor="common.white"
            >
              <Box width={22}>{IconMapping(icon)}</Box>
              <Typography color="common.black">{content}</Typography>
            </Stack>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
