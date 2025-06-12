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
  modifier?: string
  image: StaticImageData
  alt: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function MediaGroup({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <article className={styles.mediaGroup}>
      {children}
    </article>
  )
}

export function Media(
  {children, modifier, image, alt}: 
  Readonly<{children: React.ReactNode;}>&Props) {
  
  //コンポーネントの出力
  return (
    <section className={styles.media} data-modifier={modifier} >
      <div className={styles.inner}>
        <div className={styles.body}>
          {children}
        </div>
        <Image
          src={image}
          alt={alt}
          sizes={`(max-width: ${breakpoint.sp}) 100vw, 464px`}
          placeholder="blur"
          style={{transition:'0.1s'}}
        />
      </div>
    </section>
  )
}

