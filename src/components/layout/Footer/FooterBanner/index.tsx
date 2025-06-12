/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//コンポーネント
import Link from 'next/link'
import Image from 'next/image'
//画像
import banner from '@/images/image_banner.png'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function FooterBanner() {
  
  //コンポーネントの出力
  return (
    <div className={styles.footerBanner}>
      <Link href="">
        <Image
          src={banner}
          alt="バナー"
          sizes="234px"
          placeholder="blur"
          style={{transition:'0.1s'}}
        /> 
      </Link>
      <Link href="">
        <Image
          src={banner}
          alt="バナー"
          sizes="234px"
          placeholder="blur"
          style={{transition:'0.1s'}}
        /> 
      </Link>
      <Link href="">
        <Image
          src={banner}
          alt="バナー"
          sizes="234px"
          placeholder="blur"
          style={{transition:'0.1s'}}
        /> 
      </Link>
    </div>
  )
}
