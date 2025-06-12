/*********************************
    メタデータの定義
*********************************/

import favicon from 'public/favicon/favicon.ico'
import siteImg from '@/images/image_16-9.png'

//サイトメタデータの定義
export const siteMeta = {
  siteTitle: '共通テンプレート',
  siteDesc: 'description',
  siteUrl: 'https://example.com',
  siteLang: 'ja',
  siteLocale: 'ja_JP',
  siteType: 'website' as 'website',
  siteFavicon: favicon.src,
  siteAppleTouchIcon: 'public/favicon/apple-touch-icon.png',
  siteImgSrc: siteImg.src,
  siteImgWidth: siteImg.width,
  siteImgHeight: siteImg.height,
}

//ブレイクポイントの定義
export const breakpoint = {
  sp: '767.98px',
  pc: '768px',
}

//代替アイキャッチ画像データの定義
export const eyecatchLocal = {
  url: '/images/no-image.png',
  width: 1080,
  height: 730,
}

//ページネーション表示件数の定義
export const prePage = {
  blog: 8,
}

//グローバルナビゲーションの定義
export const globalNavi = {
  items: [
    {
      id: 1,
      title: 'トップ',
      path: '/',
    },
    {
      id: 2,
      title: '企業情報',
      items: [
        {
          id: 1,
          title: '企業概要',
          path: '/company/profile',
        },
        {
          id: 2,
          title: '沿革',
          path: '/company/history',
        },
        {
          id: 3,
          title: 'アクセス',
          path: '/company/access',
        },
      ],
    },
    {
      id: 3,
      title: '事業紹介',
      items: [
        {
          id: 1,
          title: '事業内容',
          path: '/business/detail',
        },
        {
          id: 2,
          title: '事業実績',
          items: [
            {
              id: 1,
              title: '事業カテゴリ1',
              path: '/business/achievement/category',
            },
            {
              id: 2,
              title: '事業カテゴリ2',
              path: '/business/achievement/category',
            },
            {
              id: 3,
              title: '事業カテゴリ3',
              path: '/business/achievement/category',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'ニュース',
      path: '/news',
    },
    {
      id: 5,
      title: 'BLOG',
      path: '/blog',
    },
    {
      id: 6,
      title: 'お問い合わせ',
      path: '/contact',
    },
  ],
}
