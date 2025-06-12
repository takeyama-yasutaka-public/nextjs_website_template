/*********************************
    インポート
*********************************/

//コンポーネント
import * as Layout from '@/components/layout/index'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function SidebarList() {
  
  //コンポーネントの出力
  return (
    <Layout.SidebarList>
      <Layout.SidebarListMenu path="/business/achievement/category" title="事業カテゴリ1"/>
      <Layout.SidebarListMenu path="/business/achievement/category" title="事業カテゴリ2"/>
      <Layout.SidebarListMenu path="/business/achievement/category" title="事業カテゴリ3"/>
    </Layout.SidebarList>
  )
}
