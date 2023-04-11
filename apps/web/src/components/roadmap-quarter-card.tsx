import { ComponentsIcon } from '@/theme/icons/components-icon';
import { GavelIcon } from '@/theme/icons/gavel-icon';
import { GithubIcon } from '@/theme/icons/github-icon';
import { LicenseIcon } from '@/theme/icons/license-icon';
import { Box, Collapse, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import { useMemo, useState } from 'react';

type Icons = 'devops' | 'design' | 'content management' | 'legal';

export interface RoadmapQuarterCardProps {
  quarter: number;
  items: [icon: Icons, content: string | JSX.Element][];
}

const IconMapping = (icon: Icons) => {
  const { palette } = useTheme();

  switch (icon) {
    case 'devops':
      return <GithubIcon stroke={palette.warning.dark} />;
    case 'design':
      return <ComponentsIcon stroke={palette.warning.dark} />;
    case 'content management':
      return <LicenseIcon stroke={palette.warning.dark} />;
    case 'legal':
      return <GavelIcon stroke={palette.warning.dark} />;
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
              {IconMapping(icon)}
              <Typography color="common.black">{content}</Typography>
            </Stack>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
