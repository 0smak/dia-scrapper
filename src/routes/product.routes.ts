import { Router } from 'express'
import { getProductByURL } from '../controllers/product.controller'

const router = Router()

router.get('/', getProductByURL)

export default router
