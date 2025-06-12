//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useState, useRef, useEffect } from 'react'
import { useFooterWrapperStore } from '@/lib/zustand'
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Pagetop() {

  const [pagetopShow, setPagetopShow] = useState(false)
  
  const refPagetop = useRef<HTMLButtonElement>(null)
  
  const FooterWrapperTop = useFooterWrapperStore((state) => state.FooterWrapperTop)
  
  const pagetopClick = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const pagetopEl = refPagetop.current
    const scrollY = window.scrollY
    const windowH = window.innerHeight
    const footerT = FooterWrapperTop
    const spaceB = (scrollY + windowH) - (scrollY + footerT)

    //スクロールするとボタンが現れる処理
    if (scrollY >= 1) {
      setPagetopShow(true)
    } else {
      setPagetopShow(false)
    }

    //フッターに重ならないよう止まる処理
    if(spaceB >= 0){
      pagetopEl!.style.bottom = spaceB + 20 + 'px'
    } else {
      pagetopEl!.style.removeProperty('bottom')
    }
  }, [FooterWrapperTop])

  //コンポーネントの出力
  return (
    <button className={styles.pagetop} data-modifier={pagetopShow ? "active" : ""} ref={refPagetop} onClick={pagetopClick} aria-label="トップへ戻る">
      <FontAwesomeIcon icon={faAngleUp} className={styles.icon}/>
    </button>
  )
}
