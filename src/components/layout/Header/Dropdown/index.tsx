/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { globalNavi } from '@/lib/constants'
//コンポーネント
import DropdownItem from '@/components/layout/Header/Dropdown/DropdownItem'
import DropdownChildItem from '@/components/layout/Header/Dropdown/DropdownChildItem'
import DropdownGrandchildItem from '@/components/layout/Header/Dropdown/DropdownGrandchildItem'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Dropdown() {
  //コンポーネントの出力
  return (
    <ul className={styles.dropdown}>
      {globalNavi.items.map((item, index) => {
        return (
          <>
            {!item.items ? (
              <DropdownItem key={item.id} path={item.path} title={item.title} />
            ) : (
              <DropdownItem key={item.id} title={item.title}>
                {item.items!.map((item, index) => {
                  return (
                    <>
                      {!item.items ? (
                        <DropdownChildItem
                          key={item.id}
                          path={item.path}
                          title={item.title}
                        />
                      ) : (
                        <DropdownChildItem key={item.id} title={item.title}>
                          {item.items!.map((item, index) => {
                            return (
                              <DropdownGrandchildItem
                                key={item.id}
                                path={item.path}
                                title={item.title}
                              />
                            )
                          })}
                        </DropdownChildItem>
                      )}
                    </>
                  )
                })}
              </DropdownItem>
            )}
          </>
        )
      })}
    </ul>
  )
}
