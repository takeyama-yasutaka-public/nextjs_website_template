//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useEffect, useRef } from 'react'
import { useLoadingStore } from '@/lib/zustand'
import { bodyScrollStop, bodyScrollStart } from '@/lib/bodyScroll'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Loading() {

  const refBar = useRef<HTMLSpanElement>(null)
  
  const loadingState = useLoadingStore((state) => state.loadingState)
  const loadingOff = useLoadingStore((state) => state.loadingOff)


  // ローディングを表示する処理
  useEffect(() => {
    if (loadingState) {
      const duration = 1000

      const bar = refBar.current

      bodyScrollStop()
  
      bar!.animate({
          width: ['0', '100%']
      }, duration)
  
      setTimeout(() => {
        bodyScrollStart()
        loadingOff()
      }, duration)
    }
  }, [])
  
  //コンポーネントの出力
  return (
    <>
      {loadingState && (
        <div className={styles.loading} data-modifier={loadingState ? "active" : ""}>
          <div className={styles.inner}>
            <div className={styles.icon}></div>
            <div className={styles.progressBar}>
              <span className={styles.bar} ref={refBar}></span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}