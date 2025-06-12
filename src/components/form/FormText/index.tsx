/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { forwardRef } from 'react'

/*********************************
    変数定義
*********************************/

type Props = {
  name: string
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  modifier?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export const FormText = forwardRef(function FormText({name, placeholder, value, onChange, modifier}: Props, ref?: any) {

  //コンポーネントの出力
  return (
    <input className={styles.formText}
      type="text"
      name={name}
      placeholder={placeholder} 
      value={value} 
      onChange={onChange}
      data-modifier={modifier}
      ref={ref}
    />
  )
})