import styles from './styles.module.css';
import { Picture } from './Picture';
import { Name } from './Name';

export const Home = () => {
  return (
    <>
      <div className={styles.homecomponent}>
        <Name />
        <Picture />
      </div>
    </>
  )
}
