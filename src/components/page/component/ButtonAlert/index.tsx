//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//コンポーネント
import * as Content from '@/components/content/index'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function ButtonAlert() {
  
  //コンポーネントの出力
  return (
    <Content.Button onClick={() => alert('alert')}>onClick</Content.Button>
  )
}
