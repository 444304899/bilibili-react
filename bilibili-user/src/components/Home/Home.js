
import React, { Component } from 'react';
import MyHeader from './Header';
import MyFooter from './Footer';
import TopNav from './TopNav';
import TopHot from './TopHot';
import HomeContent from './HomeContent';
import { Pagination, Button, DatePicker } from 'antd';
export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>
                    home
                    <Button>button</Button>
                </h1>
                <MyHeader />
                <TopNav />
                <TopHot />
                <HomeContent />
                <MyFooter />
            </div>
        )

    }
}