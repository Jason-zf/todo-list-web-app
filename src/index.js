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

fetch("/todos", {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'AUTHORIZATION': 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxfQ.TWmWp1hv1L0TIzeIFweGUW-VAbd3DeuhKn8ApN-JjS2KS2LBb7K3eQ5zLVhgkI0zh-p49f2QSnZbNaTaskW-eg'
    },
    // body: JSON.stringify({
    //     "name": "test2",
    //     "status": "blocked",
    //     "dueDate": 1537200000000,
    //     "tags": [{"name": "javascript"}, {"name": "c#"}]
    // })
}).then(function (response) {
    return response.json();
}).then(function (myJson) {
    // console.log(myJson);
});


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginComponent}/>
                    <Route path='/home' component={TabComponent}/>
                    <Route path='/detail/:id' component={DetailComponent}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
