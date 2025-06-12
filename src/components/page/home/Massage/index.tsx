/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function Massage({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div className={styles.massage}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  )
}

export function MassageCatchPhrase({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <p className={styles.massageCatchPhrase}>{children}</p>
  )
}

export function MassageText({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <p className={styles.massageText}>{children}</p>
  )
}
