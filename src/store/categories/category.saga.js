import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";

export function* fetchCategoriesAsync() {
    try {
        const categories = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categories));
      } catch (error) {
        yield put(fetchCategoriesFailed(error));
      }
}

export function* onFetchCategories() {
    yield takeLatest('categories/fetchCategoriesStart', fetchCategoriesAsync);
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}