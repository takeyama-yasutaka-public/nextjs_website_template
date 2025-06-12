/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { formatDate } from '@/lib/formatDate'
//コンポーネント
import Link from 'next/link'

/*********************************
    変数定義
*********************************/

type Props = {
  path: string
  title: string
}

type SidebarListDateProps = {
  path: string
  title: string
  time: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function SidebarList({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <ul className={styles.sidebarList}>
      {children}
    </ul>
  )
}

export function SidebarListMenu({path, title}: Props) {
  
  //コンポーネントの出力
  return (
    <li>
      <Link href={path} className={styles.sidebarListMenu}>{title}</Link>
    </li>
  )
}

export function SidebarListDate({path, title, time}: SidebarListDateProps) {
  
  //コンポーネントの出力
  return (
    <li className={styles.sidebarListDate}>
      <Link href={path}>{title}</Link>
      <time dateTime={time}>{formatDate(time)}</time>
    </li>
  )
}

export function SidebarListRanking({path, title}: Props) {
  
  //コンポーネントの出力
  return (
    <li className={styles.sidebarListRanking}>
      <Link href={path}>{title}</Link>
    </li>
  )
}

export function SidebarListFilter({path, title}: Props) {
  
  //コンポーネントの出力
  return (
    <li className={styles.sidebarListFilter}>
      <Link href={path}>{title}</Link>
    </li>
  )
}
