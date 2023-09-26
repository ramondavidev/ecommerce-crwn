import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);


export const fetchCategoriesStart = () => createAction('categories/fetchCategoriesStart');

export const fetchCategoriesSuccess = (categories) => createAction('categories/fetchCategoriesSuccess', categories);

export const fetchCategoriesFailed = (error) => createAction('categories/fetchCategoriesFailed', error);