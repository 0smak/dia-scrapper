import { REGEXP } from '../middlewares/regexp'

export const getCategoriesMap = (urls: string[]) =>
  urls.map((url) =>
    url
      .replace(REGEXP.SITEMAP.CATEGORIES_STRING, '$1')
      .replace(/-/g, ' ')
      .split('/')
  )

export const getBrandsMap = (urls: string[]) =>
  urls.map((url) => decodeURI(url.split('/').pop() ?? ''))
