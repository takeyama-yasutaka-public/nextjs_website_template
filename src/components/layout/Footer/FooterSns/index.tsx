/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//コンポーネント
import Link from 'next/link'
import Image from 'next/image'
//画像
import x from '@/images/sns_logo_x.png'
import instagram from '@/images/sns_logo_instagram.png'
import facebook from '@/images/sns_logo_facebook.png'
import youtube from '@/images/sns_logo_youtube.png'
import line from '@/images/sns_logo_line.png'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function FooterSns() {
  
  //コンポーネントの出力
  return (
    <>
      <div className={styles.footerSnsHeader}>
        <p>SNS</p>
      </div>

      <div className={styles.footerSnsBody}>
        <Link href="/">
          <Image
            src={x}
            alt="X"
            loading="eager"
          /> 
        </Link>
        <Link href="/">
          <Image
            src={instagram}
            alt="Instagram"
            loading="eager"
          /> 
        </Link>
        <Link href="/">
          <Image
            src={facebook}
            alt="Facebook"
            loading="eager"
          /> 
        </Link>
        <Link href="/">
          <Image
            src={youtube}
            alt="YouTube"
            loading="eager"
          /> 
        </Link>
        <Link href="/">
          <Image
            src={line}
            alt="LINE"
            loading="eager"
          /> 
        </Link>
      </div>
    </>
  )
}
