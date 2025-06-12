/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//コンポーネント
import Link from 'next/link'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function FooterNav() {
  
  //コンポーネントの出力
  return (
    <nav className={styles.footerNav}>
      <ul>
        <li>
          <Link href="/policy">サイトポリシー</Link>
        </li>
        <li>
          <Link href="/policy">プライバシーポリシー</Link>
        </li>
        <li>
          <Link href="/policy">セキュリティポリシー</Link>
        </li>
        <li>
          <Link href="/sitemap">サイトマップ</Link>
        </li>
        <li>
          <Link href="/contact/">お問い合わせ</Link>
        </li>
        <li>
          <Link href="/component">コンポーネント一覧</Link>
        </li>
      </ul>
    </nav>
  )
}
