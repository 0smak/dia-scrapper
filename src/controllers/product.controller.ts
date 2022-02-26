import { Response, Request } from 'express'

import puppeteer, { Page } from 'puppeteer'
export const getProductByURL = async (req: Request, res: Response) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const { url } = req.query
  const page: Page = await browser.newPage()
  await page.goto(url as string)
  let data = await page.evaluate(() => {
    let body = document.body
    const PRODUCT_SELECTORS = (el: any) => {
      return {
        TITLE: el.querySelector('.product-name h1'),
        IMAGES: el.querySelectorAll('.carousel_alternate_separator'),
        DESCRIPTION: el.querySelector('.product-description-seo'),
        PRICE: el.querySelector('.price-container .price'),
        AVG_PRICE: el.querySelector('.price-container .average-price'),
        NUTRI_TITLE: el.querySelectorAll('.nutri-title'),
        NUTRI_P: el.querySelectorAll('.nutri-title ~ .form_field-label')
      }
    }
    let selector = { ...PRODUCT_SELECTORS(body) }
    let data = {
      title: selector.TITLE?.innerText,
      images: [...Array.from(selector.IMAGES)]?.map((img: any) => img.src),
      description: selector.DESCRIPTION?.innerText
        ?.replaceAll(/compra/gi, '')
        ?.trim(),
      price: selector.PRICE?.innerText ?? '',
      avgPrice: selector.AVG_PRICE?.innerText ?? '',
      nutrition: [...selector.NUTRI_TITLE]?.reduce((a: any, c: any, i: any) => {
        a[c.innerText] = selector.NUTRI_P[i]?.innerText
        return a
      }, {})
    }
    return data
  })
  await browser.close()
  return res.status(200).json({
    status: 200,
    success: true,
    data
  })
}
