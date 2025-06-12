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

export function Sidebar(
  {children, modifier}: 
  Readonly<{children: React.ReactNode;}>&Props) {
  
  //コンポーネントの出力
  return (
    <aside className={styles.sidebar} data-modifier={modifier}>
      {children}
    </aside>
  )
}

export function SidebarBox({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div className={styles.sidebarBox}>
      {children}
    </div>
  )
}
