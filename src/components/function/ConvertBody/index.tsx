/*********************************
    インポート
*********************************/

//フック
import parse from 'html-react-parser'
//コンポーネント
import Image from 'next/image'

/*********************************
    変数定義
*********************************/

type Props = {
  contentHTML: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function ConvertBody({ contentHTML }:Props) {
  const contentReact = parse(contentHTML, {
    replace: (node:any) => {
      if (node.name === 'img') {
        const { src, alt, width, height } = node.attribs
        return (
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
          />
        )
      }
    }
  })
  
  //コンポーネントの出力
  return <>{contentReact}</>
}
