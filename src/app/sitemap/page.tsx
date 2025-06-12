/*********************************
    インポート
*********************************/

//スタイル
import styles from './page.module.scss'
//フック
import type { Metadata } from 'next'
import { siteMeta, globalNavi } from '@/lib/constants'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Function from '@/components/function/index'
import Link from 'next/link'

/*********************************
    変数定義
*********************************/

//サイトデータの定義
const pageName = 'サイトマップ'
const pageTitle = `${pageName} | `
const pageVisual = 'サイトマップ'
const pageDescription = ''
const pageSlug = 'sitemap'
const pagePath = `/${pageSlug}`
const pageType = 'article'
const imageUrl = null
const imageWidth = null
const imageHeight = null

//パンくずデータの定義
const breadcrumb = [
  { path: '/', name: 'Top' },
  { path: `/${pageSlug}`, name: pageName },
]

/*********************************
    メタデータのエクスポート
*********************************/

export const metadata: Metadata = {
  title: pageTitle ? `${pageTitle}${siteMeta.siteTitle}` : siteMeta.siteTitle,
  description: pageDescription || siteMeta.siteDesc,
  alternates: {
    canonical: pagePath ? `${siteMeta.siteUrl}${pagePath}` : siteMeta.siteUrl,
  },
  openGraph: {
    title: pageTitle ? `${pageTitle}${siteMeta.siteTitle}` : siteMeta.siteTitle,
    description: pageDescription || siteMeta.siteDesc,
    siteName: siteMeta.siteTitle,
    type: pageType || siteMeta.siteType,
    locale: siteMeta.siteLocale,
    url: pagePath ? `${siteMeta.siteUrl}${pagePath}` : siteMeta.siteUrl,
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
}

/*********************************
   ページデータのエクスポート
*********************************/

export default function Page() {
  //ページの出力
  return (
    <>
      <Function.StructuredData
        type={pageType}
        name={pageName}
        description={pageDescription}
        imageUrl={imageUrl}
        path={pagePath}
        breadcrumb={breadcrumb}
      />

      <Layout.PageVisual title={pageVisual} />

      <Layout.Container modifier="breadcrumb">
        <Layout.Breadcrumb breadcrumb={breadcrumb} />
      </Layout.Container>

      <Layout.Container>
        <Layout.Content>
          <Layout.ContentBox>
            <Layout.ContentBody>
              <ul className={styles.sitemap}>
                {globalNavi.items.map((item, index) => {
                  return (
                    <>
                      {!item.items ? (
                        <li key={item.id}>
                          <Link href={item.path}>{item.title}</Link>
                        </li>
                      ) : (
                        <li key={item.id}>
                          <p>{item.title}</p>
                          <ul>
                            {item.items!.map((item, index) => {
                              return (
                                <>
                                  {!item.items ? (
                                    <li key={item.id}>
                                      <Link href={item.path}>{item.title}</Link>
                                    </li>
                                  ) : (
                                    <li key={item.id} className={styles.child}>
                                      <p>{item.title}</p>
                                      <ul>
                                        {item.items!.map((item, index) => {
                                          return (
                                            <li key={item.id}>
                                              <Link href={item.path}>
                                                {item.title}
                                              </Link>
                                            </li>
                                          )
                                        })}
                                      </ul>
                                    </li>
                                  )}
                                </>
                              )
                            })}
                          </ul>
                        </li>
                      )}
                    </>
                  )
                })}
                <li>
                  <Link href="/policy">サイトポリシー</Link>
                </li>
                <li>
                  <Link href="/policy">プライバシーポリシー</Link>
                </li>
                <li>
                  <Link href="/policy">セキュリティポリシー</Link>
                </li>
                <li>
                  <p>サイトマップ（このページ）</p>
                </li>
                <li>
                  <Link href="/component">コンポーネント一覧</Link>
                </li>
              </ul>
            </Layout.ContentBody>
          </Layout.ContentBox>
        </Layout.Content>
      </Layout.Container>

      <Layout.Container modifier="ctaArea">
        <Content.CtaArea>
          <Content.CtaAreaTitle>
            気軽にお問い合わせください
          </Content.CtaAreaTitle>
          <Content.Divider />
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <Content.Button href="/contact">お問い合わせをする</Content.Button>
        </Content.CtaArea>
      </Layout.Container>
    </>
  )
}
