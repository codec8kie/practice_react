import React, { Component } from 'react';
import List from '../components/List';
import Dummy from './dummy.json';

class Home extends Component {
    state = {
        page: 0,
        itemCnt: 3,
        data: Dummy.data
    };

    onRemove = (pid) => {
        const { data } = this.state;
        this.setState({
            data: data.filter(item => item.pid_sound !== pid)
        });
    }

    render() {
        return (
            <List
            itemCnt={this.state.itemCnt}
            page={this.state.page}
            data={this.state.data}
            onRemove={this.onRemove}
            />
        );
    }
}

export default Home;
