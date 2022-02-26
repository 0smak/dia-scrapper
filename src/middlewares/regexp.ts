export const REGEXP = {
  SITEMAP: {
    ALL: /<loc>(https:\/\/.*?)<\/loc>/g,
    PRODUCTS: /<loc>(https:\/\/.*?\/p\/.*?)<\/loc>/g,
    CATEGORIES: /<loc>(https:\/\/.*?\/cf)<\/loc>/g,
    BRANDS: /<loc>(https:\/\/.*?\/marcas\/.*?)<\/loc>/g,
    CATEGORIES_STRING: /https:\/\/www.dia.es\/compra-online\/(.*?)\/cf/g,
    BRANDS_STRING: /(https:\/\/www\.dia\.es.*?\/marcas\/)(.*?)/g
  }
}
