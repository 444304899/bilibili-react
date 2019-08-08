import React, { Component } from 'react';
import MyVideo from './myVideo';
require('./all.css');

class Different extends Component {
    state = {  }
    render() {
        return (
            <div className="index__different__src-partition-different-">
                <div className="index__title__src-partition-different-">
                    <p>{this.props.tit}</p>
                </div>
                <a className="index__more__src-partition-different-" href="/channel/24.html">
                    <div className="index__words__src-partition-different-">
                        <p>查看更多</p>
                    </div>
                    <div className="index__arrow__src-partition-different-">
                        {/* <svg className="index__icon__src-partition-different-" aria-hidden="true">
                            <use href="#icon-gengduo"></use>
                        </svg> */}
                    </div>
                </a>
                <MyVideo></MyVideo>
            </div>
        );
    }
}

export default Different;