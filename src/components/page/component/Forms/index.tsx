//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//コンポーネント
import * as Content from '@/components/content/index'
import * as Form from '@/components/form/index'
//フック
import { useState, useRef } from 'react'
import { validatText, validatSelect, validatRadio, validatCheckbox } from '@/lib/validation'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Forms() {

  const [inputArea, setInputArea] = useState(true)
  const [confirmArea, setConfirmArea] = useState(false)
  const [text, setText] = useState("")
  const [textError, setTextError] = useState("")
  const [textarea, setTextarea] = useState("")
  const [textareaError, setTextareaError] = useState("")
  const [select, setSelect] = useState("選択してください")
  const [selectError, setSelectError] = useState("")
  const [radio, setRadio] = useState("")
  const [radioError, setRadioError] = useState("")
  const [checkbox, setCheckbox] = useState<string[]>([])
  const [checkboxrError, setCheckboxError] = useState("")

  const refText = useRef<HTMLInputElement>(null)
  const refTextarea = useRef<HTMLTextAreaElement>(null)
  const refSelect = useRef<HTMLSelectElement>(null)
  const refRadio = useRef<HTMLFieldSetElement>(null)
  const refCheckbox = useRef<HTMLFieldSetElement>(null)

  //チェックボックスを変更したときの処理
  const handleChange = (e: { target: { value: string } }) => {
    if (checkbox.includes(e.target.value)) {
      setCheckbox(
        checkbox.filter((checkedValue) => checkedValue !== e.target.value)
      )
    } else {
      setCheckbox([...checkbox, e.target.value])
    }
  }
  //チェックボックスを変更したときの処理（エラー用）
  const handleChangeError = (e: { target: { value: string } }) => {
    if (checkbox.includes(e.target.value)) {
      return checkbox.filter((checkedValue) => checkedValue !== e.target.value)
    } else {
      return [...checkbox, e.target.value]
    }
  }
  
  //確認するボタンを押したときの処理
  const toggleInputButton = () => {

    const valueText = validatText(text)
    const valueTextarea = validatText(textarea)
    const valueSelect = validatSelect(select, '選択してください')
    const valueRadio = validatRadio(radio)
    const valueCheckbox = validatCheckbox(checkbox)

    if ( valueText != "" ) {
      setTextError(valueText)
      refText.current?.scrollIntoView({ behavior: 'smooth', block: 'center', })
    } else if ( valueTextarea != "" ) {
      setTextareaError(valueTextarea)
      refTextarea.current?.scrollIntoView({ behavior: 'smooth', block: 'center', })
    } else if ( valueSelect != "" ) {
      setSelectError(valueSelect)
      refSelect.current?.scrollIntoView({ behavior: 'smooth', block: 'center', })
    } else if ( valueRadio != "" ) {
      setRadioError(valueRadio)
      refRadio.current?.scrollIntoView({ behavior: 'smooth', block: 'center', })
    } else if ( valueCheckbox != "" ) {
      setCheckboxError(valueCheckbox)
      refCheckbox.current?.scrollIntoView({ behavior: 'smooth', block: 'center', })
    } else {
      setInputArea(false)
      setConfirmArea(true)
    }
  }
  //修正するボタンを押したときの処理
  const toggleConfirmButton = () => {
    setInputArea(true)
    setConfirmArea(false)
  }

  //コンポーネントの出力
  return (
    <div>
      <form>

        {/* 入力画面 */}
        <div className={styles.inputArea} data-modifier={inputArea ? "active" : ""}>

          <Form.FormText name="text" placeholder="プレースホルダー" value={text} 
            onChange={(e) => {
              setText(e.target.value)
              setTextError(validatText(e.target.value))
            }}
            ref={refText}
          />
          {textError && <p>{textError}</p>}

          <Form.FormTextarea name="textarea" rows={2} placeholder="プレースホルダー" value={textarea} 
            onChange={(e) => {
              setTextarea(e.target.value)
              setTextareaError(validatText(e.target.value))
            }}
            ref={refTextarea}
          />
          {textareaError && <p>{textareaError}</p>}

          <Form.FormSelect name="select" 
            onChange={(e) => {
              setSelect(e.target.value)
              setSelectError(validatSelect(e.target.value, '選択してください'))
            }}
            ariaLabel="選択肢"
            ref={refSelect}
          >
            <Form.FormSelectOption value="選択してください"/>
            <Form.FormSelectOption value="選択肢1"/>
            <Form.FormSelectOption value="選択肢2"/>
          </Form.FormSelect>
          {selectError && <p>{selectError}</p>}

          <Form.FormRadioGroup ref={refRadio}>
            <Form.FormRadio name="radio" value="ラジオボタン1"
              onChange={(e) => {
                setRadio(e.target.value)
                setRadioError(validatRadio(e.target.value))
              }}
            />
            <Form.FormRadio name="radio" value="ラジオボタン2"
              onChange={(e) => {
                setRadio(e.target.value)
                setRadioError(validatRadio(e.target.value))
              }}
            />
          </Form.FormRadioGroup>
          {radioError && <p>{radioError}</p>}

          <Form.FormCheckboxGroup ref={refCheckbox}>
            <Form.FormCheckbox name="checkbox" value="チェックボックス1"
              onChange={(e) => {
                handleChange(e)
                setCheckboxError(validatCheckbox(handleChangeError(e)))
              }}
            />
            <Form.FormCheckbox name="checkbox" value="チェックボックス2"
              onChange={(e) => {
                handleChange(e)
                setCheckboxError(validatCheckbox(handleChangeError(e)))
              }}
            />
          </Form.FormCheckboxGroup>
          {checkboxrError && <p>{checkboxrError}</p>}

          <Content.Button type="button" onClick={toggleInputButton} modifierColor="success">確認する</Content.Button>

        </div>

        {/* 確認画面 */}
        <div className={styles.confirmArea} data-modifier={confirmArea ? "active" : ""}>

          <p>text:{text}</p>
          <p>textarea:{textarea}</p>
          <p>select:{select}</p>
          <p>radio:{radio}</p>
          <p>checkbox:{checkbox.join("、")}</p>

          <Content.Button type="button" onClick={toggleConfirmButton}>戻る</Content.Button>
          <Content.Button type="button" onClick={() => alert('送信しました')} modifierColor="success">送信する</Content.Button>

        </div>

      </form> 
    </div>
  )
}
