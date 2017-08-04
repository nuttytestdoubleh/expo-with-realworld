import { createSelector } from 'reselect'

const currentCategorieSelector = state => state.categories.categories

const categoriesByIdSelector = state => state.categories.categoriesById
const categoryIdsSelector = state => state.categories.categoryIds

const childCategoriesByIdSelector = state =>
  state.categories.childCatogoriesById
const childCatogoryIdsSelector = state => state.categories.childCatogoryIds

const subChildCategoriesByIdSelector = state =>
  state.categories.subChildCatogoriesById
const subChildCatogoryIdsSelector = state =>
  state.categories.subChildCatogoryIds

const categoriesNameSelector = createSelector( categoriesByIdSelector, items => {
  return Object.keys( items ).reduce( ( p, c ) => {
    return [ ...p, items[ c ] ]
  }, [] )
} )

const currentCategorieQuerySelector = createSelector(
  currentCategorieSelector,
  curr => curr.join( '>' )
)

const childCategoriesNameSelector = createSelector(
  currentCategorieSelector,
  childCategoriesByIdSelector,
  ( curr, items ) => {
    return Object.keys( items ).reduce( ( p, c ) => {
      return items[ c ].category === curr[ 0 ] ? [ ...p, items[ c ] ] : p
    }, [] )
  }
)

const subChildCategoriesNameSelector = createSelector(
  currentCategorieSelector,
  subChildCategoriesByIdSelector,
  ( curr, items ) => {
    return Object.keys( items ).reduce( ( p, c ) => {
      return items[ c ].childCategory === curr[ 1 ] ? [ ...p, items[ c ] ] : p
    }, [] )
  }
)

export {
  categoriesNameSelector,
  categoryIdsSelector,
  childCategoriesNameSelector,
  childCatogoryIdsSelector,
  currentCategorieQuerySelector,
  subChildCategoriesNameSelector,
  subChildCatogoryIdsSelector,
  currentCategorieSelector,
}