/*********************************
    インポート
*********************************/

//コンポーネント
import * as Content from '@/components/content/index'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function CtaArea() {
  
  //コンポーネントの出力
  return (
    <Content.CtaArea>
      <Content.CtaAreaTitle>気軽にお問い合わせください</Content.CtaAreaTitle>
      <Content.Divider/>
      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <Content.Button href="/contact">お問い合わせをする</Content.Button>
    </Content.CtaArea>
  )
}
