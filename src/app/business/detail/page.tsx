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
//画像
import MediaImage from '@/images/image_3-2.png'

/*********************************
    変数定義
*********************************/

//サイトデータの定義
const pageName = '事業内容'
const pageTitle= `${pageName} | `
const pageVisual = '事業紹介'
const pageDescription = ''
const pageSlug = 'detail'
const pagePath = `/business/${pageSlug}`
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
        <Layout.Content>

          <Layout.ContentBox>
            <Layout.ContentHeader>
              <Content.Heading h="h2" modifier="second">事業内容</Content.Heading>
            </Layout.ContentHeader>
            <Layout.ContentBody>

              <p className={styles.massage}>
                テキストテキストテキスト<br/>
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
                テキストテキストテキストテキスト<br/>
                テキストテキストテキストテキストテキストテキストテキストテキスト<br/>
                テキストテキストテキストテキストテキストテキスト
              </p>

              <div className={styles.media}>
                <Content.Media image={MediaImage} alt="メディア">
                  <Content.Heading h="h3" modifier="fifth">メディア</Content.Heading>
                  <Content.MediaText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.MediaText>
                </Content.Media>
                <Content.Media image={MediaImage} alt="メディア" modifier="reverse">
                  <Content.Heading h="h3" modifier="fifth">メディア</Content.Heading>
                  <Content.MediaText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.MediaText>
                </Content.Media>
                <Content.Media image={MediaImage} alt="メディア">
                  <Content.Heading h="h3" modifier="fifth">メディア</Content.Heading>
                  <Content.MediaText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.MediaText>
                </Content.Media>
              </div>

              <div className={styles.priceBox}>
                <h3 className={styles.heading}>○○サービスシステム</h3>
                <Content.PriceBoxGroup>
                  <Content.PriceBox title="プラン" price="10,000円/月">
                    <p>テキストテキストテキストテキストテキストテキストテキスト</p>
                    <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                    <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                    <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                  </Content.PriceBox>
                  <Content.PriceBox title="プラン" price="10,000円/月">
                    <p>テキストテキストテキストテキストテキストテキストテキスト</p>
                    <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                    <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                    <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                  </Content.PriceBox>
                  <Content.PriceBox title="プラン" price="10,000円/月">
                    <p>テキストテキストテキストテキストテキストテキストテキスト</p>
                    <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                    <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                    <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                  </Content.PriceBox>
                </Content.PriceBoxGroup>
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
