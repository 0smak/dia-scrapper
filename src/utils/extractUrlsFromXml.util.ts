import { REGEXP } from '../middlewares/regexp'

export const sitemapURLType = ['all', 'products', 'categories', 'brands']
export type TSitemapURLType = 'all' | 'products' | 'categories' | 'brands'
export const extractUrlsFromXml = (
  xml: string,
  type?: TSitemapURLType
): string[] => {
  let urlType = {
    all: REGEXP.SITEMAP.ALL,
    products: REGEXP.SITEMAP.PRODUCTS,
    categories: REGEXP.SITEMAP.CATEGORIES,
    brands: REGEXP.SITEMAP.BRANDS
  }[type ?? 'all']
  return [...(xml.match(urlType) as string[])].map((url) =>
    url.replace(REGEXP.SITEMAP.ALL, '$1')
  )
}
