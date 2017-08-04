import * as image from 'mocks/image'

const normalizedProducts = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      return {
        ...p,
        productsById: {
          ...p.productsById,
          [ c ]: {
            ...image.products( data[ c ] ),
          },
        },
        productIds: [ ...p.productIds, c ],
      }
    },
    {
      productsById: {},
      productIds: [],
    }
  )

export { normalizedProducts }