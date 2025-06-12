//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//フック
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { bodyScrollStart } from '@/lib/bodyScroll'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  useEffect(() => {

    bodyScrollStart(true)

  }, [pathname, searchParams])
 
  return null
}
