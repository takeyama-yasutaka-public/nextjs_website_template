/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    変数定義
*********************************/

type PriceBoxProps = {
  title: string
  price: string
}

type PriceBoxFeaturesProps = {
  heading: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function PriceBoxGroup({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div className={styles.priceBoxGroup}>
      {children}
    </div>
  )
}

export function PriceBox(
  {children, title, price}: 
  Readonly<{children: React.ReactNode;}>&PriceBoxProps) {
  
  //コンポーネントの出力
  return (
    <div className={styles.priceBox}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}

export function PriceBoxFeatures(
  {children, heading}: 
  Readonly<{children: React.ReactNode;}>&PriceBoxFeaturesProps) {
  
  //コンポーネントの出力
  return (
    <div className={styles.priceBoxfeatures}>
      <div className={styles.priceBoxfeaturesHeader}>{heading}</div>
      <div className={styles.priceBoxfeaturesText}>{children}</div>
    </div>
  )
}
