/*********************************
    インポート
*********************************/

//フック
import type { Metadata } from 'next'
import { siteMeta, prePage, eyecatchLocal } from '@/lib/constants'
import { getBlogAll, getBlogAllByArchive } from '@/lib/api'
import { getImageBuffer } from '@/lib/getImageBuffer'
import { getPlaiceholder } from 'plaiceholder'
import { groupBy } from '@/lib/archive'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Function from '@/components/function/index'
import * as PageCommon from '@/components/page/common/index'
import * as PageBlog from '@/components/page/blog/index'
import Link from 'next/link'

/*********************************
    変数定義
*********************************/

type Params = {
  params: { date: any, id: number }
}

//サイトデータの定義
const pageData = function(title:string,content:string,slug:string){

  const pageName = title
  const pageTitle= `${pageName} | `
  const pageVisual = 'BLOG'
  const pageDescription = `${content}`
  const pageSlug = slug
  const pagePath = `/blog/archive/${pageSlug}`
  const pageType = "article"
  const imageUrl = null
  const imageWidth = null
  const imageHeight = null

  return {
    pageName: pageName,
    pageTitle: pageTitle,
    pageVisual: pageVisual,
    pageDescription: pageDescription,
    pageSlug: pageSlug,
    pagePath: pagePath,
    pageType: pageType,
    imageUrl: imageUrl,
    imageWidth: imageWidth,
    imageHeight: imageHeight
  }
}

//パンくずデータの定義
const breadcrumbData = function(slug:string,name:string){

  const breadcrumb = [
    { path: '/', name: 'Top'},
    { path: '/blog', name: 'BLOG'},
    { path: `/blog/archive/${slug}`, name: name}
  ]

  return breadcrumb
}

//ページネーションの表示件数
const PER_PAGE = prePage.blog

/*********************************
    ダイナミックルーティング
*********************************/

export async function generateStaticParams() {

  //ブログ一覧の取得
  const repos = await getBlogAll()

  //年月一覧の取得
  const monthlyIndex = groupBy(repos.contents)
  //配列に変換
  const monthlyIndexArray = Object.keys(monthlyIndex)

  const range = (start:number, end:number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const nums = range(1, Math.ceil(repos.totalCount / PER_PAGE))

  return monthlyIndexArray.flatMap((index) => 
    nums.map((num: number) => ({
      date: index,
      id: `${num}`,
    }))
  )
}

//該当ページがない時404を表示する
export const dynamicParams = false

/*********************************
    メタデータのエクスポート
*********************************/

export async function generateMetadata({ params }:Params): Promise<Metadata> {

  // 現在年月を取得
  const date = params.date
  const year = date.split("_")[0]
  const month = date.split("_")[1]

  //サイトデータ
  const pageDatas = pageData(`${year}年${month}月`,`${year}年${month}月の記事`,params.date)

  //メタデータの出力
  return {
    title: pageDatas.pageTitle ? `${pageDatas.pageTitle}${siteMeta.siteTitle}` : siteMeta.siteTitle,
    description: pageDatas.pageDescription || siteMeta.siteDesc,
    alternates: {
      canonical: pageDatas.pagePath ? `${siteMeta.siteUrl}${pageDatas.pagePath}` : siteMeta.siteUrl ,
    },
    openGraph: {
      title: pageDatas.pageTitle ? `${pageDatas.pageTitle}${siteMeta.siteTitle}` : siteMeta.siteTitle,
      description: pageDatas.pageDescription || siteMeta.siteDesc,
      siteName: siteMeta.siteTitle,
      type: pageDatas.pageType as "article" | "website" || siteMeta.siteType,
      locale: siteMeta.siteLocale,
      url: pageDatas.pagePath ? `${siteMeta.siteUrl}${pageDatas.pagePath}` : siteMeta.siteUrl ,
      images: {
        url: pageDatas.imageUrl || siteMeta.siteImgSrc,
        width: pageDatas.imageWidth || siteMeta.siteImgWidth,
        height: pageDatas.imageHeight || siteMeta.siteImgHeight,
      },
    },
    twitter: {
      title: pageDatas.pageTitle ? `${pageDatas.pageTitle}${siteMeta.siteTitle}` : siteMeta.siteTitle,
      description: pageDatas.pageDescription || siteMeta.siteDesc,
      images: {
        url: pageDatas.imageUrl || siteMeta.siteImgSrc,
        width: pageDatas.imageWidth || siteMeta.siteImgWidth,
        height: pageDatas.imageHeight || siteMeta.siteImgHeight,
      },
    },
    robots: {
      index: false,
    },
  }
}

/*********************************
   ページデータのエクスポート
*********************************/

export default async function Post({params,}:Params) {

  // 現在年月を取得
  const date = params.date
  const year = date.split("_")[0]
  const month = date.split("_")[1]
  
  //アーカイブ絞り込み一覧の取得
  const startOfMonthTmp = new Date(year, month - 1)
  const startOfMonth = new Date(startOfMonthTmp.getTime() - 32400001)
  const endOfMonthTmp = new Date(year, month)
  const endOfMonth = new Date(endOfMonthTmp.getTime() - 32400002)
  const filters = `date[greater_than]${startOfMonth.toISOString()}[and]date[less_than]${endOfMonth.toISOString()}`
  const id = params.id
  const postsObj = await getBlogAllByArchive(filters, id, PER_PAGE)
  const posts = postsObj?.contents
  const totalCount = postsObj?.totalCount
  
  //代替アイキャッチ画像への置換およびブラー画像の生成
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }

  //ブログ一覧の取得
  const postsObjAll = await getBlogAll()
  //年月一覧の取得
  const monthlyIndex = groupBy(postsObjAll.contents)

  //サイトデータ
  const pageDatas = pageData(`${year}年${month}月`,`${year}年${month}月の記事`,params.date)
  //パンくずデータ
  const breadcrumb = breadcrumbData(pageDatas.pageSlug,pageDatas.pageName)
    
  //ページの出力
  return (
    <>
      <Function.StructuredData type={pageDatas.pageType} name={pageDatas.pageName} description={pageDatas.pageDescription} imageUrl={pageDatas.imageUrl} path={pageDatas.pagePath} breadcrumb={breadcrumb}/>

      <Layout.PageVisual title={pageDatas.pageVisual}/>

      <Layout.Container modifier="breadcrumb">
        <Layout.Breadcrumb breadcrumb={breadcrumb}/>
      </Layout.Container>
      
      <Layout.Container>
        <Layout.Content>

          <Layout.ContentBox>
            <Layout.ContentHeader>
              <Content.Heading h="h2" modifier="second">BLOG：{year}年{month}月</Content.Heading>
            </Layout.ContentHeader>
            <Layout.ContentBody>

              <PageBlog.Filter>
                {Object.keys(monthlyIndex).map((index) => (
                  <Link href={`/blog/archive/${index}`} key={index}>
                    {`${index.split("_")[0]}年${index.split("_")[1]}月(${monthlyIndex[index as any].length})`}
                  </Link>
                ))}
              </PageBlog.Filter>

              <Content.BlogPosts>
                {posts.map((post: {id:string, eyecatch:any, title:string, category:any, date:string, content:string}) => (
                  <Content.BlogPostsItem href={`/blog/${post.id}`} image={post.eyecatch} title={post.title} category={post.category} time={post.date} text={post.content} key={post.id}/>
                ))}
              </Content.BlogPosts>

            </Layout.ContentBody>
            <Layout.ContentFooter>
              <Function.Pager totalCount={totalCount} PER_PAGE={PER_PAGE} path={pageDatas.pagePath} id={Number(id)}/>
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
