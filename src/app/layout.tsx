/*********************************
    インポート
*********************************/

//スタイル
import '@/styles/style.scss'
//フック
import type { Metadata } from 'next'
import { siteMeta } from '@/lib/constants'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Function from '@/components/function/index'
import { Suspense } from 'react'
import NextTopLoader from 'nextjs-toploader'
//フォント
import { notojp } from '@/lib/fonts'

/*********************************
    Font Awesome
*********************************/

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

/*********************************
    メタデータのエクスポート
*********************************/

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: siteMeta.siteTitle,
  description: siteMeta.siteDesc,
  alternates: {
    canonical: siteMeta.siteUrl,
  },
  openGraph: {
    title: siteMeta.siteTitle,
    description: siteMeta.siteDesc,
    siteName: siteMeta.siteTitle,
    type: siteMeta.siteType,
    locale: siteMeta.siteLocale,
    url: siteMeta.siteUrl,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  twitter: {
    title: siteMeta.siteTitle,
    description: siteMeta.siteDesc,
    images: {
      url: siteMeta.siteImgSrc,
      width: siteMeta.siteImgWidth,
      height: siteMeta.siteImgHeight,
    },
  },
  icons: [
    {
      rel: 'icon',
      url: siteMeta.siteFavicon,
    },
    {
      rel: 'apple-touch-icon',
      url: siteMeta.siteAppleTouchIcon,
    },
  ],
}

/*********************************
   レイアウトデータのエクスポート
*********************************/

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //ページの出力
  return (
    <html lang={siteMeta.siteLang}>
      <body className={notojp.variable}>
        <NextTopLoader showSpinner={false} shadow={false} />

        <Layout.Header />

        <Layout.Wrapper>
          {children}

          <Layout.Pagetop />
        </Layout.Wrapper>

        <Layout.Footer />

        <Suspense>
          <Function.NavigationEvents />
        </Suspense>
      </body>
    </html>
  )
}
