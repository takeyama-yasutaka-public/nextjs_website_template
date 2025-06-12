//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//フック
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import NProgress from 'nprogress'
//コンポーネント
import * as Content from '@/components/content/index'

/*********************************
    変数定義
*********************************/

type Props = {
  PER_PAGE:number
  totalCount:number
  id:number
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function SearchPager({ totalCount, PER_PAGE, id }:Props) {

  //rangeの定義
  const range = (start:number, end:number) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  //rangeからページナンバーの配列を算出
  const rangeNum = range(1, Math.ceil(totalCount / PER_PAGE))

  //ページナンバーが1のみか判定する
  const onePage = rangeNum.length === 1 || totalCount === 0

  //現在のページが一覧トップか判定する
  const idNum = isNaN(id) ? 1 : id

  //prevとnextの処理
  const prevFlag = idNum === rangeNum[0]
  const nextFlag = idNum === rangeNum.at(-1)
  const prev = idNum - 1
  const next = idNum + 1

  //...を入れる処理
  function pages(c:number, n:number) {
    if (n < 6) {
      return rangeNum
    }
    if (c < 5) {
      return [1, 2, 3, 4, 5, 0, n]
    }
    if (c > n - 4) {
      return [1, 0, n - 4, n - 3, n - 2, n - 1, n]
    }
    return [1, 0, c - 1, c, c + 1, 0, n]
  }

  //パラメータの変更
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { push } = useRouter()

  const handleSubmit = async (id :number) => {
    const params = new URLSearchParams(searchParams)
    if (id) {
      params.set("id", String(id))
    } else {
      params.delete("id")
    }
    NProgress.start()
    push(`${pathname}?${params.toString()}`)
  }

  //コンポーネントの出力
  return (
    <>
      {onePage || (
        <Content.Pager>
          {prevFlag || (
            <Content.PagerItem type="prev" onClick={(e) => {handleSubmit(prev); e.currentTarget.blur()}}/>
          )}
          {pages(idNum, rangeNum.length).map((number, index) => {
            if ( number === idNum ) {
              return (
                <Content.PagerItem type="current" key={index} number={number}/>
              )
            } else if ( number >= 1 ) {
              return (
                <Content.PagerItem type="number" key={index} onClick={(e) => {handleSubmit(number); e.currentTarget.blur()}} number={number}/>
              )
            } else {
              return (
                <Content.PagerItem type="dots" key={index}/>
              )
            } 
          })}
          {nextFlag || (
            <Content.PagerItem type="next" onClick={(e) => {handleSubmit(next); e.currentTarget.blur()}}/>
          )}
        </Content.Pager>
      )}  
    </>
  )
}
