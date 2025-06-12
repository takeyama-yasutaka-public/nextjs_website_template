/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    変数定義
*********************************/

type Props = {
  text: string
  modifier?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function ClassLabel({text, modifier}: Props) {
  
  //コンポーネントの出力
  return (
    <span className={styles.classLabel} data-modifier={modifier}>{text}</span>
  )
}

export function ClassLabelGroup({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div className={styles.classLabelGroup}>
      {children}
    </div>
  )
}
