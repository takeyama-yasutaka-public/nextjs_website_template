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

type FormSelectProps = {
  name: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  modifier?: string
  ariaLabel: string
}

type FormSelectOptionProps = {
  value: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export const FormSelect = forwardRef(function FormSelect(
  {children, name, onChange, modifier, ariaLabel}: 
  Readonly<{children: React.ReactNode;}>&FormSelectProps, ref?: any) {

  //コンポーネントの出力
  return (
    <select className={styles.formSelect} 
      name={name} 
      onChange={onChange} 
      data-modifier={modifier} 
      aria-label={ariaLabel} 
      ref={ref}
    >
      {children}
    </select>
  )
})

export function FormSelectOption({value}: FormSelectOptionProps) {
  
  //コンポーネントの出力
  return (
    <option value={value}>{value}</option>
  )
}
