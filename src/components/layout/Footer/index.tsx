/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//コンポーネント
import FooterWrapper from '@/components/layout/Footer/FooterWrapper'
import FooterSns from '@/components/layout/Footer/FooterSns'
import FooterNav from '@/components/layout/Footer/FooterNav'
import FooterBanner from '@/components/layout/Footer/FooterBanner'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Footer() {
  
  //コンポーネントの出力
  return (
    <FooterWrapper>
      <footer className={styles.footer}>
        <div className={styles.inner}>

          <div className={styles.menu}>

            <div className={styles.leftColumn}>

              <FooterSns/>

            </div>

            <div className={styles.rightColumn}>

              <FooterNav/>

              <FooterBanner/>

            </div>

          </div>

          <div className={styles.copyright}>
            <p>Copyright © 2023 Brand Name All Rights Reserved.</p>
          </div>

        </div>
      </footer>
    </FooterWrapper>
  )
}
