/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Divider() {
  
  //コンポーネントの出力
  return (
    <hr className={styles.divider}/>
  )
}