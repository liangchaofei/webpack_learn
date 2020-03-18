/*
 * @Author: your name
 * @Date: 2020-03-16 21:49:57
 * @LastEditTime: 2020-03-17 23:47:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/02_demo/src/search.js
 */
import React from 'react';
import ReactDom from 'react-dom';
import xyz from './images/xyz.png'
import './search.less';


class Search extends React.Component{
    render(){
        return (
            <div className="search">
                search page demo1
                <img src={ xyz } />
            </div>
        )
    }
}

ReactDom.render(<Search />,document.getElementById('root'))