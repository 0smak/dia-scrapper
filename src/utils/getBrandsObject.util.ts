import { createURLBrands } from './createURLCategories.util'

export const getBrandsObject = async (brands: string[]) => {
  return brands.reduce((acc: any[], brand: any) => {
    return [
      ...acc,
      {
        name: brand,
        url: createURLBrands(brand)
      }
    ]
  }, [])
}
