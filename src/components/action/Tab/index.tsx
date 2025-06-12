//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useRef, useEffect } from 'react'

/*********************************
    変数定義
*********************************/

type TabItemProps = {
  isActive: boolean
}

type TabNavigationItemProps = {
  isActive: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function Tab({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div>
      {children}
    </div>
  )
}

export function TabBody({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <div>
      {children}
    </div>
  )
}

export function TabItem(
  {children, isActive}: 
  Readonly<{children: React.ReactNode;}>&TabItemProps) {

  const refTabItem = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = refTabItem.current
    
    if (isActive) {
      el!.inert = false
    } else {
      el!.inert = true
    }
  }, [isActive])
  
  //コンポーネントの出力
  return (
    <div className={styles.tabItem} data-modifier={isActive ? "active" : ""} ref={refTabItem}>
      {children}
    </div>
  )
}

export function TabNavigation({children}: Readonly<{children: React.ReactNode;}>) {
  
  //コンポーネントの出力
  return (
    <nav className={styles.tabNavigation}>
      {children}
    </nav>
  )
}

export function TabNavigationItem(
  {children, isActive, onClick}: 
  Readonly<{children: React.ReactNode;}>&TabNavigationItemProps) {
  
  //コンポーネントの出力
  return (
    <button className={styles.tabNavigationItem} data-modifier={isActive ? "active" : ""} onClick={onClick}>
      {children}
    </button>
  )
}