/*
 * @Author: your name
 * @Date: 2020-03-22 16:36:23
 * @LastEditTime: 2020-03-22 16:55:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_learn/09_demo/src/search/search-index.js
 */
/*
 * @Author: your name
 * @Date: 2020-03-16 21:49:57
 * @LastEditTime: 2020-03-22 15:40:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/02_demo/src/search.js
 */
// import React from 'react';
// import ReactDom from 'react-dom';
// import largeCount from 'large-count';
// import '../../common'
// import { a } from './tree-shaking'
// import xyz from './images/xyz.png'
// import './search.less';

const React = require('react');
const largeCount = require('large-count');
const logo = require('./images/xyz.png');
require('./search.less');


class Search extends React.Component{

    constructor(){
        super(...arguments);
        this.state = {
            Text:null
        }
    }
    handleClick() {
        import('./text').then(text=> {
            this.setState({
                Text:text
            })
        })
    }
    render(){
        const { Text } = this.state;
        const addResult = largeCount('99','1')
        return (
            <div className="search">
                {
                    Text ? <Text /> : null
                }
                {addResult}
                <img src={ logo } onClick={this.handleClick.bind(this)} />
            </div>
        )
    }
}

module.exports = <Search />;