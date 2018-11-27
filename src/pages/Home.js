import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import List from '../components/List';
import Dummy from './dummy.json';

class Home extends Component {
    static defaultProps = {
        data: Dummy.data
    };

    getList = () => {
        if ( this.props.data.length !== 0) {
            const list = this.props.data.map((item, index) => {
                return (
                    <List
                    key={index}
                    idx={item.pid_sound}
                    name={item.nickname}
                    title={item.title}
                    cnt={item.cnt_files}
                    allowed={parseInt(item.b_allowed) === 1 ? '승인' : '미승인'}
                    category="일반/게임"
                    />
                );
            })

            return list;
        }

        return false;
    }

    render() {
        return (
            <div>
                <ListItem />
                {this.getList()}
            </div>
        );
    }
}

export default Home;
