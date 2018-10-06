import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import TabComponent from "./component/tab";
import DetailComponent from "./component/detail";
import reducer from "./component/reducer/dataReducer";
import {combineReducers, createStore} from 'redux'
import {Provider} from "react-redux";
import {authenticationReducer} from "./component/reducer/authenticationReducer";
import LoginComponent from "./component/login"

const store = createStore(combineReducers({login: authenticationReducer, data: reducer}));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={LoginComponent}/>
                    <Route path='/home' component={TabComponent}/>
                    <Route path='/detail/:id' component={DetailComponent}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
