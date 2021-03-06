import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import './index.css'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

