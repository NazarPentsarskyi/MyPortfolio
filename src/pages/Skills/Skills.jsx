import styles from './styles.module.css';

export const Skills = () => {
  return (
    <>
      <div className={styles.skillscontainer}>
        <div className={styles.skills}>HTML</div>
        <div className={styles.skills}>CSS</div>
        <div className={styles.skills}>JavaScript</div>
        <div className={styles.skills}>React</div>
        <div className={styles.skills}>NodeJS/ExpressJS</div>
        <div className={styles.skills}>MongoDB</div>
        <div className={styles.skills}>Git</div>
      </div>
    </>
  )
}
