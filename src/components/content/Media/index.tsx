/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { breakpoint } from '@/lib/constants'
import { StaticImageData } from 'next/image'
//コンポーネント
import Image from 'next/image'

/*********************************
    変数定義
*********************************/

type Props = {
  image: StaticImageData
  alt: string
  modifier?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function Media(
  {children, image, alt, modifier}: 
  Readonly<{children: React.ReactNode;}>&Props) {
  
  //コンポーネントの出力
  return (
    <div className={styles.media} data-modifier={modifier}>
      <Image
        src={image}
        alt={alt}
        sizes={`(max-width: ${breakpoint.sp}) 100vw, 256px`}
        placeholder="blur"
        style={{transition:'0.1s'}}
      />
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}

export function MediaText({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <p className={styles.mediaText}>
      {children}
    </p>
  )
}

export function MediaButtonWrapper({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div className={styles.mediaButtonWrapper}>
      {children}
    </div>
  )
}
