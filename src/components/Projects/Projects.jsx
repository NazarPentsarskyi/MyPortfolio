import styles from './styles.module.css';
import iconShevchenko from '../../assets/icon_Shevchenko.png';
import iconWeather from '../../assets/icon_Weather.png';

export const Projects = () => {
  return (
    <>
      <div name='projects' className={styles.projectscontainer}>
        <h3>My Projects</h3>
        <div className={styles.projectslinks}>
          <div className={styles.projects}>
            <a href='https://github.com/NazarPentsarskyi/ProsvitaVynnyky' target='_blank'>
              <img src={ iconShevchenko } alt='Shevchenko icon' style={{ width: '120px' }} />
              <p>Винниківська Просвіта</p>
            </a>
          </div>
          <div className={styles.projects}>
            <a href='https://github.com/NazarPentsarskyi/WeatherApp' target='_blank'>
              <img src={ iconWeather } alt='Weather icon' style={{ width: '142px' }} />
              <p>Weather Application</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
