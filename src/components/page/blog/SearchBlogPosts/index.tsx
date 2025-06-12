//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//コンポーネント
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

export default function SearchBlogPosts({href, image, title, category, time, text, search=''}: Props) {

  //コンポーネントの出力
  return (
    <Content.BlogPostsItem href={href} image={image} title={title} category={category} time={time} text={text} search={search}/>
  )
}
