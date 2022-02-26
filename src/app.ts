import express from 'express'
import morgan from 'morgan'

import productsRoutes from './routes/product.routes'
import sitemapRoutes from './routes/sitemap.routes'
// initializators
const app = express()

// settings
app.set('port', process.env.PORT ?? 3000)

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.send(`API running at http://localhost:${app.get('port')}`)
})

app.use('/sitemap', sitemapRoutes)
app.use('/products', productsRoutes)

export default app
