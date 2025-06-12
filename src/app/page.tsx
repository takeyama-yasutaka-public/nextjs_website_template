/*********************************
    インポート
*********************************/

//コンポーネント
import * as Content from '@/components/content/index'
import * as Action from '@/components/action/index'
import * as Function from '@/components/function/index'
import * as PageHome from '@/components/page/home/index'
//画像
import MediaImage from '@/images/image_16-9.png'
import EyecatchImage from '@/images/eyecatch.png'

/*********************************
    変数定義
*********************************/

//トップページか否か
const isHome = true

/*********************************
   ページデータのエクスポート
*********************************/

export default async function Page() {
  //ページの出力
  return (
    <>
      <Function.StructuredData isHome={isHome} />

      <Action.Slideshow/>
      
      <PageHome.Massage>
        <PageHome.MassageCatchPhrase>
          キャッチフレーズ
        </PageHome.MassageCatchPhrase>
        <PageHome.MassageText>
          テキストテキストテキストテキストテキストテキスト<br/>
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
          テキストテキストテキストテキストテキスト
        </PageHome.MassageText>
      </PageHome.Massage>

      <PageHome.MediaGroup>
        <PageHome.Media image={MediaImage} alt="メディアイメージ">
          <Content.Heading h="h2" modifier="first">見出し</Content.Heading>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </PageHome.Media>
        <PageHome.Media modifier="second" image={MediaImage} alt="メディアイメージ">
          <Content.Heading h="h2" modifier="first">見出し</Content.Heading>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </PageHome.Media>
        <PageHome.Media modifier="third" image={MediaImage} alt="メディアイメージ">
          <Content.Heading h="h2" modifier="first">見出し</Content.Heading>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </PageHome.Media>
      </PageHome.MediaGroup>

      <PageHome.Container modifier="results">
        <PageHome.ContainerHeader>
          事業実績
        </PageHome.ContainerHeader>
        <Content.CardGroup modifier="column3">
          <Content.Card href="/business/achievement/category" image={EyecatchImage} alt="カード">
            <Content.Heading h="h3" modifier="fifth">事業カテゴリ1</Content.Heading>
            <Content.CardText>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Content.CardText>
          </Content.Card>
          <Content.Card href="/business/achievement/category" image={EyecatchImage} alt="カード">
            <Content.Heading h="h3" modifier="fifth">事業カテゴリ2</Content.Heading>
            <Content.CardText>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Content.CardText>
          </Content.Card>
          <Content.Card href="/business/achievement/category" image={EyecatchImage} alt="カード">
            <Content.Heading h="h3" modifier="fifth">事業カテゴリ3</Content.Heading>
            <Content.CardText>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Content.CardText>
          </Content.Card>
        </Content.CardGroup>
      </PageHome.Container>
      
      <PageHome.Container modifier="news">
        <PageHome.ContainerHeader>
          ニュース
        </PageHome.ContainerHeader>
        <Content.NewsPosts>
          <Content.NewsPostsItem href="/news/single" time="2023-11-01T09:00:00Z" tagNew={true} title="ニュースタイトル"/>
          <Content.NewsPostsItem href="/news/single" time="2023-11-01T09:00:00Z" tagImportant={true} title="ニュースタイトル"/>
          <Content.NewsPostsItem href="/news/single" time="2023-11-01T09:00:00Z" title="ニュースタイトル"/>
        </Content.NewsPosts>
      </PageHome.Container>

      <PageHome.Container modifier="cta">
        <Content.CtaArea modifier="bgNone">
          <Content.CtaAreaTitle>気軽にお問い合わせください</Content.CtaAreaTitle>
          <Content.Divider/>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          <Content.Button href="/contact">お問い合わせをする</Content.Button>
        </Content.CtaArea>
      </PageHome.Container>
    </>
  )
}
