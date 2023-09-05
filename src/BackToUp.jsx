import { theme } from './material/theme';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { Link } from 'react-scroll';

export const BackToUp = () => {

  return (
    <>
      <div className='backToUp'>
        <Link to='root' smooth={true} duration={500}>
          <ArrowUpwardIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />
       </Link>
      </div>
    </>
  )
}
