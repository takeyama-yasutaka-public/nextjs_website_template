//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//フック
import { useState } from 'react'
//コンポーネント
import * as Content from '@/components/content/index'
import * as Action from '@/components/action/index'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Modal1() {
  
  const [isActive, setIsActive] = useState(false)
  
  const modalOn = () => {
    setIsActive(true)
    setTimeout(() => {
      setIsActive(false)
    }, 0)
  }

  //コンポーネントの出力
  return (
    <>
      <Content.Button onClick={modalOn}>モーダル1</Content.Button>

      <Action.Modal active={isActive}>
        <Action.ModalHeader>
          <Content.Heading h="h5" modifier="fifth">見出し</Content.Heading>
        </Action.ModalHeader>
        <Action.ModalBody>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </Action.ModalBody>
        <Action.ModalFooter>
          <Content.Button href="/">ボタン</Content.Button>
        </Action.ModalFooter>
      </Action.Modal>
    </>
  )
}
