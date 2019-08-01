import React, { Component } from 'react';
// import Showstu from '../components/student/Showstu';
// import AddStu from '../components/student/AddStu';
// 使用redux管理我们的状态
// import store from '../store';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Abouti from './components/About/Abouti';


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

  // getStoreData() {
  //   // this.state = store.getState();
  //   this.setState({
  //     stulist: store.getState().stulist
  //   });
  // }

  // stuList() {
  //   return this.state.stulist.map((item, ind) => {
  //     return <Showstu key={ind} stuinfo={item} ind={ind} />;
  //   })
  // }

  render() {
    return (
      <Router>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/abouti' component={Abouti} />
      </Router>
    );
  }
}

export default App;
