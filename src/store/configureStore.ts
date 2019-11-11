import { compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from "../reducers";
// import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configDevStore = () => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
}

const configProdStore = () => createStore(rootReducer, applyMiddleware(sagaMiddleware));

const store = process.env.ENV === 'production' ? configProdStore() : configDevStore()

// sagaMiddleware.run(rootSaga)

export default store;
