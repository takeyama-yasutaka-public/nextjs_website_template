/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    変数定義
*********************************/

type Props = {
  question: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function Faq({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div>
      {children}
    </div>
  )
}

export function FaqItem(
  {children, question}: 
  Readonly<{children: React.ReactNode;}>&Props) {
  
  //コンポーネントの出力
  return (
    <div className={styles.faqItem}>
      <div className={styles.row}>
        <span className={styles.icon} data-modifier="question">Q</span>
        <p className={styles.questionText}>
          {question}
        </p>
      </div>
      <div className={styles.row}>
        <span className={styles.icon} data-modifier="answer">A</span>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  )
}
