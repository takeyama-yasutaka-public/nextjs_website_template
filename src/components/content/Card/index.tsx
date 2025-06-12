/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { breakpoint } from '@/lib/constants'
import { StaticImageData } from 'next/image'
//コンポーネント
import Link from 'next/link'
import Image from 'next/image'

/*********************************
    変数定義
*********************************/

type CardGroupProps = {
  modifier: string
}

type CardProps = {
  href?: string
  image: StaticImageData
  alt: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function CardGroup(
  {children, modifier}: 
  Readonly<{children: React.ReactNode;}>&CardGroupProps) {
  
  //コンポーネントの出力
  return (
    <div className={styles.cardGroup} data-modifier={modifier}>
      {children}
    </div>
  )
}

export function Card(
  {children, href, image, alt}: 
  Readonly<{children: React.ReactNode;}>&CardProps) {
  
  //コンポーネントの出力
  return (
    <>
      {href ? (
        <Link href={href} className={styles.card} data-modifier="link">
          <Image
            src={image}
            alt={alt}
            sizes={`(max-width: ${breakpoint.sp}) 100vw, 272px`}
            placeholder="blur"
            style={{transition:'0.1s'}}
          />
          <div className={styles.body}>
            {children}
          </div>
        </Link>
      ) : (
        <div className={styles.card}>
          <Image
            src={image}
            alt={alt}
            placeholder="blur"
            style={{transition:'0.1s'}}
          />
          <div className={styles.body}>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export function CardText({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <p className={styles.cardText}>
      {children}
    </p>
  )
}
