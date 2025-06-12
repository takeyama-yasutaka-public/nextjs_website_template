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
import * as PageCompany from '@/components/page/business/index'
//画像
import EyecatchImage from '@/images/eyecatch.png'

/*********************************
    変数定義
*********************************/

//サイトデータの定義
const pageName = '事業カテゴリ'
const pageTitle= `${pageName} | `
const pageVisual = '事業実績'
const pageDescription = ''
const pageSlug = 'category'
const pagePath = `/business/achievement/${pageSlug}`
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
              <Content.Heading h="h2" modifier="second">事業カテゴリ1</Content.Heading>
            </Layout.ContentHeader>
            <Layout.ContentBody>

              <Content.CardGroup modifier="column3">
                <Content.Card href="/business/achievement/single" image={EyecatchImage} alt="カード">
                  <Content.Heading h="h3" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/business/achievement/single" image={EyecatchImage} alt="カード">
                  <Content.Heading h="h3" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/business/achievement/single" image={EyecatchImage} alt="カード">
                  <Content.Heading h="h3" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/business/achievement/single" image={EyecatchImage} alt="カード">
                  <Content.Heading h="h3" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/business/achievement/single" image={EyecatchImage} alt="カード">
                  <Content.Heading h="h3" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/business/achievement/single" image={EyecatchImage} alt="カード">
                  <Content.Heading h="h3" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/business/achievement/single" image={EyecatchImage} alt="カード">
                  <Content.Heading h="h3" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/business/achievement/single" image={EyecatchImage} alt="カード">
                  <Content.Heading h="h3" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/business/achievement/single" image={EyecatchImage} alt="カード">
                  <Content.Heading h="h3" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
              </Content.CardGroup>

            </Layout.ContentBody>
            <Layout.ContentFooter>
              <Content.Pager>
                <Content.PagerItem type="prev" href="/"/>
                <Content.PagerItem type="current" key={0} number={1}/>
                <Content.PagerItem type="number" key={0} href="/" number={2}/>
                <Content.PagerItem type="number" key={0} href="/" number={3}/>
                <Content.PagerItem type="dots" key={0}/>
                <Content.PagerItem type="number" key={0} href="/" number={6}/>
                <Content.PagerItem type="next" href="/"/>
              </Content.Pager>
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
