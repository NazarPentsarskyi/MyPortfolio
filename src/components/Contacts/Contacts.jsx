import styles from './styles.module.css';
import { theme } from '../../material/theme';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contacts = () => {
  return (
    <>
      <div name='contacts' className={styles.contactscontainer}>
        <h3>Contacts</h3>
        <a>
          <AlternateEmailIcon className={styles.icon} sx={{ fontSize: 50, color: theme.palette.primary.main }} />
          <p>nazar.pentsarskyi@gmail.com</p>
        </a>
        <a>
          <PhoneAndroidIcon className={styles.icon} sx={{ fontSize: 50, color: theme.palette.primary.main }} />
          <p>+38 097 798 59 97</p>
        </a>
        <a href='https://www.linkedin.com/in/nazar-pentsarskyi-40ab91209/' target='_blank'>
          <LinkedInIcon className={styles.icon} sx={{ fontSize: 50, color: theme.palette.primary.main }} />
          <p>nazar pentsarskyi</p>
        </a>
        
        <a href='https://github.com/NazarPentsarskyi' target='_blank'>
          <GitHubIcon className={styles.icon} sx={{ fontSize: 50, color: theme.palette.primary.main }} />
          <p>nazar pentsarskyi</p>
        </a>
      </div>
    </>
  )
}
