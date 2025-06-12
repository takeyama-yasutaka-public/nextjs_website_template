/*********************************
    インポート
*********************************/

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
const pageName = '企業概要'
const pageTitle= `${pageName} | `
const pageVisual = '企業情報'
const pageDescription = ''
const pageSlug = 'profile'
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
              <Content.Heading h="h2" modifier="second">企業概要</Content.Heading>
            </Layout.ContentHeader>
            <Layout.ContentBody>
              <Content.Table modifierDimension="horizontal">
                <tbody>
                  <tr>
                    <th>社名</th>
                    <td>Brand Name 株式会社</td>
                  </tr>
                  <tr>
                    <th>代表者</th>
                    <td>○○ ○○</td>
                  </tr>
                  <tr>
                    <th>設立</th>
                    <td>20**年*月</td>
                  </tr>
                  <tr>
                    <th>資本金</th>
                    <td>*億円</td>
                  </tr>
                  <tr>
                    <th>本社所在地</th>
                    <td>
                      〒100-0000<br/>
                      東京都千代田区○○○*-*-* ○○ビル*F
                    </td>
                  </tr>
                  <tr>
                    <th>電話番号</th>
                    <td>03-0000-0000</td>
                  </tr>
                  <tr>
                    <th>事業内容</th>
                    <td>テキストテキストテキストテキストテキスト</td>
                  </tr>
                  <tr>
                    <th>従業員数</th>
                    <td>**名</td>
                  </tr>
                  <tr>
                    <th>主要取引先</th>
                    <td>
                      テキストテキストテキスト<br/>
                      テキスト<br/>
                      テキスト
                    </td>
                  </tr>
                  <tr>
                    <th>取引金融機関</th>
                    <td>○○銀行 ○○支店</td>
                  </tr>
                </tbody>
              </Content.Table>
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
