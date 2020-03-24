/*
 * @Author: your name
 * @Date: 2020-03-23 16:51:13
 * @LastEditTime: 2020-03-24 15:32:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_learn/10_demo/build-webpack/test/smoke/template/src/search/index.js
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import largeNumber from 'large-count';
import './search.less';

class Search extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        };
    }

    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            });
        });
    }

    render() {
        const { Text } = this.state;
        const addResult = largeNumber('999', '1');
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            { addResult }
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);