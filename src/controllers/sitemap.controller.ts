import axios from 'axios'
import { Request, Response } from 'express'
import { URL } from '../config/url'
import { arrayOfStringsToObject } from '../utils/arrayOfStringsToObject.util'
import {
  extractUrlsFromXml,
  sitemapURLType,
  TSitemapURLType
} from '../utils/extractUrlsFromXml.util'
import { getBrandsObject } from '../utils/getBrandsObject.util'
import {
  getBrandsMap,
  getCategoriesMap
} from '../utils/getCategoriesStringMap.util'

export const sitemap = async (req: Request, res: Response) => {
  const { type } = req.params
  if (type?.length && !sitemapURLType.includes(type))
    return res.status(400).send({
      success: false,
      status: 400,
      message:
        'Invalid type, please use one of the following: all, products, categories, brands'
    })
  const response = await axios.get(URL.SITEMAP)
  const data = extractUrlsFromXml(response?.data, type as TSitemapURLType)
  return res.status(200).json({
    status: 200,
    success: true,
    data
  })
}

export const getProductsCategories = async (req: Request, res: Response) => {
  const response = await axios.get(URL.SITEMAP)
  const urls = extractUrlsFromXml(response?.data, 'categories')
  const data = await arrayOfStringsToObject(getCategoriesMap(urls))
  return res.status(200).json({
    status: 200,
    success: true,
    data
  })
}

export const getBrands = async (req: Request, res: Response) => {
  const response = await axios.get(URL.SITEMAP)
  const urls = extractUrlsFromXml(response?.data, 'brands')
  const data = await getBrandsObject(getBrandsMap(urls))
  return res.status(200).json({
    status: 200,
    success: true,
    data
  })
}
