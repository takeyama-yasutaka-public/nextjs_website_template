/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { formatDate } from '@/lib/formatDate'
import { extractText } from '@/lib/extract-text'
import Highlighter from 'react-highlight-words'
//コンポーネント
import Link from 'next/link'
import Image from 'next/image'
import * as Content from '@/components/content/index'

/*********************************
    変数定義
*********************************/

type ImageData = {
  url: string
  width: number
  height: number
  blurDataURL: string
}

type Category = {
  name: string
  id: string
}

type Props = {
  href: string
  image: ImageData
  title: string
  category: Category[]
  time: string
  text: string
  search?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function BlogPosts({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <ul>
      {children}
    </ul>
  )
}

export function BlogPostsItem({href, image, title, category, time, text, search=''}: Props) {

  //コンポーネントの出力
  return (
    <li className={styles.blogPostsItem}>
      <Link href={href}>
        {image.blurDataURL ? (
          <Image
            src={image.url}
            alt={title}
            width={image.width}
            height={image.height}
            sizes="256px"
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            style={{transition:'0.1s'}}
          />
        ) : (
          <Image
            src={image.url}
            alt={title}
            width={image.width}
            height={image.height}
            sizes="256px"
          />
        )}
        <div className={styles.body}>
          <p className={styles.title}>
            <Highlighter
              highlightClassName="highlight"
              searchWords={search.split(/\s/)}
              autoEscape={true}
              textToHighlight={title}
            />
          </p>
          <Content.ClassLabelGroup>
            {category.map(({name, id}) => (
              <Content.ClassLabel text={name} key={id}/>
            ))}
          </Content.ClassLabelGroup>
          <time dateTime={time}>{formatDate(time)}</time>
          <p className={styles.text}>
            <Highlighter
              highlightClassName="highlight"
              searchWords={search.split(/\s/)}
              autoEscape={true}
              textToHighlight={extractText(text)}
            />
          </p>
        </div>
      </Link>
    </li>
  )
}
