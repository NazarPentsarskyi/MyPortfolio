import styles from './styles.module.css';

export const About = () => {
  return (
    <>
      <div name='about' className={styles.about}>
        <p>
        Hello!
        <br />
        My name is <span>Nazar Pentsarskyi</span>, I am a full-stack CAD/CAM Engineer with 13 years of production experience in 3D modeling, mechanics, and metalworking.
        <br />
        Currently, I am working on a volunteer educational project. This project aims to collect data such as articles, posts, photos, 
        etc., as well as announcements of upcoming events.
        <br />
        For the client side, I use <span>React</span> and for the server side, I use <span>Node.js/Express.js</span> to connect to <span>MongoDB</span>.
        <br />
        The project is almost completed, and the final stage is design and code improvement.
        <br />
        I will be really grateful for the opportunity to join your team as a Junior developer or an Intern.
        <br />
        See you!
        </p>
      </div>
    </>
  )
}
