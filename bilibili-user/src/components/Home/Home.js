
import React, { Component } from 'react';
import MyHeader from './Header';
import MyFooter from './Footer';
import TopNav from './TopNav';
import TopHot from './TopHot';
import HomeContent from './HomeContent';
export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MyHeader />
                <TopNav />
                <TopHot />
                <HomeContent />
                <MyFooter />
            </div>
        )

    }
}