import { Link } from 'react-router-dom'
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <i>🤨</i>
      <h2>Нічого не знайдено...</h2>
      <p>
        Спробуй ще раз або повернись на{' '}
        <Link className={styles.link} to='/'>
          головну
        </Link>
      </p>
    </div>
  )
}
