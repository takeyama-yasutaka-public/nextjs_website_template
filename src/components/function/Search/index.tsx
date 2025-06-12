//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useSearchParams, useRouter } from 'next/navigation'
import NProgress from 'nprogress'
//コンポーネント
import * as Form from '@/components/form/index'

/*********************************
    変数定義
*********************************/

type Props = {
  modifier?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Search({modifier}: Props) {

  const searchParams = useSearchParams()
  const { push } = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    const formData = new FormData(e.currentTarget)
    const q = formData.get("q")?.toString()
    if (q) {
      params.set("q", q)
      params.delete("id")
    } else {
      params.delete("q")
      params.delete("id")
    }
    NProgress.start()
    push(`/blog/search?${params.toString()}`)
    e.currentTarget.querySelector("button").blur()
  }

  //コンポーネントの出力
  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit} data-modifier={modifier}>
      <Form.SearchBox name="q" placeholder="検索" defaultValue={searchParams.get("q")?.toString() || ""} modifier="max520" ariaLabel="検索する"/>
    </form>
  )
}
