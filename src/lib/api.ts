/*********************************
    APIを取得
*********************************/

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost/api'

// ブログ記事の取得
export async function getBlogPostById(articleId: string, draftKey?: string) {
  const params = new URLSearchParams()
  if (draftKey) params.append('draftKey', draftKey)

  const res = await fetch(
    `${API_BASE_URL}/posts/${articleId}?${params.toString()}`,
    {
      cache: 'force-cache',
    }
  )
  if (!res.ok) throw new Error('Failed to fetch blog post')
  return await res.json()
}

// ブログ一覧の取得
export async function getBlogAll(id: number = 1, PER_PAGE: number = 100) {
  const offset = (id - 1) * PER_PAGE
  const res = await fetch(
    `${API_BASE_URL}/posts?offset=${offset}&limit=${PER_PAGE}`,
    {
      cache: 'force-cache',
    }
  )
  if (!res.ok) throw new Error('Failed to fetch blog list')
  return await res.json()
}

// カテゴリー一覧の取得
export async function getBlogCategory(limit: number = 100) {
  const res = await fetch(`${API_BASE_URL}/categories?limit=${limit}`, {
    cache: 'force-cache',
  })
  if (!res.ok) throw new Error('Failed to fetch categories')
  const data = await res.json()
  return data.contents
}

// カテゴリー絞り込み一覧の取得
export async function getBlogAllByCategory(
  category: string,
  id: number = 1,
  PER_PAGE: number = 100
) {
  const offset = (id - 1) * PER_PAGE
  const res = await fetch(
    `${API_BASE_URL}/posts?category=${category}&offset=${offset}&limit=${PER_PAGE}`,
    {
      cache: 'force-cache',
    }
  )
  if (!res.ok) throw new Error('Failed to fetch blog by category')
  return await res.json()
}

// アーカイブ絞り込み一覧の取得
export async function getBlogAllByArchive(
  filters: string,
  id: number = 1,
  PER_PAGE: number = 100
) {
  const match = filters.match(
    /date\[greater_than\](.+?)\[and\]date\[less_than\](.+)/
  )

  if (!match) throw new Error('Invalid filters format')

  const fromDate = new Date(new Date(match[1]).getTime() + 18 * 60 * 60 * 1000)
  const year = fromDate.getFullYear()
  const month = fromDate.getMonth() + 1

  const offset = (id - 1) * PER_PAGE
  const res = await fetch(
    `${API_BASE_URL}/posts?month=${year}_${month}&offset=${offset}&limit=${PER_PAGE}`,
    {
      cache: 'force-cache',
    }
  )

  if (!res.ok) throw new Error('Failed to fetch blog by archive')
  return await res.json()
}

// 検索絞り込み一覧の取得
export async function getBlogAllBySearch(
  q: string,
  id: number = 1,
  PER_PAGE: number = 100
) {
  const offset = (id - 1) * PER_PAGE
  const res = await fetch(
    `${API_BASE_URL}/search/posts?q=${encodeURIComponent(
      q
    )}&offset=${offset}&limit=${PER_PAGE}`,
    {
      cache: 'no-store',
    }
  )
  if (!res.ok) throw new Error('Failed to fetch search results')
  return await res.json()
}

// ページビューの送信
export const sendPageView = async (postId: number) => {
  let sessionId = sessionStorage.getItem('session_id')
  if (!sessionId) {
    sessionId = crypto.randomUUID()
    sessionStorage.setItem('session_id', sessionId)
  }

  try {
    await fetch(`${API_BASE_URL}/page-view`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post_id: postId, session_id: sessionId }),
    })
  } catch (err) {
    console.error('PageView failed', err)
  }
}

//人気記事の取得
export async function getBlogRanking() {
  const res = await fetch(`${API_BASE_URL}/ranking`, {
    cache: 'force-cache',
  })
  if (!res.ok) throw new Error('Failed to fetch blog ranking')
  return await res.json()
}

//お問い合わせフォームの型定義
export type ContactPayload = {
  nameSei: string
  nameMei: string
  kanaSei: string
  kanaMei: string
  mail: string
  sex: string
  assort: string
  content: string
  know: string[]
}

//お問い合わせフォームの送信
export async function postContactForm(payload: ContactPayload) {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || '送信に失敗しました')
  }

  return res.json()
}
