//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useState, useRef } from 'react'
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

/*********************************
    変数定義
*********************************/

type Props = {
  title: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Accordion(
  {children, title}: 
  Readonly<{children: React.ReactNode;}>&Props) {

  const [isActive, setIsActive] = useState(false)

  const refAccordion = useRef<HTMLDivElement>(null)
  
  const toggleActive = () => {
    setIsActive((prev) => !prev)
  }
  
  //コンポーネントの出力
  return (
    <div className={styles.accordion}>
      <button data-modifier={isActive ? "active" : ""} onClick={toggleActive}>
        {title}
        <FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
      </button>
      <div className={styles.body} data-modifier={isActive ? "active" : ""} 
      style={{['--body-height' as any]: refAccordion.current ? `${refAccordion.current.scrollHeight}px` : '0px'}} 
      ref={refAccordion}>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </div>
  )
}