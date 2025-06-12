/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//コンポーネント
import Logo from '@/components/layout/Header/Logo'
import Dropdown from '@/components/layout/Header/Dropdown'
import Hamburger from '@/components/layout/Header/Hamburger'
import Drawer from '@/components/layout/Header/Drawer'
import DrawerOverlay from '@/components/layout/Header/DrawerOverlay'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Header() {

  //コンポーネントの出力
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          
          <Logo/>

          <nav className={styles.navPc}>
            <Dropdown/>
          </nav>
          
          <Hamburger/>
            
          <nav className={styles.navSP}>
            <Drawer/>
          </nav>
          
        </div>
      </header>
      
      <DrawerOverlay/>
    </>
  )
}
