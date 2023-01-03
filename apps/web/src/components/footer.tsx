import { Box, BoxProps, Link, List, ListItem, Typography } from '@mui/material';
import { Container } from './container';

export const Footer: React.FC<BoxProps> = (props) => {
  return (
    <Box sx={{ backgroundColor: 'primary.light', ...props.sx }} minHeight={150} py={10} {...props}>
      <Container>
        <Typography mb={2}>
          Deze website heeft nog géén officiele status. Dit is work in progress. Heb je vragen of wil je met ons
          samenwerken? Neem dan contact met <Link href="mailto:steven.gort@ictu.nl">Steven Gort</Link>.
        </Typography>
        <Typography fontWeight="bold">Overige links</Typography>
        <List>
          <ListItem>
            <Link href="https://github.com/MinBZK/regels.overheid.nl">GitHub</Link>
          </ListItem>
          <ListItem>
            <Link href="https://regels.overheid.nl/docs">Documentatie</Link>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};
