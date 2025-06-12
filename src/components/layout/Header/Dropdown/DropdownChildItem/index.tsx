//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useState, useRef, useEffect } from 'react'
import { useHeaderResetStore } from '@/lib/zustand'
//コンポーネント
import Link from 'next/link'
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

/*********************************
    変数定義
*********************************/

type Props = {
  path?: string
  title?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function DropdownChildItem(
  {children, path = '/', title}: 
  Readonly<{children?: React.ReactNode;}>&Props) {
  
  const [dropdownGrandchildOpen, setDropdownGrandchildOpen] = useState(false)

  const refDropdownChildItem = useRef<HTMLLIElement>(null)
  
  const headerResetOn = useHeaderResetStore((state) => state.headerResetOn)
  const headerResetOff = useHeaderResetStore((state) => state.headerResetOff)

  const dropdownGrandChildKeyToggle = (e: any) => {
    if (e.key === 'Enter') {
      setDropdownGrandchildOpen((prev) => !prev)
    }
  }

  useEffect(() => {
    const el = refDropdownChildItem.current

    if (!el) return
    
    //他の展開できるDropdownChildItemをエンターした時の処理
    const parent = el.parentElement
    const buttons = parent?.querySelectorAll(':scope > li > button')
    buttons?.forEach(function(button) {
      if (button != el.querySelector(':scope > button')) {
        button.addEventListener('keydown', (e: any) => {
          if(e.key == 'Enter') {
            setDropdownGrandchildOpen(false)
          }
        })
      }
    })
    //DropdownChildItemにフォーカスした時の処理
    const buttonFocuss = parent?.querySelectorAll(':scope > li > button, :scope > li > a')
    buttonFocuss?.forEach(function(buttonFocus) {
      if (buttonFocus != el.querySelector(':scope > button, :scope > a')) {
        buttonFocus.addEventListener('focus', function () {
          setDropdownGrandchildOpen(false)
        })
      }
    })

    //DropdownItemをエンターした時の処理
    const dropdown = el?.parentElement?.parentElement?.parentElement
    const dropdownButtons = dropdown?.querySelectorAll(':scope > li > button')
    dropdownButtons?.forEach(function(dropdownButton) {
      if (dropdownButton != el.querySelector(':scope > button')) {
        dropdownButton.addEventListener('keydown', (e: any) => {
          if(e.key == 'Enter') {
            setDropdownGrandchildOpen(false)
          }
        })
      }
    })
    //DropdownItemにフォーカスした時の処理
    const dropdownbuttonFocuss = dropdown?.querySelectorAll(':scope > li > button, :scope > li > a')
    dropdownbuttonFocuss?.forEach(function(dropdownbuttonFocus) {
      if (dropdownbuttonFocus != el.querySelector(':scope > button, :scope > a')) {
        dropdownbuttonFocus.addEventListener('focus', function () {
          setDropdownGrandchildOpen(false)
        })
      }
    })

  }, [refDropdownChildItem])

  //ウィンドウリサイズの処理
  useEffect(() => {
    window.addEventListener('resize',function(){
      if (window.matchMedia('(max-width:991.98px)').matches) {
        setDropdownGrandchildOpen(false)
      }
    })
  }, [])

  //リンククリック時に初期化
  const headerReset = () => {
    headerResetOn()
    setTimeout(() => {
      headerResetOff()
    }, 0)
  }

  //コンポーネントの出力
  return (
    <>
      {children ? (
        <li className={styles.dropdownChildItem} ref={refDropdownChildItem} 
        onMouseEnter={() => setDropdownGrandchildOpen(true)} 
        onMouseLeave={() => setDropdownGrandchildOpen(false)} 
        onKeyDown={dropdownGrandChildKeyToggle}>
          <button data-modifier={dropdownGrandchildOpen ? "active" : ""}>
            {title}
            <FontAwesomeIcon icon={faAngleRight} className={styles.icon}/>
          </button>
          <ul className={styles.dropdownGrandchild} data-modifier={dropdownGrandchildOpen ? "active" : ""}>
            {children}
          </ul>
        </li>
      ) : (
        <li className={styles.dropdownChildItem}>
          <Link href={path} onClick={headerReset}>{title}</Link>
        </li>
      )}
    </>
  )
}
