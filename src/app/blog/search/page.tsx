/*********************************
    インポート
*********************************/

//スタイル
import styles from './page.module.scss'
//フック
import type { Metadata } from 'next'
import { siteMeta, prePage, eyecatchLocal } from '@/lib/constants'
import { getBlogAllBySearch } from '@/lib/api'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Function from '@/components/function/index'
import * as PageCommon from '@/components/page/common/index'
import * as PageBlog from '@/components/page/blog/index'
import { Suspense } from 'react'

/*********************************
    変数定義
*********************************/

//サイトデータの定義
const pageName = 'BLOG検索'
const pageTitle= `${pageName} | `
const pageVisual = 'BLOG'
const pageDescription = ''
const pageSlug = 'search'
const pagePath = `/blog/${pageSlug}`
const pageType = 'article'
const imageUrl = null
const imageWidth = null
const imageHeight = null

//パンくずデータの定義
const breadcrumb = [
  { path: '/', name: 'Top' },
  { path: '/blog', name: 'BLOG' },
  { path: `/${pageSlug}`, name: pageName }
]

//ページネーションの表示件数
const PER_PAGE = prePage.blog

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

export default async function Page({ searchParams, }: { searchParams: { q: string, id: number } }) {

  //パラメータを取得
  const q = searchParams.q
  const id = searchParams.id

  //検索絞り込みの記事一覧を取得
  const postsObj = await getBlogAllBySearch( q, id, PER_PAGE )
  const posts = postsObj?.contents
  const totalCount = postsObj?.totalCount
  
  //代替アイキャッチ画像への置換およびブラー画像の生成
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
  }

  const isNotFound = q && totalCount === 0
  
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
            {q && (
              <Layout.ContentHeader>
                <Content.Heading h="h2" modifier="second">BLOG検索：{q}</Content.Heading>
                <p className={styles.headerEvents}>全{totalCount}件</p>
              </Layout.ContentHeader>
            )}
            <Layout.ContentBody>

              <Suspense>
                <Function.Search/>
              </Suspense>

              {q ? (
                <Content.BlogPosts>
                  {posts.map((post: {id:string, eyecatch:any, title:string, category:any, date:string, content:string}) => (
                    <PageBlog.SearchBlogPosts href={`/blog/${post.id}`} image={post.eyecatch} title={post.title} category={post.category} time={post.date} text={post.content} search={q} key={post.id}/>
                  ))}
                </Content.BlogPosts>
              ) : (
                <p>検索ワードが入力されていません。</p>
              )}

              {isNotFound && (
                <p>該当する記事は見つかりませんでした。</p>
              )}

            </Layout.ContentBody>
            {q && (
              <Layout.ContentFooter>
                <Function.SearchPager totalCount={totalCount} PER_PAGE={PER_PAGE} id={Number(id)}/>
              </Layout.ContentFooter>
            )}
          </Layout.ContentBox>
          
        </Layout.Content>
      </Layout.Container>

      <Layout.Container modifier="ctaArea">
        <PageCommon.CtaArea/>
      </Layout.Container>
    </>
  )
}
