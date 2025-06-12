/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { formatDate } from '@/lib/formatDate'
//コンポーネント
import * as Content from '@/components/content/index'
import Link from 'next/link'

/*********************************
    変数定義
*********************************/

type Props = {
  href: string
  time: string
  tagNew?: boolean
  tagImportant? :boolean
  title: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function NewsPosts({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <ul>
      {children}
    </ul>
  )
}

export function NewsPostsItem({href, time, tagNew, tagImportant, title}: Props) {
  
  //コンポーネントの出力
  return (
    <li className={styles.newsPostsItem}>
      <Link href={href}>
        <div className={styles.header}>
          <time dateTime={time}>{formatDate(time)}</time>
          {tagNew && (
            <Content.ClassLabel text="NEW" modifier="success"/>
          )}
          {tagImportant && (
            <Content.ClassLabel text="重要" modifier="alert"/>
          )}
        </div>
        <p>{title}</p>
      </Link>
    </li>
  )
}
