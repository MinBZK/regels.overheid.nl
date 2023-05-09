import { Four04MessageDesktop } from '@/components/404-message/404-message-desktop';
import { Four04MessageMobile } from '@/components/404-message/404-message-mobile';
import { Box } from '@mui/material';

const Four04: React.FC = () => (
  <>
    <Box display={['block', 'none']}>
      <Four04MessageMobile />
    </Box>
    <Box display={['none', 'block']}>
      <Four04MessageDesktop />
    </Box>
  </>
);

export default Four04;
