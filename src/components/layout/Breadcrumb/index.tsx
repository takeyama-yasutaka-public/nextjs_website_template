/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//コンポーネント
import Link from 'next/link'
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

/*********************************
    変数定義
*********************************/

type breadcrumb = {
  path:string
  name:string
}

type Props = {
  breadcrumb: breadcrumb[]
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Breadcrumb({breadcrumb}: Props) {
  
  //コンポーネントの出力
  return (
    <div className={styles.breadcrumb}>
      {
        breadcrumb.map((item, index) => {
          return (
            <>
              { breadcrumb.length - 1 === index ? (
                <p>{item.name}</p>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
              <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
            </>
          )
        }
      )}
    </div>
  )
}
