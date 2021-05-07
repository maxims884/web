import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers'
import './App.css'
import { devToolsEnhancer } from 'redux-devtools-extension';
// const store = createStore(reducer)

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
))


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
