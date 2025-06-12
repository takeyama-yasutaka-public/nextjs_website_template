/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function BulletList({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //コンポーネントの出力
  return <ul className={styles.bulletList}>{children}</ul>
}

export function OrderList({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //コンポーネントの出力
  return <ol className={styles.orderList}>{children}</ol>
}
