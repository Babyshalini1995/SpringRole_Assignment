import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import TablePage from "./containers/TableView/TablePage";
import DetailPage from "./containers/DetailView/DetailPage";


function App() {
  return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={TablePage}/>
                    <Route exact path="/user/:userId" component={DetailPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
