import { useContext } from 'react'
import { AppContext } from '../../App'
import styles from './Search.module.scss'

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext)

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground='new 0 0 32 32'
        id='EditableLine'
        version='1.1'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='14'
          cy='14'
          fill='none'
          id='XMLID_42_'
          r='9'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='2'
        ></circle>
        <line
          fill='none'
          id='XMLID_44_'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='2'
          x1='27'
          x2='20.366'
          y1='27'
          y2='20.366'
        ></line>
      </svg>
      <input
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        className={styles.input}
        placeholder='Пошук піцци...'
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={styles.clearIcon}
          src='https://www.seekpng.com/png/detail/105-1059065_cross-thin-comments-close-icon-svg-thin.png'
          alt=''
        ></img>
      )}
    </div>
  )
}
