import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BingoBox from './bingoBox';
import DownloadPage from './downloadPage';

class MainPage extends Component {

    render() {
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/" component={BingoBox} exact />
                    <Route path="/download" component={DownloadPage} exact />
                </Switch>
            </div>
        </BrowserRouter >

    }
}

export default MainPage;