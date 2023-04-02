import { Icons } from '@/services/cms/get-methods';
import { ArrowRightIcon } from '@/theme/icons/arrow-right-icon';
import { MegaphoneIcon } from '@/theme/icons/megaphone-icon';
import { RightAngleRulerIcon } from '@/theme/icons/right-angle-ruler-icon';
import { RulerIcon } from '@/theme/icons/ruler-icon';
import { ScaleIcon } from '@/theme/icons/scale-icon';
import { ThereforeIcon } from '@/theme/icons/therefore-icon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  SvgIconProps,
  Typography,
  useTheme,
} from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import { ArchIcon } from '../theme/icons/arch-icon';

interface Props {
  date: string;
  title: string;
  icon: Icons | null;
  href: string | null;
  description: string;
}

const iconMap: Record<Icons, React.FC<SvgIconProps<'svg'>>> = {
  arch: ArchIcon,
  ruler: RulerIcon,
  scale: ScaleIcon,
  megaphone: MegaphoneIcon,
  therefore: ThereforeIcon,
  'right-angle-ruler': RightAngleRulerIcon,
};

export const MethodCard: React.FC<Props> = ({ title, href, icon, description, date }) => {
  const { palette } = useTheme();
  const Icon = icon && iconMap[icon];
  const enhancedDate = new Date(date);

  return (
    <Card>
      <Box display="grid" gridTemplateColumns={['', '', '320px auto', '100%']}>
        <Box component={CardMedia} display={['none', 'none', 'block']}>
          <Box
            sx={({ palette }) => ({
              background: palette.primary.main,
              width: '100%',
              height: ['', '', '100%', '200px'],
            })}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {Icon && <Icon fill="transparent" fillOpacity="0" sx={{ fontSize: 100 }} stroke={palette.common.white} />}
          </Box>
        </Box>
        <CardContent sx={{ display: 'flex' }}>
          <Stack justifyContent="space-between">
            <Box>
              <Chip label="Methode" color="info" />
              <Typography fontSize="20" fontWeight="bold" color="grey.100" marginTop={2}>
                {title}
              </Typography>
              <Typography fontSize="16" color="grey.100" lineHeight="24px">
                {description}
              </Typography>
            </Box>
            <CardActions>
              <Stack
                direction={['row', 'column', 'row']}
                justifyContent="space-between"
                alignItems={['center', 'stretch', 'center']}
                width="100%"
              >
                <Typography fontWeight="bold" color="grey.100" fontSize="16px" sx={{ opacity: 0.6 }} mb={[0, 1, 0]}>
                  {enhancedDate.toLocaleDateString('nl-NL', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </Typography>
                {href && (
                  <Button
                    href={href}
                    variant="contained"
                    LinkComponent={Link}
                    endIcon={<ArrowRightIcon stroke={palette.common.white} />}
                  >
                    Lees meer
                  </Button>
                )}
              </Stack>
            </CardActions>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};
