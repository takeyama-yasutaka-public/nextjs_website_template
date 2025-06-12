/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    変数定義
*********************************/

type Props = {
  modifier?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function CtaArea(
  {children, modifier}: 
  Readonly<{children: React.ReactNode;}>&Props) {
  
  //コンポーネントの出力
  return (
    <div className={styles.ctaArea} data-modifier={modifier}>
      {children}
    </div>
  )
}

export function CtaAreaTitle({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <p className={styles.ctaAreaTitle}>
      {children}
    </p>
  )
}
