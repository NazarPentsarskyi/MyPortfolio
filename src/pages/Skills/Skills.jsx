import styles from './styles.module.css';
import iconHTML from '../../assets/icon_html.png';
import iconCSS from '../../assets/icon_css.png';
import iconJS from '../../assets/icon_js.png';
import iconReact from '../../assets/icon_react.png';
import iconNode from '../../assets/icon_node.png';
import iconMongoDB from '../../assets/icon_mongodb.png';
import iconGithub from '../../assets/icon_github.png';


export const Skills = () => {
  return (
    <>
      <h3>My Skills</h3>
      <div className={styles.skillscontainer}>
        <div className={styles.skillsbox}>
        <div className={styles.skills}>
          <img src={ iconHTML } alt='HTML icon' style={{ width: '100px' }} />
          <p>HTML</p>
        </div>
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
          <img src={ iconReact } alt='React icon' style={{ width: '100px' }} />
          <p>ReactJS</p>
        </div>
        <div className={styles.skills}>
          <img src={ iconNode } alt='Node icon' style={{ width: '100px' }} />
          <p>NodeJS/ExpressJS</p>
        </div>
        <div className={styles.skills}>
          <img src={ iconMongoDB } alt='MongoDB icon' style={{ width: '100px' }} />
          <p>MongoDB</p>
        </div>
        <div className={styles.skills}>
          <img src={ iconGithub } alt='Github icon' style={{ width: '100px' }} />
          <p>Git</p>
        </div>
      </div>
    </>
  )
}
