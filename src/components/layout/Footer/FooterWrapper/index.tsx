//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//フック
import { useRef, useEffect } from 'react'
import { useDrawerStore, useFooterWrapperStore } from '@/lib/zustand'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function FooterWrapper({children}: Readonly<{children: React.ReactNode;}>) {
  
  const refFooterWrapper = useRef<HTMLDivElement>(null)

  const drawerState = useDrawerStore((state) => state.drawerState)
  const setFooterWrapperTop = useFooterWrapperStore((state) => state.setFooterWrapperTop)

  useEffect(() => {
    const el = refFooterWrapper.current
    
    if (drawerState) {
      el!.inert = true
    } else {
      el!.inert = false
    }
  }, [drawerState])
  
  useEffect(() => {
    window.addEventListener('scroll', function() {

      const el = refFooterWrapper.current
      const top = el!.getBoundingClientRect().top
      setFooterWrapperTop(top)

    })
  }, [])

  //コンポーネントの出力
  return (
    <div ref={refFooterWrapper}>
      {children}
    </div>
  )
}
