//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//フック
import { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
//スタイル
import styles from './index.module.scss'
import 'highlight.js/styles/github-dark.css'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function RichContent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blocks = contentRef.current?.querySelectorAll('pre code')
    blocks?.forEach((block) => {
      hljs.highlightElement(block as HTMLElement)
    })
  }, [children])

  return (
    <div className={styles.richContent} ref={contentRef}>
      {children}
    </div>
  )
}
