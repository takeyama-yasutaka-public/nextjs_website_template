/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    変数定義
*********************************/

type Props = {
  title: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function PageVisual({title}: Props) {
  
  //コンポーネントの出力
  return (
    <div className={styles.pageVisual}>
      <div className={styles.inner}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}
