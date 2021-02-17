import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BingoBox from './bingoBox';
import DownloadPage from './downloadPage';
import Navigation from './Navigation';

class MainPage extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={BingoBox} exact />
                        <Route path="/download" component={DownloadPage} />
                    </Switch>
                </div>
            </BrowserRouter >
        );
    }
}

export default MainPage;