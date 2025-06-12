/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faArrowUpRightFromSquare, faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons'

/*********************************
    変数定義
*********************************/

type Props = {
  icon: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Icon(
  {children, icon}: 
  Readonly<{children: React.ReactNode;}>&Props) {
  
  //コンポーネントの出力
  return (
    <span className={styles.icon}>
      {icon === 'faAngleLeft' ? <FontAwesomeIcon icon={faAngleLeft} className={styles.iconIcon}/> : ''}
      {children}
      {icon === 'faAngleRight' ? <FontAwesomeIcon icon={faAngleRight} className={styles.iconIcon}/> : ''}
      {icon === 'faArrowUpRightFromSquare' ? <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.iconIcon}/> : ''}
      {icon === 'faFilePdf' ? <FontAwesomeIcon icon={faFilePdf} className={styles.iconIcon}/> : ''}
      {icon === 'faDownload' ? <FontAwesomeIcon icon={faDownload} className={styles.iconIcon}/> : ''}
    </span>
  )
}
