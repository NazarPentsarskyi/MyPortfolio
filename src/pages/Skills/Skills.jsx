import styles from './styles.module.css';
import iconHTML from '../../assets/icon_html.png';
import iconCSS from '../../assets/icon_css.png';
import iconJS from '../../assets/icon_js.png';




export const Skills = () => {
  return (
    <>
      <h3>My Skills</h3>
      <div className={styles.skillscontainer}>
        
        <div className={styles.skills}>
          <img src={ iconHTML } alt='HTML icon' style={{ width: '100px' }} />
          <p>HTML</p>
        </div>
        <div className={styles.skills}>
          <img src={ iconCSS } alt='CSS icon' style={{ width: '100px' }} />
          <p>CSS</p>
        </div>
        <div className={styles.skills}>
          <img src={ iconJS } alt='JavaScript icon' style={{ width: '100px' }} />
          <p>JavaScript</p>
        </div>
        <div className={styles.skills}>
          <img src={ iconCSS } alt='CSS icon' style={{ width: '100px' }} />
          <p>ReactJS</p>
        </div>
        <div className={styles.skills}>
          <img src={ iconCSS } alt='CSS icon' style={{ width: '100px' }} />
          <p>NodeJS/ExpressJS</p>
        </div>
        <div className={styles.skills}>
          <img src={ iconCSS } alt='CSS icon' style={{ width: '100px' }} />
          <p>MongoDB</p>
        </div>
        <div className={styles.skills}>
          <img src={ iconCSS } alt='CSS icon' style={{ width: '100px' }} />
          <p>Git</p>
        </div>
      </div>
    </>
  )
}
