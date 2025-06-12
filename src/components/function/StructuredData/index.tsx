/*********************************
    インポート
*********************************/

//フック
import { siteMeta } from '@/lib/constants'
import { Article as JsonLDArticle, WebPage as JsonLDWebPage, WithContext, } from 'schema-dts'

/*********************************
    変数定義
*********************************/

type BreadCrumb = {
  path:string
  name:string
}

type Props = {
  type?:string
  name?:string
  description?:string
  imageUrl?:string | null
  path?:string
  breadcrumb?:BreadCrumb[]
  isHome?:boolean
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function StructuredData({ type, name, description, imageUrl, path, breadcrumb, isHome }:Props) {

  const jsonLd: WithContext<JsonLDArticle | JsonLDWebPage> = {
    '@context': 'https://schema.org',
    '@type': type ?  'Article' : 'WebPage',
    headline: name || siteMeta.siteTitle,
    description: description || siteMeta.siteDesc,
    image: imageUrl || siteMeta.siteImgSrc,
    url: path ? `${siteMeta.siteUrl}${path}` : siteMeta.siteUrl ,
  }

  const itemListElement = breadcrumb?.map((item, index) => {
    return {
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteMeta.siteUrl}${item.path}`
    }
  })

  const breadcrumbjsonld = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    }
  ]

  //コンポーネントの出力
  return (
    <>
      <script
        key="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {!isHome && 
        <script
          id="breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbjsonld) }}
        />
      }
    </>
  )
}
