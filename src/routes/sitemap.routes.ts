import { Router } from 'express'
import {
  getBrands,
  getProductsCategories,
  sitemap
} from '../controllers/sitemap.controller'

const router = Router()

router.get('/', sitemap)
router.get('/categories', getProductsCategories)
router.get('/brands', getBrands)
router.get('/:type', sitemap)

export default router
