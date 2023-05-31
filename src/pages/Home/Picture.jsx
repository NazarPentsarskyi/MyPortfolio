import styles from './styles.module.css';
import { theme } from '../../material/theme';
import DvrIcon from '@mui/icons-material/Dvr';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export const Picture = () => {

  return (
    <>
    <Router>
      <div className={styles.picture}>
      <Link to="../pages/about">
      <DvrIcon sx={{ fontSize: 400, color: theme.palette.primary.main }} />
      </Link>
        
       
      
      </div>
      </Router>
    </>
  )
}


//