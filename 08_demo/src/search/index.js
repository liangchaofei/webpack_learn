/*
 * @Author: your name
 * @Date: 2020-03-16 21:49:57
 * @LastEditTime: 2020-03-21 17:16:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/02_demo/src/search.js
 */
import React from 'react';
import ReactDom from 'react-dom';
import '../../common'
import { a } from './tree-shaking'
import xyz from './images/xyz.png'
import './search.less';


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
        const pageA = a();
        const { Text } = this.state;
        return (
            <div className="search">
                {
                    Text ? <Text /> : null
                }
                { pageA } search page demo1
                <img src={ xyz } onClick={this.handleClick.bind(this)} />
            </div>
        )
    }
}

ReactDom.render(<Search />,document.getElementById('root'))