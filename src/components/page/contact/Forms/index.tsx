//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useState, useEffect, useRef } from 'react'
import {
  validatText,
  validatSelect,
  validatRadio,
  validatCheckbox,
  validatRfcEmail,
  validatKana,
} from '@/lib/validation'
import { postContactForm } from '@/lib/api'
import { useRouter } from 'next/navigation'
import NProgress from 'nprogress'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Form from '@/components/form/index'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Forms() {
  const [inputArea, setInputArea] = useState(true)
  const [confirmArea, setConfirmArea] = useState(false)
  const [inputError, setInputError] = useState(false)

  const [nameSei, setNameSei] = useState('')
  const [nameMei, setNameMei] = useState('')
  const [nameError, setNameError] = useState('')
  const refName = useRef<HTMLInputElement>(null)
  const [kanaSei, setKanaSei] = useState('')
  const [kanaMei, setKanaMei] = useState('')
  const [kanaError, setKanaError] = useState('')
  const refKana = useRef<HTMLInputElement>(null)
  const [mail, setMail] = useState('')
  const [mailError, setMailError] = useState('')
  const refMail = useRef<HTMLInputElement>(null)
  const [mailcheck, setMailcheck] = useState('')
  const [mailcheckError, setMailcheckError] = useState('')
  const refMailcheck = useRef<HTMLInputElement>(null)
  const [sex, setSex] = useState('')
  const [sexError, setSexError] = useState('')
  const refSex = useRef<HTMLFieldSetElement>(null)
  const [assort, setAssort] = useState('選択してください')
  const [assortError, setAssortError] = useState('')
  const refAssort = useRef<HTMLSelectElement>(null)
  const [content, setContent] = useState('')
  const [contentCount, setContentCount] = useState(0)
  const [contentError, setContentError] = useState('')
  const refContent = useRef<HTMLTextAreaElement>(null)
  const [know, setKnow] = useState<string[]>([])
  const [knowError, setKnowError] = useState('')
  const refKnow = useRef<HTMLFieldSetElement>(null)

  const router = useRouter()

  //ラジオの初期値を設定する処理
  useEffect(() => {
    const value = '選択しない'

    const radioChildren = refSex.current?.querySelectorAll('label')
    radioChildren?.forEach(function (radioChild) {
      const input = radioChild.querySelector('input')

      if (input!.value === value) {
        input!.checked = true
        setSex(input!.value)
      }
    })
  }, [refSex])

  //チェックボックスを変更したときの処理
  const handleChange = (e: { target: { value: string } }) => {
    if (know.includes(e.target.value)) {
      setKnow(know.filter((checkedValue) => checkedValue !== e.target.value))
      return know.filter((checkedValue) => checkedValue !== e.target.value)
    } else {
      setKnow([...know, e.target.value])
      return [...know, e.target.value]
    }
  }

  //確認用メールアドレスの判定する処理
  function validatMailcheck(text: string) {
    const mail = refMail!.current!.value

    // 未入力だった時の処理
    if (text === '') {
      return '入力してください。'
    }
    // 未入力だった時の処理
    if (text != mail) {
      return 'メールアドレスが一致していません。'
    }
    // すべての条件を満たした場合
    return ''
  }

  //お問い合わせ内容の判定する処理
  function validatContent(text: string) {
    const count = refContent!.current!.value.length

    // 未入力だった時の処理
    if (text === '') {
      return '入力してください。'
    }
    // 未入力だった時の処理
    if (count > 300) {
      return '文字数がオーバーしています。'
    }
    // すべての条件を満たした場合
    return ''
  }

  //確認するボタンを押したときの処理
  const toggleInputButton = () => {
    setInputError(true)

    const valueNameSei = validatText(nameSei)
    const valueNameMei = validatText(nameMei)
    const valueKanaSei = validatKana(kanaSei)
    const valueKanaMei = validatKana(kanaMei)
    const valueMail = validatRfcEmail(mail)
    const valueMailcheck = validatMailcheck(mailcheck)
    const valueSex = validatRadio(sex)
    const valueAssort = validatSelect(assort, '選択してください')
    const valueContent = validatContent(content)
    const valueKnow = validatCheckbox(know)

    if (valueNameSei != '') {
      setNameError(valueNameSei)
      refName.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (valueNameMei != '') {
      setNameError(valueNameMei)
      refName.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (valueKanaSei != '') {
      setKanaError(valueKanaSei)
      refKana.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (valueKanaMei != '') {
      setKanaError(valueKanaMei)
      refKana.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (valueMail != '') {
      setMailError(valueMail)
      refMail.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (valueMailcheck != '') {
      setMailcheckError(valueMailcheck)
      refMailcheck.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    } else if (valueSex != '') {
      setSexError(valueSex)
      refSex.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (valueAssort != '') {
      setAssortError(valueAssort)
      refAssort.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (valueContent != '') {
      setContentError(valueContent)
      refContent.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    } else if (valueKnow != '') {
      setKnowError(valueKnow)
      refKnow.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      setInputArea(false)
      setConfirmArea(true)
      window.scroll({ top: 0 })
    }
  }
  //修正するボタンを押したときの処理
  const toggleConfirmButton = () => {
    setInputArea(true)
    setConfirmArea(false)
    window.scroll({ top: 0 })
  }

  //送信ボタンを押したときの処理
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      NProgress.start()
      await postContactForm({
        nameSei,
        nameMei,
        kanaSei,
        kanaMei,
        mail,
        sex,
        assort,
        content,
        know,
      })
      router.push('/contact/finish')
    } catch (err) {
      alert('メッセージの送信が失敗しました')
    }
  }

  //コンポーネントの出力
  return (
    <form onSubmit={handleSubmit}>
      {/* 入力画面 */}
      <div
        className={styles.inputArea}
        data-modifier={inputArea ? 'active' : ''}
      >
        <Layout.ContentBody>
          <div
            className={styles.formArea}
            data-modifier={inputError ? 'on-error' : ''}
          >
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>お名前</p>
                <p className={styles.required}>必須</p>
              </div>
              <div className={styles.body}>
                <Form.FormText
                  name="姓"
                  placeholder="姓"
                  value={nameSei}
                  onChange={(e) => {
                    setNameSei(e.target.value)
                    setNameError(validatText(e.target.value))
                  }}
                  ref={refName}
                  modifier="name"
                />
                <Form.FormText
                  name="名"
                  placeholder="名"
                  value={nameMei}
                  onChange={(e) => {
                    setNameMei(e.target.value)
                    setNameError(validatText(e.target.value))
                  }}
                  ref={refName}
                  modifier="name"
                />
              </div>
              {nameError && <p className={styles.error}>{nameError}</p>}
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>フリガナ</p>
                <p className={styles.required}>必須</p>
              </div>
              <div className={styles.body}>
                <Form.FormText
                  name="セイ"
                  placeholder="セイ"
                  value={kanaSei}
                  onChange={(e) => {
                    setKanaSei(e.target.value)
                    setKanaError(validatKana(e.target.value))
                  }}
                  ref={refKana}
                  modifier="name"
                />
                <Form.FormText
                  name="メイ"
                  placeholder="メイ"
                  value={kanaMei}
                  onChange={(e) => {
                    setKanaMei(e.target.value)
                    setKanaError(validatKana(e.target.value))
                  }}
                  ref={refKana}
                  modifier="name"
                />
              </div>
              {kanaError && <p className={styles.error}>{kanaError}</p>}
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>メールアドレス</p>
                <p className={styles.required}>必須</p>
              </div>
              <div className={styles.body}>
                <Form.FormText
                  name="メールアドレス"
                  placeholder="メールアドレス"
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value)
                    setMailError(validatRfcEmail(e.target.value))
                    setMailcheckError(validatMailcheck(mailcheck))
                  }}
                  ref={refMail}
                  modifier="mail"
                />
              </div>
              {mailError && <p className={styles.error}>{mailError}</p>}
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>確認用メールアドレス</p>
                <p className={styles.required}>必須</p>
              </div>
              <div className={styles.body}>
                <Form.FormText
                  name="確認用メールアドレス"
                  placeholder="メールアドレス"
                  value={mailcheck}
                  onChange={(e) => {
                    setMailcheck(e.target.value)
                    setMailcheckError(validatMailcheck(e.target.value))
                  }}
                  ref={refMailcheck}
                  modifier="mail"
                />
              </div>
              {mailcheckError && (
                <p className={styles.error}>{mailcheckError}</p>
              )}
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>性別</p>
                <p className={styles.required}>必須</p>
              </div>
              <div className={styles.body}>
                <Form.FormRadioGroup ref={refSex}>
                  <Form.FormRadio
                    name="性別"
                    value="男性"
                    onChange={(e) => {
                      setSex(e.target.value)
                      setSexError(validatRadio(e.target.value))
                    }}
                  />
                  <Form.FormRadio
                    name="性別"
                    value="女性"
                    onChange={(e) => {
                      setSex(e.target.value)
                      setSexError(validatRadio(e.target.value))
                    }}
                  />
                  <Form.FormRadio
                    name="性別"
                    value="選択しない"
                    onChange={(e) => {
                      setSex(e.target.value)
                      setSexError(validatRadio(e.target.value))
                    }}
                  />
                </Form.FormRadioGroup>
              </div>
              {sexError && <p className={styles.error}>{sexError}</p>}
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>お問い合わせ種別</p>
                <p className={styles.required}>必須</p>
              </div>
              <div className={styles.body}>
                <Form.FormSelect
                  name="お問い合わせ種別"
                  onChange={(e) => {
                    setAssort(e.target.value)
                    setAssortError(
                      validatSelect(e.target.value, '選択してください')
                    )
                  }}
                  ariaLabel="お問い合わせ種別"
                  ref={refAssort}
                  modifier="inquiry-type"
                >
                  <Form.FormSelectOption value="選択してください" />
                  <Form.FormSelectOption value="選択肢1" />
                  <Form.FormSelectOption value="選択肢2" />
                  <Form.FormSelectOption value="選択肢3" />
                </Form.FormSelect>
              </div>
              {assortError && <p className={styles.error}>{assortError}</p>}
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>お問い合わせ内容</p>
                <p className={styles.required}>必須</p>
              </div>
              <div className={styles.body} data-modifier="textarea">
                <Form.FormTextarea
                  name="お問い合わせ内容"
                  rows={2}
                  placeholder="お問い合わせ内容"
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value)
                    setContentCount(e.target.value.length)
                    setContentError(validatContent(e.target.value))
                  }}
                  ref={refContent}
                />
                {contentError && <p className={styles.error}>{contentError}</p>}
                <p className={styles.count}>{contentCount}/300</p>
              </div>
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>
                  当社をどこで知りましたか（複数回答可）
                </p>
                <p className={styles.required}>必須</p>
              </div>
              <div className={styles.body}>
                <Form.FormCheckboxGroup ref={refKnow}>
                  <Form.FormCheckbox
                    name="checkbox"
                    value="チェックボックス1"
                    onChange={(e) => {
                      handleChange(e)
                      setKnowError(validatCheckbox(handleChange(e)))
                    }}
                  />
                  <Form.FormCheckbox
                    name="checkbox"
                    value="チェックボックス2"
                    onChange={(e) => {
                      handleChange(e)
                      setKnowError(validatCheckbox(handleChange(e)))
                    }}
                  />
                  <Form.FormCheckbox
                    name="checkbox"
                    value="チェックボックス3"
                    onChange={(e) => {
                      handleChange(e)
                      setKnowError(validatCheckbox(handleChange(e)))
                    }}
                  />
                </Form.FormCheckboxGroup>
              </div>
              {knowError && <p className={styles.error}>{knowError}</p>}
            </div>
          </div>
        </Layout.ContentBody>
        <Layout.ContentFooter>
          <Content.Button
            type="button"
            onClick={toggleInputButton}
            modifierColor="success"
          >
            確認する
          </Content.Button>
        </Layout.ContentFooter>
      </div>

      {/* 確認画面 */}
      <div
        className={styles.confirmArea}
        data-modifier={confirmArea ? 'active' : ''}
      >
        <Layout.ContentBody>
          <div className={styles.formArea}>
            <p>以下の内容でよろしければ「送信する」ボタンを押して下さい。</p>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>お名前</p>
              </div>
              <div className={styles.body}>
                <p>
                  {nameSei} {nameMei}
                </p>
              </div>
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>フリガナ</p>
              </div>
              <div className={styles.body}>
                <p>
                  {kanaSei}
                  {kanaMei}
                </p>
              </div>
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>メールアドレス</p>
              </div>
              <div className={styles.body}>
                <p>{mail}</p>
              </div>
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>性別</p>
              </div>
              <div className={styles.body}>
                <p>{sex}</p>
              </div>
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>お問い合わせ種別</p>
              </div>
              <div className={styles.body}>
                <p>{assort}</p>
              </div>
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>お問い合わせ内容</p>
              </div>
              <div className={styles.body}>
                <p>{content}</p>
              </div>
            </div>

            <div className={styles.formUnit}>
              <div className={styles.header}>
                <p className={styles.heading}>
                  当社をどこで知りましたか（複数回答可）
                </p>
              </div>
              <div className={styles.body}>
                <p>{know.join('，')}</p>
              </div>
            </div>
          </div>
        </Layout.ContentBody>
        <Layout.ContentFooter>
          <Content.ButtonGroup>
            <Content.Button type="button" onClick={toggleConfirmButton}>
              戻る
            </Content.Button>
            <Content.Button type="submit" modifierColor="success">
              送信する
            </Content.Button>
          </Content.ButtonGroup>
        </Layout.ContentFooter>
      </div>
    </form>
  )
}
