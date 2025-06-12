//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

import { useEffect } from 'react'
import { sendPageView } from '@/lib/api'

/*********************************
    変数定義
*********************************/

type Props = {
  postId: number
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function PageViewSender({ postId }: Props) {
  useEffect(() => {
    if (!postId) return

    const viewedPostsKey = 'viewed_posts'
    const stored = sessionStorage.getItem(viewedPostsKey)
    const viewedPosts: number[] = stored ? JSON.parse(stored) : []

    if (viewedPosts.includes(postId)) {
      return
    }

    sendPageView(postId).then(() => {
      const updatedPosts = [...viewedPosts, postId]
      sessionStorage.setItem(viewedPostsKey, JSON.stringify(updatedPosts))
    })
  }, [postId])

  return null
}
