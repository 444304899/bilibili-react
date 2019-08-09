import React, { Component } from 'react';
// import Showstu from '../components/student/Showstu';
// import AddStu from '../components/student/AddStu';
// 使用redux管理我们的状态
// import store from '../store';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/login/Login';


class App extends Component {
  constructor(props) {
    super(props);
    // 放数据的地方
    this.state = {
      // stulist: store.getState().stulist
    }
    // 需要显示的去订阅redux里面的数据
    // this.getStoreData = this.getStoreData.bind(this);
    // store.subscribe(this.getStoreData);
  }


  render() {
    return (
      <Router>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
      </Router>
    );
  }
}

export default App;
