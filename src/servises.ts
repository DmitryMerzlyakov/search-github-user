import axios from 'axios'

const GITHUB_API = 'https://api.github.com'

export const PER_PAGE = 30

export const axiosInstance = axios.create({
  baseURL: `${GITHUB_API}`,
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
})

export function createPages(
  pages: number[],
  pagesCount: number,
  currentPage: number
) {
  if (pagesCount > 10) {
    if (currentPage > 5) {
      for (let i = currentPage - 4; i <= currentPage + 5; i++) {
        pages.push(i)
        if (i == pagesCount) break
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i)
        if (i == pagesCount) break
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
  }
}
