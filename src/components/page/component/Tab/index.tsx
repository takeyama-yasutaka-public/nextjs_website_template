//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//フック
import { useState } from 'react'
//コンポーネント
import * as Action from '@/components/action/index'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Tab() {
  
  const [tabActive, setTabActive] = useState(0)
  
  //コンポーネントの出力
  return (
    <Action.Tab>
      <Action.TabNavigation>
        <Action.TabNavigationItem isActive={tabActive === 0} onClick={() => setTabActive(0)}>タブ1</Action.TabNavigationItem>
        <Action.TabNavigationItem isActive={tabActive === 1} onClick={() => setTabActive(1)}>タブ2</Action.TabNavigationItem>
        <Action.TabNavigationItem isActive={tabActive === 2} onClick={() => setTabActive(2)}>タブ3</Action.TabNavigationItem>
        <Action.TabNavigationItem isActive={tabActive === 3} onClick={() => setTabActive(3)}>タブ4</Action.TabNavigationItem>
      </Action.TabNavigation>
      <Action.TabBody>
        <Action.TabItem isActive={tabActive === 0}>
          <p>
            テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1
          </p>
        </Action.TabItem>
        <Action.TabItem isActive={tabActive === 1}>
          <p>
            テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2
          </p>
        </Action.TabItem>
        <Action.TabItem isActive={tabActive === 2}>
          <p>
            テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3
          </p>
        </Action.TabItem>
        <Action.TabItem isActive={tabActive === 3}>
          <p>
            テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4テキスト4
          </p>
        </Action.TabItem>
      </Action.TabBody>
    </Action.Tab>
  )
}
