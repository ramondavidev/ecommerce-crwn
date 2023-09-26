// import { compose, createStore, applyMiddleware } from "redux";

import { configureStore } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
// import storage from "redux-persist/lib/storage";
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['cart']
// }

const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
    ].filter(Boolean);


// const composeEnhancer = 
// (process.env.NODE_ENV !== 'production' && 
// window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
// compose;

// const compposedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, compposedEnhancers);

export const store = configureStore({
    reducer: rootReducer,
    // by default, if you dont pass middleware, toolkit add redux thunk and 2 other middlewares
    middleware: middleWares
})

sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);