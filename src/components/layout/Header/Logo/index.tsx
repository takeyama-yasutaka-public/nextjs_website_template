//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { usePathname } from 'next/navigation' 
import { useHeaderResetStore } from '@/lib/zustand'
//コンポーネント
import Link from 'next/link'
import Image from 'next/image'
//画像
import logo from '@/images/brand-logo.png'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Logo() {

  const pathname = usePathname()
  
  const headerResetOn = useHeaderResetStore((state) => state.headerResetOn)
  const headerResetOff = useHeaderResetStore((state) => state.headerResetOff)

  //リンククリック時に初期化
  const headerReset = () => {
    headerResetOn()
    setTimeout(() => {
      headerResetOff()
    }, 0)
  }

  //コンポーネントの出力
  return (
    <>
      {pathname === '/' ? (
        <Link href="/" className={styles.logo} onClick={headerReset}>
          <h1>
            <Image
              src={logo}
              alt="BLAND NAME"
              priority
            />
          </h1>
        </Link>
      ) : (
        <Link href="/" className={styles.logo} onClick={headerReset}>
          <Image
            src={logo}
            alt="BLAND NAME"
            priority
          />
        </Link>
      )}
    </>
  )
}
