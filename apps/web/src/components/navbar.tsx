import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { selectPages } from '../stores/redux/pages/selectors';

export const Navbar: React.FC = () => {
  const pages = useSelector(selectPages);

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          Regels
        </Typography>
        <Box>
          {pages?.map(({ attributes, id }) => {
            const href = attributes?.slug === 'home' ? '' : attributes?.slug;

            return (
              <Link key={id} href={`/${href}`}>
                <Button sx={{ color: '#fff' }}>{attributes?.name}</Button>
              </Link>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
