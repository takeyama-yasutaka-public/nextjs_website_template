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
      <Layout.SidebarListMenu path="/company/profile" title="企業概要"/>
      <Layout.SidebarListMenu path="/company/history" title="沿革"/>
      <Layout.SidebarListMenu path="/company/access" title="アクセス"/>
    </Layout.SidebarList>
  )
}
