import styles from './styles.module.css';
import { theme } from '../../material/theme';
import DvrIcon from '@mui/icons-material/Dvr';
import { Link } from 'react-scroll';


export const Picture = () => {

  return (
    <>
      <div className={styles.picture}>
      <Link to='about' smooth={true} duration={500}>      
        <DvrIcon className={styles.icon} sx={{ fontSize: 400, color: theme.palette.primary.main }} />
      </Link>
      </div>
    </>
  )
}
