/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    変数定義
*********************************/

type Props = {
  modifier: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function Container(
  {children, modifier}: 
  Readonly<{children: React.ReactNode;}>&Props) {
  
  //コンポーネントの出力
  return (
    <div className={styles.container} data-modifier={modifier}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  )
}

export function ContainerHeader({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div className={styles.header}>
      <h2 className={styles.heading}>{children}</h2>
    </div>
  )
}
