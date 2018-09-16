import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import TabComponent from "./component/tab";
import DetailComponent from "./component/detail";
import reducer from "./component/reducer";
import {createStore} from 'redux'
import {Provider} from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={TabComponent}/>
                    {/*<Route path='/detail/' component={DetailComponent}/>*/}
                    <Route path='/detail/:id' component={DetailComponent}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
