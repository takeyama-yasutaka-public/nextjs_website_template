/*********************************
    バリデーション
*********************************/

//テキストの判定する処理
export function validatText(text: string) {
    // 未入力だった時の処理
    if (text === '') {
        return '入力してください。'
    }
    // すべての条件を満たした場合
    return ''
}

//セレクトボックスの判定する処理
export function validatSelect(select: string, defaultSelect: string) {
    // 未入力だった時の処理
    if (select === defaultSelect) {
        return '選択してください。'
    }
    // すべての条件を満たした場合
    return ''
}

//ラジオの判定する処理
export function validatRadio(select: string) {
    // 未入力だった時の処理
    if (select === '') {
        return '選択してください。'
    }
    // すべての条件を満たした場合
    return ''
}

//チェックボックスの判定する処理
export function validatCheckbox(checkbox: string[]) {
    // 未入力だった時の処理
    if (checkbox.length === 0) {
        return '選択してください。'
    }
    // すべての条件を満たした場合
    return ''
}

//メールアドレスのRFC判定
export function validatRfcEmail(email: string) {
    // ローカル部分とドメイン名に分割
    const [local, domain] = email.split('@')
    // 未入力だった時の処理
    if (email == '') {
      return '入力してください。'
    }
    // @が含まれていない場合は無効なメールアドレス
    if (email.match(/^(?!.*@).*$/)) {
      return '@が含まれていない場合は無効なメールアドレスです。'
    }
    // @が2つ以上連続している
    if (email.match(/@{2,}/)) {
      return '@が2つ以上連続しています。'
    }
    // @が2つ以上含まれている
    if (email.match(/(@[^@]*){2,}/)) {
      return '@が2つ以上含まれています。'
    }
    // ローカル部分で、65文字以上になっている
    if (65 <= local.length) {
      return '@より前の部分が、65文字以上になっています。'
    }
    // ドメイン名が254文字以上の長さになっている
    if (254 <= domain.length) {
      return '@より後の部分が254文字以上の長さになっています。'
    }
    // メールアドレス全体で255文字以上になっている
    if (255 <= email.length) {
      return 'メールアドレス全体で255文字以上になっています。'
    }
    // .(ドット)が、ローカル部分で、2つ以上連続している
    if (local.match(/\.{2,}/)) {
      return '.(ドット)が、@より前の部分で、2つ以上連続しています。'
    }
    // .(ドット)を、ローカル部分の最初と最後(@の直前)に使っている
    if (local.startsWith('.') || local.endsWith('.')) {
      return '.(ドット)を、ローカル部分の最初と最後(@の直前)に使っています。'
    }
    // -(ハイフン)が、ローカル部分 or ドメイン部分の先頭または末尾にある
    if (local.startsWith('-') || local.endsWith('-') || domain.startsWith('-') || domain.endsWith('-')) {
      return '-(ハイフン)が先頭・末尾または、@の前後にあります。'
    }
    // ドメイン部分で-(ハイフン)と.(ドット)が隣接している
    if (domain.match(/\.-/) || domain.match(/-\./)) {
      return '@より後の部分で、-(ハイフン)と.(ドット)が隣接しています。'
    }
    // ドメイン名が数字だけで構成されている
    if (domain.match(/^\d+$/)) {
      return '@より後の部分が、数字だけで構成されています。'
    }
    // ユーザー名またはドメイン名に、特殊文字(( ) , : ; < > [ ])が含まれている
    if (local.match(/[ (),:;<>[\]]/) || domain.match(/[ (),:;<>[\]]/)) {
      return '特殊文字(( ) , : ; < > [ ])が含まれています。'
    }
    // .(ドット)が、ドメイン部分で1つもない
    if (domain.match(/^(?!.*\.).*$/)) {
      return '.(ドット)が、@より後の部分で1つもありません。'
    }
    // すべての条件を満たした場合
    return ''
}

//全角カタカナの判定
export function validatKana(kana: string) {
    // 未入力だった時の処理
    if (kana == '') {
        return '入力してください。'
    }
    // 全角カタカナで入力されていない
    if (!kana.match(/^[ァ-ンー　]+$/)) {
      return '全角カタカナで入力してください。'
    }
    // すべての条件を満たした場合
    return ''
  }

//半角数字を判定する処理
export function validatNumber(number: string) {
    // 未入力だった時の処理
    if (number == '') {
        return '入力してください。'
    }
    // 半角数字で入力されていない
    if (!number.match(/^[0-9]+$/)) {
      return '半角数字で入力してください。'
    }
    // すべての条件を満たした場合
    return ''
}
