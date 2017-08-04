import { action } from 'utilities'
import {
  GET_CATEGORIES,
  INIT_CATEGORIES_SCREEN,
  SET_CATEGORIES,
  SET_CURRENT_CATEGORIES,
} from './types'

const getCategories = categories => action( GET_CATEGORIES, { categories } )
const initCategoriesScreen = () => action( INIT_CATEGORIES_SCREEN )
const setCategories = categories => action( SET_CATEGORIES, { categories } )
const setCurrentCategories = ( categories, startIndex ) =>
  action( SET_CURRENT_CATEGORIES, { categories, startIndex } )

export {
  getCategories,
  initCategoriesScreen,
  setCategories,
  setCurrentCategories,
}