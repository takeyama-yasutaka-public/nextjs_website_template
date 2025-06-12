/*********************************
    インポート
*********************************/

//フック
import type { Metadata } from 'next'
import { siteMeta, prePage, eyecatchLocal } from '@/lib/constants'
import { getBlogAll } from '@/lib/api'
import { getImageBuffer } from '@/lib/getImageBuffer'
import { getPlaiceholder } from 'plaiceholder'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Function from '@/components/function/index'
import * as PageCommon from '@/components/page/common/index'

/*********************************
    変数定義
*********************************/

type Params = {
  params: { id: number }
}

//サイトデータの定義
const pageName = 'BLOG'
const pageTitle= `${pageName} | `
const pageVisual = 'BLOG'
const pageDescription = ''
const pageSlug = 'blog'
const pagePath = `/${pageSlug}`
const pageType = 'article'
const imageUrl = null
const imageWidth = null
const imageHeight = null

//パンくずデータの定義
const breadcrumb = [
  { path: '/', name: 'Top' },
  { path: `/${pageSlug}`, name: pageName }
]

//ページネーションの表示件数
const PER_PAGE = prePage.blog

/*********************************
    ダイナミックルーティング
*********************************/

export async function generateStaticParams() {

  //ブログ一覧の取得
  const postsObj = await getBlogAll()

  const range = (start:number, end:number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const posts = range(1, Math.ceil(postsObj.totalCount / PER_PAGE))

  return posts.map((post: number) => ({
    id: `${post}`,
  }))
}

//該当ページがない時404を表示する
export const dynamicParams = false

/*********************************
    メタデータのエクスポート
*********************************/

export const metadata: Metadata = {
  title: pageTitle ? `${pageTitle}${siteMeta.siteTitle}` : siteMeta.siteTitle,
  description: pageDescription || siteMeta.siteDesc,
  alternates: {
    canonical: pagePath ? `${siteMeta.siteUrl}${pagePath}` : siteMeta.siteUrl ,
  },
  openGraph: {
    title: pageTitle ? `${pageTitle}${siteMeta.siteTitle}` : siteMeta.siteTitle,
    description: pageDescription || siteMeta.siteDesc,
    siteName: siteMeta.siteTitle,
    type: pageType || siteMeta.siteType,
    locale: siteMeta.siteLocale,
    url: pagePath ? `${siteMeta.siteUrl}${pagePath}` : siteMeta.siteUrl ,
    images: {
      url: imageUrl || siteMeta.siteImgSrc,
      width: imageWidth || siteMeta.siteImgWidth,
      height: imageHeight || siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: pageTitle ? `${pageTitle}${siteMeta.siteTitle}` : siteMeta.siteTitle,
    description: pageDescription || siteMeta.siteDesc,
    images: {
      url: imageUrl || siteMeta.siteImgSrc,
      width: imageWidth || siteMeta.siteImgWidth,
      height: imageHeight || siteMeta.siteImgHeight,
    },
  },
  robots: {
    index: false,
  },
}

/*********************************
   ページデータのエクスポート
*********************************/

export default async function Page({params,}:Params) {

  //ブログ一覧の取得
  const id = params.id
  const postsObj = await getBlogAll(id, PER_PAGE)
  const posts = postsObj.contents
  const totalCount = postsObj.totalCount

  //代替アイキャッチ画像への置換およびブラー画像の生成
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }
  
  //ページの出力
  return (
    <>
      <Function.StructuredData type={pageType} name={pageName} description={pageDescription} imageUrl={imageUrl} path={pagePath} breadcrumb={breadcrumb}/>

      <Layout.PageVisual title={pageVisual}/>

      <Layout.Container modifier="breadcrumb">
        <Layout.Breadcrumb breadcrumb={breadcrumb}/>
      </Layout.Container>
      
      <Layout.Container>
        <Layout.Content>

          <Layout.ContentBox>
            <Layout.ContentHeader>
              <Content.Heading h="h2" modifier="second">BLOG一覧</Content.Heading>
            </Layout.ContentHeader>
            <Layout.ContentBody>

              <Content.BlogPosts>
                {posts.map((post: {id:string, eyecatch:any, title:string, category:any, date:string, content:string}) => (
                  <Content.BlogPostsItem href={`/blog/${post.id}`} image={post.eyecatch} title={post.title} category={post.category} time={post.date} text={post.content} key={post.id}/>
                ))}
              </Content.BlogPosts>

            </Layout.ContentBody>
            <Layout.ContentFooter>
              <Function.Pager totalCount={totalCount} PER_PAGE={PER_PAGE} path={pagePath} id={Number(id)}/>
            </Layout.ContentFooter>
          </Layout.ContentBox>
          
        </Layout.Content>
      </Layout.Container>

      <Layout.Container modifier="ctaArea">
        <PageCommon.CtaArea/>
      </Layout.Container>
    </>
  )
}
