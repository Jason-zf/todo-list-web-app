import React, {Component} from 'react';
import './App.css';
import TabComponent from "./component/tab";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import DetailComponent from "./component/detail";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        {/*<Link to='/'>Home</Link>*/}
                        {/*<Link to='/detail'>Detail</Link>*/}
                        <Switch>
                            <Route exact path='/' component={TabComponent}/>
                            <Route path='/detail' component={DetailComponent}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
