/*********************************
    インポート
*********************************/

//スタイル
import styles from './page.module.scss'
//フック
import type { Metadata } from 'next'
import { siteMeta } from '@/lib/constants'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Function from '@/components/function/index'
import * as PageCommon from '@/components/page/common/index'
import * as PageCompany from '@/components/page/company/index'

/*********************************
    変数定義
*********************************/

//サイトデータの定義
const pageName = 'アクセス'
const pageTitle= `${pageName} | `
const pageVisual = '企業情報'
const pageDescription = ''
const pageSlug = 'access'
const pagePath = `/company/${pageSlug}`
const pageType = 'article'
const imageUrl = null
const imageWidth = null
const imageHeight = null

//パンくずデータの定義
const breadcrumb = [
  { path: '/', name: 'Top' },
  { path: `/${pageSlug}`, name: pageName }
]

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
}

/*********************************
   ページデータのエクスポート
*********************************/

export default function Page() {
  //ページの出力
  return (
    <>
      <Function.StructuredData type={pageType} name={pageName} description={pageDescription} imageUrl={imageUrl} path={pagePath} breadcrumb={breadcrumb}/>

      <Layout.PageVisual title={pageVisual}/>

      <Layout.Container modifier="breadcrumb">
        <Layout.Breadcrumb breadcrumb={breadcrumb}/>
      </Layout.Container>
      
      <Layout.Container>
        <Layout.Sidebar modifier="twoColumn">
          <Layout.SidebarBox>
            <PageCompany.SidebarList/>
          </Layout.SidebarBox>
        </Layout.Sidebar>
        <Layout.Content>

          <Layout.ContentBox>
            <Layout.ContentHeader>
              <Content.Heading h="h2" modifier="second">アクセス</Content.Heading>
            </Layout.ContentHeader>
            <Layout.ContentBody>
              <div className={styles.access}>
                <div className={styles.left}>
                  <span className={styles.heading}>住所</span><br/>
                  〒100-0000<br/>
                  東京都千代田区○○○*-*-* ○○ビル*F
                </div>
                <div className={styles.right}>
                  <span className={styles.heading}>アクセス</span><br/>
                  東京メトロ（○○線、○○線）、<br/>
                  都営地下鉄（○○線）「○○駅」**出口直結<br/>
                  または、JR「東京駅」○○口より徒歩*分<br/>
                  ※お車でお越しの際は○○ビル地下1階駐車場をご利用いただけます。
                </div>
              </div>
              <div className={styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6481.634666194532!2d139.76029514931318!3d35.68149955128271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z44CSMTAwLTAwMDUg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Li444Gu5YaFMS0x!5e0!3m2!1sja!2sjp!4v1722516824094!5m2!1sja!2sjp" loading="lazy"></iframe>
              </div>
            </Layout.ContentBody>
          </Layout.ContentBox>

        </Layout.Content>
      </Layout.Container>

      <Layout.Container modifier="ctaArea">
        <PageCommon.CtaArea/>
      </Layout.Container>
    </>
  )
}
