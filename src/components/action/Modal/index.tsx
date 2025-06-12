//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//フック
import { useState, useRef, useEffect } from 'react'
import { bodyScrollStop, bodyScrollStart } from '@/lib/bodyScroll'
//スタイル
import styles from './index.module.scss'
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

/*********************************
    変数定義
*********************************/

type Props = {
  active: boolean
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function Modal(
  {children, active}: 
  Readonly<{children: React.ReactNode;}>&Props) {

  const [isActive, setIsActive] = useState(false)

  const refModal = useRef<HTMLDialogElement>(null)
  const refModalBox = useRef<HTMLDivElement>(null)
  
  // モーダルを開ける処理
  useEffect(() => {
    if (active) {
      setIsActive(true)
    }
  }, [active])

  // 開閉に伴う処理
  useEffect(() => {
    const el = refModal.current

    if (isActive) {
      el!.showModal()
      bodyScrollStop()
    } else {
      el!.close()
      bodyScrollStart()
    }
  }, [isActive])

  // 閉じるボタンの処理
  const clickButton = () => {
    setIsActive(false)
  }

  // オーバーレイクリック時の処理
  const clickDialog = (e: any) => {
    const el = refModalBox.current

    if (e.contains(el)) {
      setIsActive(false)
    }
  }

  // Escapeボタンを押したときの時の処理
  useEffect(() => {
    const escape = (e: any) => {
      if (e.key == 'Escape') {
        setIsActive(false)
      }
    }

    document.addEventListener('keydown', escape)

    return () => {
      document.removeEventListener('keydown', escape)  
    }
  }, [])
  
  //コンポーネントの出力
  return (
    <dialog className={styles.modal} data-modifier={isActive ? "active" : ""} 
    onClick={(e) => {clickDialog(e.target)}} 
    ref={refModal}>
      <div className={styles.box} ref={refModalBox}>
        <div className={styles.inner}>
          {children}
        </div>
        <button className={styles.close} onClick={clickButton} aria-label="モーダルを閉じる">
          <FontAwesomeIcon icon={faXmark} className={styles.icon}/>
        </button>
      </div>
    </dialog>
  )
}

export function ModalHeader({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div className={styles.modalHeader}>
      {children}
    </div>
  )
}

export function ModalBody({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div className={styles.modalBody}>
      {children}
    </div>
  )
}

export function ModalFooter({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div className={styles.modalFooter}>
      {children}
    </div>
  )
}
