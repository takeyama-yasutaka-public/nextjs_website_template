/*********************************
    フォント
*********************************/

import { Noto_Sans_JP } from 'next/font/google'

const notojp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
})

export { notojp }