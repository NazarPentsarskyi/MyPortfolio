import styles from './styles.module.css';
import cv_nazar_pentsarskyi from '../../assets/CV_Nazar_Pentsarskyi.jpg';

export const Cv = () => {
  return (
    <>
      <div name='cv' className={styles.cvcontainer}>
        <h3>CV</h3>
        <div className={styles.cv}>
          <a href="https://drive.google.com/file/d/1zfHkpUGl80qXSo9yBUwBGV2gRa6ABHcj/view?usp=sharing" target='_blank' rel="noreferrer">
            <img src={cv_nazar_pentsarskyi} alt='cv_nazar_pentsarskyi'/>
          </a>
        </div>
      </div>
    </>
  )
}


