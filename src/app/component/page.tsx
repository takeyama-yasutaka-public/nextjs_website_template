/*********************************
    インポート
*********************************/

//フック
import type { Metadata } from 'next'
import { siteMeta } from '@/lib/constants'
import { formatDate } from '@/lib/formatDate'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Action from '@/components/action/index'
import * as Form from '@/components/form/index'
import * as Function from '@/components/function/index'
import * as PageComponent from '@/components/page/component/index'
import Link from 'next/link'
//画像
import MediaImage from '@/images/image_3-2.png'
import CardImage from '@/images/image_16-9.png'

/*********************************
    変数定義
*********************************/

//サイトデータの定義
const pageName = 'コンポーネント一覧'
const pageTitle= `${pageName} | `
const pageVisual = 'コンポーネント一覧'
const pageDescription = ''
const pageSlug = 'component'
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

//代替アイキャッチ画像データの定義（BlogPosts用・componentぺージのみで使用）
const blogEyecatch = {
  url: '/images/no-image.png',
  width: 1080,
  height: 730,
  blurDataURL: '/images/no-image.png',
}

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
            <Layout.SidebarList>
              <Layout.SidebarListMenu path="/" title="リンク"/>
              <Layout.SidebarListMenu path="/" title="リンク"/>
              <Layout.SidebarListMenu path="/" title="リンク"/>
            </Layout.SidebarList>
          </Layout.SidebarBox>
          <Layout.SidebarBox>
            <Layout.SidebarList>
              <Layout.SidebarListDate path="/" title="リンク" time="2023-11-01T09:00:00Z"/>
              <Layout.SidebarListDate path="/" title="リンク" time="2023-11-01T09:00:00Z"/>
              <Layout.SidebarListDate path="/" title="リンク" time="2023-11-01T09:00:00Z"/>
            </Layout.SidebarList>
          </Layout.SidebarBox>
          <Layout.SidebarBox>
            <Layout.SidebarList>
              <Layout.SidebarListRanking path="/" title="リンク"/>
              <Layout.SidebarListRanking path="/" title="リンク"/>
              <Layout.SidebarListRanking path="/" title="リンク"/>
            </Layout.SidebarList>
          </Layout.SidebarBox>
          <Layout.SidebarBox>
            <Layout.SidebarList>
              <Layout.SidebarListFilter path="/" title="リンク"/>
              <Layout.SidebarListFilter path="/" title="リンク"/>
              <Layout.SidebarListFilter path="/" title="リンク"/>
            </Layout.SidebarList>
          </Layout.SidebarBox>
        </Layout.Sidebar>
        <Layout.Content>

          <Layout.ContentBox>
            <Layout.ContentBody>
              <Content.Heading h="h1" modifier="first">見出し</Content.Heading>
              <Content.Heading h="h2" modifier="second">見出し</Content.Heading>
              <Content.Heading h="h3" modifier="third">見出し</Content.Heading>
              <Content.Heading h="h4" modifier="fourth">見出し</Content.Heading>
              <Content.Heading h="h5" modifier="fifth">見出し</Content.Heading>
              <Content.Button href="/">ボタン</Content.Button>
              <Content.Button href="/" modifierColor="secondary">ボタン</Content.Button>
              <Content.Button href="/" modifierColor="success">ボタン</Content.Button>
              <Content.Button href="/" modifierColor="alert">ボタン</Content.Button>
              <Content.Button href="/" modifierSize="small">ボタン</Content.Button>
              <Content.Button href="/" modifierColor="secondary" modifierSize="small">ボタン</Content.Button>
              <Content.Button href="/" modifierColor="success" modifierSize="small">ボタン</Content.Button>
              <Content.Button href="/" modifierColor="alert" modifierSize="small">ボタン</Content.Button>
              <Content.Button href="/" modifierIcon="after" icon="faAngleRight">ボタン</Content.Button>
              <Content.Button href="/" modifierColor="secondary" modifierIcon="after" icon="faAngleRight">ボタン</Content.Button>
              <Content.Button href="/" modifierSize="small" modifierIcon="after" icon="faAngleRight">ボタン</Content.Button>
              <PageComponent.ButtonAlert/>
              <Content.ButtonGroup>
                <Content.Button href="/">ボタン</Content.Button>
                <Content.Button href="/">ボタン</Content.Button>
              </Content.ButtonGroup>
              <Content.Icon icon="faAngleLeft"><Link href="/">リンク</Link></Content.Icon>
              <Content.Icon icon="faAngleRight"><Link href="/">リンク</Link></Content.Icon>
              <Content.Icon icon="faArrowUpRightFromSquare"><a href="/">リンク</a></Content.Icon>
              <Content.Icon icon="faFilePdf"><a href="/">リンク</a></Content.Icon>
              <Content.Icon icon="faDownload"><a href="/">リンク</a></Content.Icon>
              <Content.ClassLabel text="分類ラベル"/>
              <Content.ClassLabel text="分類ラベル" modifier="success"/>
              <Content.ClassLabel text="分類ラベル" modifier="alert"/>
              <Content.ClassLabelGroup>
                <Content.ClassLabel text="分類ラベル"/>
                <Content.ClassLabel text="分類ラベル"/>
              </Content.ClassLabelGroup>
              <Content.AnnotationText modifier="alert">※注釈</Content.AnnotationText>
              <Content.AnnotationText modifier="note">※注釈</Content.AnnotationText>
              <Content.Divider/>
              <Content.Table modifierDimension="horizontal">
                <tbody>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                </tbody>
              </Content.Table>
              <Content.Table modifierDimension="vertical">
                <thead>
                  <tr>
                    <th>テーブル</th>
                    <th>テーブル</th>
                    <th>テーブル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                </tbody>
              </Content.Table>
              <Content.Table modifierDimension="cross">
                <thead>
                  <tr>
                    <th></th>
                    <th>テーブル</th>
                    <th>テーブル</th>
                    <th>テーブル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                </tbody>
              </Content.Table>
              <Content.Table modifierDimension="horizontal" modifierScroll="spScroll">
                <tbody>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                </tbody>
              </Content.Table>
              <Content.Table modifierDimension="vertical" modifierScroll="spScroll">
                <thead>
                  <tr>
                    <th>テーブル</th>
                    <th>テーブル</th>
                    <th>テーブル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                </tbody>
              </Content.Table>
              <Content.Table modifierDimension="cross" modifierScroll="spScroll">
                <thead>
                  <tr>
                    <th></th>
                    <th>テーブル</th>
                    <th>テーブル</th>
                    <th>テーブル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                  <tr>
                    <th>テーブル</th>
                    <td>テーブル</td>
                    <td>テーブル</td>
                    <td>テーブル</td>
                  </tr>
                </tbody>
              </Content.Table>
              <Content.BulletList>
                <li>
                  リスト
                </li>
                <li>
                  リスト
                </li>
                <li>
                  リスト
                  <ul>
                    <li>
                      リスト
                    </li>
                    <li>
                      リスト
                    </li>
                    <li>
                      リスト
                    </li>
                  </ul>
                </li>
              </Content.BulletList>
              <Content.OrderList>
                <li>
                  リスト
                </li>
                <li>
                  リスト
                </li>
                <li>
                  リスト
                  <ol>
                    <li>
                      リスト
                    </li>
                    <li>
                      リスト
                    </li>
                    <li>
                      リスト
                    </li>
                  </ol>
                </li>
              </Content.OrderList>
              <Content.Pager>
                <Content.PagerItem type="prev" href="/"/>
                <Content.PagerItem type="current" key={0} number={1}/>
                <Content.PagerItem type="number" key={0} href="/" number={2}/>
                <Content.PagerItem type="number" key={0} href="/" number={3}/>
                <Content.PagerItem type="dots" key={0}/>
                <Content.PagerItem type="number" key={0} href="/" number={6}/>
                <Content.PagerItem type="next" href="/"/>
              </Content.Pager>
              <Content.NewsPosts>
                <Content.NewsPostsItem href="/" time="2023-11-01T09:00:00Z" tagNew={true} tagImportant={true} title="ニュースタイトル"/>
                <Content.NewsPostsItem href="/" time="2023-11-01T09:00:00Z" tagNew={true} title="ニュースタイトル"/>
                <Content.NewsPostsItem href="/" time="2023-11-01T09:00:00Z" tagImportant={true} title="ニュースタイトル"/>
                <Content.NewsPostsItem href="/" time="2023-11-01T09:00:00Z" title="ニュースタイトル"/>
              </Content.NewsPosts>
              <Content.BlogPosts>
                <Content.BlogPostsItem href="/" image={blogEyecatch} title="BLOGタイトル" category={[{"name": "分類ラベル","id": "0"},{"name": "分類ラベル","id": "1"}]} time="2023-11-01T09:00:00Z" text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"/>
                <Content.BlogPostsItem href="/" image={blogEyecatch} title="BLOGタイトル" category={[{"name": "分類ラベル","id": "0"}]} time="2023-11-01T09:00:00Z" text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"/>
                <Content.BlogPostsItem href="/" image={blogEyecatch} title="BLOGタイトル" category={[{"name": "分類ラベル","id": "0"}]} time="2023-11-01T09:00:00Z" text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"/>
              </Content.BlogPosts>
              <Content.Media image={MediaImage} alt="メディア">
                <Content.Heading h="h5" modifier="fifth">メディア</Content.Heading>
                <Content.MediaText>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </Content.MediaText>
              </Content.Media>
              <Content.Media image={MediaImage} alt="メディア" modifier="reverse">
                <Content.Heading h="h5" modifier="fifth">メディア</Content.Heading>
                <Content.MediaText>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </Content.MediaText>
              </Content.Media>
              <Content.Media image={MediaImage} alt="メディア">
                <Content.Heading h="h5" modifier="fifth">メディア</Content.Heading>
                <Content.MediaText>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </Content.MediaText>
                <Content.MediaButtonWrapper>
                  <Content.Button href="/">ボタン</Content.Button>
                </Content.MediaButtonWrapper>
              </Content.Media>
              <Content.Media image={MediaImage} alt="メディア" modifier="reverse">
                <Content.Heading h="h5" modifier="fifth">メディア</Content.Heading>
                <Content.MediaText>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </Content.MediaText>
                <Content.MediaButtonWrapper>
                  <Content.Button href="/">ボタン</Content.Button>
                </Content.MediaButtonWrapper>
              </Content.Media>
              <Content.CardGroup modifier="column3">
                <Content.Card image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
              </Content.CardGroup>
              <Content.CardGroup modifier="column4">
                <Content.Card image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
              </Content.CardGroup>
              <Content.CardGroup modifier="column3">
                <Content.Card href="/" image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/" image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/" image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
              </Content.CardGroup>
              <Content.CardGroup modifier="column4">
                <Content.Card href="/" image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/" image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/" image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
                <Content.Card href="/" image={CardImage} alt="カード">
                  <Content.Heading h="h5" modifier="fifth">カード</Content.Heading>
                  <Content.CardText>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </Content.CardText>
                </Content.Card>
              </Content.CardGroup>
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
                <Content.PriceBox title="プラン" price="10,000円/月">
                  <p>テキストテキストテキストテキストテキストテキストテキスト</p>
                  <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                  <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                  <Content.PriceBoxFeatures heading="テキスト">テキストテキスト</Content.PriceBoxFeatures>
                </Content.PriceBox>
              </Content.PriceBoxGroup>
              <Content.Faq>
                <Content.FaqItem question="テキストテキストテキストテキストテキストテキストテキストテキスト">
                  <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </p>
                </Content.FaqItem>
                <Content.FaqItem question="テキストテキストテキストテキストテキストテキストテキストテキスト">
                  <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </p>
                </Content.FaqItem>
                <Content.FaqItem question="テキストテキストテキストテキストテキストテキストテキストテキスト">
                  <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </p>
                </Content.FaqItem>
              </Content.Faq>
            </Layout.ContentBody>
          </Layout.ContentBox>

          <Layout.ContentBox>
            <PageComponent.Tab/>
            <Action.Accordion title="アコーディオン">
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </Action.Accordion>
            <PageComponent.Modal1/>
            <PageComponent.Modal2/>
          </Layout.ContentBox>

          <Layout.ContentBox>
            <PageComponent.Forms/>
            <Form.SearchBox name="q" placeholder="検索" defaultValue="" modifier="max520" ariaLabel="検索する"/>
          </Layout.ContentBox>

          <Layout.ContentBox>
            <Layout.ContentHeader>
              <p>test</p>
              <Layout.ContentHeaderBottom>
                <Content.ClassLabelGroup>
                  <Content.ClassLabel text="分類ラベル"/>
                  <Content.ClassLabel text="分類ラベル"/>
                </Content.ClassLabelGroup>
                <time dateTime="2023-11-01T09:00:00Z">{formatDate('2023-11-01T09:00:00Z')}</time>
              </Layout.ContentHeaderBottom>
            </Layout.ContentHeader>
            <Layout.ContentBody>
              <p>test</p>
            </Layout.ContentBody>
            <Layout.ContentFooter>
              <p>test</p>
            </Layout.ContentFooter>
          </Layout.ContentBox>

        </Layout.Content>
      </Layout.Container>

      <Layout.Container>
        <Layout.Sidebar modifier="threeColumnLeft">
          <Layout.SidebarBox>
            <p>test</p>
          </Layout.SidebarBox>
        </Layout.Sidebar>
        <Layout.Content>

          <Layout.ContentBox>
            <p>test</p>
          </Layout.ContentBox>

        </Layout.Content>
        <Layout.Sidebar modifier="threeColumnRight">
          <Layout.SidebarBox>
            <p>test</p>
          </Layout.SidebarBox>
        </Layout.Sidebar>
      </Layout.Container>

      <Layout.Container modifier="ctaArea">
        <Content.CtaArea>
          <Content.CtaAreaTitle>気軽にお問い合わせください</Content.CtaAreaTitle>
          <Content.Divider/>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          <Content.Button href="/">お問い合わせをする</Content.Button>
        </Content.CtaArea>
      </Layout.Container>
      
      <Layout.Container modifier="ctaArea">
        <Content.CtaArea modifier="bgNone">
          <Content.CtaAreaTitle>気軽にお問い合わせください</Content.CtaAreaTitle>
          <Content.Divider/>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          <Content.Button href="/">お問い合わせをする</Content.Button>
        </Content.CtaArea>
      </Layout.Container>

      <Action.Loading/>
    </>
  )
}
