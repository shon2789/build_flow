import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { cmpReducer } from './reducers/cmp.reducer';
import { webAppReducer } from './reducers/web-app.reducer';
import { userReducer } from './reducers/user.reducer';




const rootReducer = combineReducers({

    webAppModule: webAppReducer,
    cmpModule: cmpReducer,
    userModule: userReducer,

})


// export const store = createStore(rootReducer, applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
// Lets wire up thunk and also redux-dev-tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// export const store = createStore(rootReducer, applyMiddleware(thunk))


