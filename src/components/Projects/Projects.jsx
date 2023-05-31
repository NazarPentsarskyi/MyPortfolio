import styles from './styles.module.css';
import iconShevchenko from '../../assets/icon_Shevchenko.png';

export const Projects = () => {
  return (
    <>
      <h3>My Projects</h3>
      <div name='projects' className={styles.projectscontainer}>
      
        <div className={styles.projects}>
          <img src={ iconShevchenko } alt='Shevchenko icon' style={{ width: '120px' }} />
          <p>Винниківська Просвіта</p>
        </div>
      </div>
    </>
  )
}
