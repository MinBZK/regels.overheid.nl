import { Container } from '@/components/container';
import { ExternalLinkIcon } from '@/theme/icons/external-link-icon';
import { Alert, Box, BoxProps, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useApplicationMetadata } from './application-metadata-provider';

interface ListItemLink {
  href: string;
  title: string;
  blank?: true;
}

const linkGroups: ListItemLink[][] = [
  [
    { title: 'Over deze website', href: '/over' },
    { title: 'Contact', href: 'mailto:steven.gort@ictu.nl' },
    { title: 'Github', href: 'https://github.com/MinBZK/regels.overheid.nl', blank: true },
    { title: 'Regelregister', href: 'https://regels.dexcat.nl/' },
  ],
  [
    { title: 'Documentatie', href: 'https://regels.overheid.nl/docs' },
    { title: 'Privacy en cookies', href: '#' },
    { title: 'Toegankelijkheid', href: '#' },
    { title: 'Sitemap', href: '/sitemap.xml' },
  ],
  [
    { title: 'Methoden', href: ' /methoden ' },
    { title: 'Overheid.nl', href: ' https://www.overheid.nl/' },
    { title: 'Linked Data Overheid', href: ' https://linkeddata.overheid.nl/front/portal/' },
    { title: 'PUC Open Data', href: ' https://puc.overheid.nl/mijno' },
  ],
  [
    { title: 'MijnOverheid.nl', href: 'https://mijn.overheid.nl/' },
    { title: 'Rijksoverheid.nl', href: 'https://www.rijksoverheid.nl/', blank: true },
    { title: 'Ondernemersplein', href: 'https://ondernemersplein.kvk.nl/', blank: true },
    { title: 'Werkenbijdeoverheid', href: 'https://www.werkenbijdeoverheid.nl/', blank: true },
  ],
];

export const Footer: React.FC<BoxProps> = (props) => {
  const { version, versionUpdatedAt } = useApplicationMetadata() || {};

  return (
    <Box
      sx={{ backgroundColor: 'primary.lighter', ...props.sx }}
      borderTop="12px solid"
      borderColor="primary.light"
      fontSize={16}
      {...props}
    >
      <Container>
        <Box
          display="grid"
          gridAutoFlow="dense"
          alignItems="flex-start"
          columnGap={2}
          gridTemplateColumns={['100%', '1fr 1fr', '1fr', '340px auto']}
        >
          <Box
            component={Alert}
            severity="warning"
            gridColumn={['auto', '2 / 3', 'auto']}
            width={[, , 664, 'auto']}
            justifySelf={[, , 'center', null]}
          >
            Deze website heeft nog géén officiele status. Dit is work in progress. Heb je vragen of wil je met ons
            samenwerken? Neem dan contact met Steven Gort.
          </Box>
          <Stack gridColumn={['auto', '1 / 2', 'auto']} direction={['column', 'column', 'row']}>
            {linkGroups.map((links, i) => (
              <List key={i} dense>
                {links.map(({ href, title, blank }, j) => {
                  const isExternal = !href.startsWith('/');
                  const LinkComponent = isExternal ? 'a' : Link;

                  return (
                    <ListItem key={j}>
                      <ListItemIcon sx={{ minWidth: 26 }}>{'>'}</ListItemIcon>
                      <Typography component={ListItemText} whiteSpace="pre">
                        <LinkComponent href={href} target={blank && '_blank'}>
                          <Stack direction="row" alignItems="center" columnGap={2}>
                            {title}
                            {blank && <ExternalLinkIcon sx={{ fontSize: 18 }} />}
                          </Stack>
                        </LinkComponent>
                      </Typography>
                    </ListItem>
                  );
                })}
              </List>
            ))}
          </Stack>
        </Box>
      </Container>
      {version && (
        <Typography textAlign="center" py={1} fontSize={16} color="primary.dark">
          Onze website is voortdurend in ontwikkeling.{' '}
          <Typography
            component="a"
            color="inherit"
            fontWeight="bold"
            fontSize="inherit"
            href="https://github.com/MinBZK/regels.overheid.nl/releases"
          >
            Laatste live-versie v{version}
          </Typography>{' '}
          {versionUpdatedAt ? `(${versionUpdatedAt})` : null}
        </Typography>
      )}
    </Box>
  );
};
