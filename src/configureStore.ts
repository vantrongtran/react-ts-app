import { compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './reducer';
// import rootSaga from '../sagas';

const persistConfig = {
  key: 'c-management',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth']
}

const sagaMiddleware = createSagaMiddleware();

const pReducer = persistReducer(persistConfig, rootReducer);

const configDevStore = () => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    pReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
}

const configProdStore = () => createStore(pReducer, applyMiddleware(sagaMiddleware));

const store = process.env.ENV === 'production' ? configProdStore() : configDevStore()

// sagaMiddleware.run(rootSaga)


export default persistStore(store);
