/*********************************
    インポート
*********************************/

//フック
import type { Metadata } from 'next'
import { siteMeta, eyecatchLocal } from '@/lib/constants'
import {
  getBlogPostById,
  getBlogAll,
  getBlogCategory,
  getBlogRanking,
} from '@/lib/api'
import { extractText } from '@/lib/extract-text'
import { formatDate } from '@/lib/formatDate'
import { getImageBuffer } from '@/lib/getImageBuffer'
import { getPlaiceholder } from 'plaiceholder'
import { groupBy } from '@/lib/archive'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Function from '@/components/function/index'
import * as PageCommon from '@/components/page/common/index'
import Image from 'next/image'
import { Suspense } from 'react'

/*********************************
    変数定義
*********************************/

type Params = {
  params: { id: string }
}

//サイトデータの定義
const pageData = function (
  title: string,
  content: string,
  id: string,
  eyecatchUrl?: string,
  eyecatchWidth?: string,
  eyecatchHeight?: string
) {
  const pageName = title
  const pageTitle = `${pageName} | `
  const pageVisual = 'BLOG'
  const pageDescription = extractText(content)
  const pageId = id
  const pagePath = `/blog/${pageId}`
  const pageType = 'article'
  const imageUrl = eyecatchUrl
  const imageWidth = eyecatchWidth
  const imageHeight = eyecatchHeight

  return {
    pageName: pageName,
    pageTitle: pageTitle,
    pageVisual: pageVisual,
    pageDescription: pageDescription,
    pageId: pageId,
    pagePath: pagePath,
    pageType: pageType,
    imageUrl: imageUrl,
    imageWidth: imageWidth,
    imageHeight: imageHeight,
  }
}

//パンくずデータの定義
const breadcrumbData = function (id: string, name: string) {
  const breadcrumb = [
    { path: '/', name: 'Top' },
    { path: '/blog', name: 'BLOG' },
    { path: `/blog/${id}`, name: name },
  ]

  return breadcrumb
}

/*********************************
    ダイナミックルーティング
*********************************/

export async function generateStaticParams() {
  //ブログ一覧の取得
  const postsObj = await getBlogAll()
  const posts = postsObj.contents

  return posts.map((post: { id: string }) => ({
    id: post.id,
  }))
}

//該当ページがない時404を表示する
export const dynamicParams = false

/*********************************
    メタデータのエクスポート
*********************************/

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  //現在IDを取得
  const id = params.id
  //ブログ記事の取得
  const post = await getBlogPostById(id)

  //代替アイキャッチ画像への置換
  const eyecatch = post.eyecatch ?? eyecatchLocal

  //サイトデータ
  const pageDatas = pageData(
    post.title,
    post.content,
    id,
    eyecatch.url,
    eyecatch.width,
    eyecatch.height
  )

  //メタデータの出力
  return {
    title: pageDatas.pageTitle
      ? `${pageDatas.pageTitle}${siteMeta.siteTitle}`
      : siteMeta.siteTitle,
    description: pageDatas.pageDescription || siteMeta.siteDesc,
    alternates: {
      canonical: pageDatas.pagePath
        ? `${siteMeta.siteUrl}${pageDatas.pagePath}`
        : siteMeta.siteUrl,
    },
    openGraph: {
      title: pageDatas.pageTitle
        ? `${pageDatas.pageTitle}${siteMeta.siteTitle}`
        : siteMeta.siteTitle,
      description: pageDatas.pageDescription || siteMeta.siteDesc,
      siteName: siteMeta.siteTitle,
      type: (pageDatas.pageType as 'article' | 'website') || siteMeta.siteType,
      locale: siteMeta.siteLocale,
      url: pageDatas.pagePath
        ? `${siteMeta.siteUrl}${pageDatas.pagePath}`
        : siteMeta.siteUrl,
      images: {
        url: pageDatas.imageUrl || siteMeta.siteImgSrc,
        width: pageDatas.imageWidth || siteMeta.siteImgWidth,
        height: pageDatas.imageHeight || siteMeta.siteImgHeight,
      },
    },
    twitter: {
      title: pageDatas.pageTitle
        ? `${pageDatas.pageTitle}${siteMeta.siteTitle}`
        : siteMeta.siteTitle,
      description: pageDatas.pageDescription || siteMeta.siteDesc,
      images: {
        url: pageDatas.imageUrl || siteMeta.siteImgSrc,
        width: pageDatas.imageWidth || siteMeta.siteImgWidth,
        height: pageDatas.imageHeight || siteMeta.siteImgHeight,
      },
    },
  }
}

/*********************************
   ページデータのエクスポート
*********************************/

export default async function Page({ params }: Params) {
  //現在IDを取得
  const { id } = params
  //ブログ記事の取得
  const post = await getBlogPostById(id)

  //代替アイキャッチ画像への置換
  const eyecatch = post.eyecatch ?? eyecatchLocal
  //ブラー画像の生成
  const imageBuffer = await getImageBuffer(eyecatch.url)
  const { base64 } = await getPlaiceholder(imageBuffer)
  eyecatch.blurDataURL = base64

  //ブログ一覧の取得
  const newBlogPostsObj = await getBlogAll(1, 5)
  const newBlogPosts = newBlogPostsObj?.contents
  //カテゴリー一覧の取得
  const allCats = await getBlogCategory()
  //ブログ一覧の取得
  const postsObjAll = await getBlogAll()
  //年月一覧の取得
  const monthlyIndex = groupBy(postsObjAll.contents)
  //人気記事の取得
  const rankingPostsObj = await getBlogRanking()
  const rankingPosts = rankingPostsObj.ranking

  //サイトデータ
  const pageDatas = pageData(
    post.title,
    post.content,
    id,
    eyecatch.url,
    eyecatch.width,
    eyecatch.height
  )
  //パンくずデータ
  const breadcrumb = breadcrumbData(pageDatas.pageId, pageDatas.pageName)

  //ページの出力
  return (
    <>
      <Function.StructuredData
        type={pageDatas.pageType}
        name={pageDatas.pageName}
        description={pageDatas.pageDescription}
        imageUrl={pageDatas.imageUrl}
        path={pageDatas.pagePath}
        breadcrumb={breadcrumb}
      />

      <Function.PageViewSender postId={post.id} />

      <Layout.PageVisual title={pageDatas.pageVisual} />

      <Layout.Container modifier="breadcrumb">
        <Layout.Breadcrumb breadcrumb={breadcrumb} />
      </Layout.Container>

      <Layout.Container>
        <Layout.Sidebar modifier="threeColumnLeft">
          <Suspense>
            <Function.Search modifier="sp-only" />
          </Suspense>
          <Layout.SidebarBox>
            <Content.Heading h="h2" modifier="fifth">
              最新の記事
            </Content.Heading>
            <Layout.SidebarList>
              {newBlogPosts.map(
                (post: {
                  id: string
                  date: string
                  tag: string
                  title: string
                }) => (
                  <Layout.SidebarListDate
                    path={`/blog/${post.id}`}
                    title={post.title}
                    time={post.date}
                    key={post.id}
                  />
                )
              )}
            </Layout.SidebarList>
          </Layout.SidebarBox>
          <Layout.SidebarBox>
            <Content.Heading h="h2" modifier="fifth">
              人気の記事
            </Content.Heading>
            <Layout.SidebarList>
              {rankingPosts.map(
                (post: { id: string; tag: string; title: string }) => (
                  <Layout.SidebarListRanking
                    path={`/blog/${post.id}`}
                    title={post.title}
                    key={post.id}
                  />
                )
              )}
            </Layout.SidebarList>
          </Layout.SidebarBox>
        </Layout.Sidebar>
        <Layout.Content>
          <Layout.ContentBox>
            <Layout.ContentHeader>
              <Content.Heading h="h2" modifier="third">
                {post.title}
              </Content.Heading>
              <Layout.ContentHeaderBottom>
                <Content.ClassLabelGroup>
                  {post.category.map(
                    ({ name, id }: { name: string; id: string }) => (
                      <Content.ClassLabel text={name} key={id} />
                    )
                  )}
                </Content.ClassLabelGroup>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </Layout.ContentHeaderBottom>
              <Image
                src={eyecatch.url}
                alt={post.title}
                width={eyecatch.width}
                height={eyecatch.height}
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
                style={{ transition: '0.1s' }}
                priority
              />
            </Layout.ContentHeader>
            <Layout.ContentBody>
              <Content.RichContent>
                <Function.ConvertBody contentHTML={post.content} />
              </Content.RichContent>
            </Layout.ContentBody>
            <Layout.ContentFooter>
              <Content.Button href="/blog">一覧へ戻る</Content.Button>
            </Layout.ContentFooter>
          </Layout.ContentBox>
        </Layout.Content>
        <Layout.Sidebar modifier="threeColumnRight">
          <Suspense>
            <Function.Search modifier="pc-only" />
          </Suspense>
          <Layout.SidebarBox>
            <Content.Heading h="h2" modifier="fifth">
              カテゴリ
            </Content.Heading>
            <Layout.SidebarList>
              {allCats.map(({ name, slug }: { name: string; slug: string }) => (
                <Layout.SidebarListFilter
                  path={`/blog/category/${slug}`}
                  title={name}
                  key={slug}
                />
              ))}
            </Layout.SidebarList>
          </Layout.SidebarBox>
          <Layout.SidebarBox>
            <Content.Heading h="h2" modifier="fifth">
              過去の記事
            </Content.Heading>
            <Layout.SidebarList>
              {Object.keys(monthlyIndex).map((index) => (
                <Layout.SidebarListFilter
                  path={`/blog/archive/${index}`}
                  title={`${index.split('_')[0]}年${index.split('_')[1]}月(${
                    monthlyIndex[index as any].length
                  })`}
                  key={index}
                />
              ))}
            </Layout.SidebarList>
          </Layout.SidebarBox>
        </Layout.Sidebar>
      </Layout.Container>

      <Layout.Container modifier="ctaArea">
        <PageCommon.CtaArea />
      </Layout.Container>
    </>
  )
}
