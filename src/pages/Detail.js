import React, { Component } from 'react';
import DetailList from '../components/Detail';
import Dummy from './dummy.json';

class Detail extends Component {
    state = {
        data: Dummy.data,
        detail: null
    };

    componentDidMount() {
        const { data } = this.state;
        const { params } = this.props.match;
        this.setState({
            detail: data.filter(item => item.pid_sound === parseInt(params.pid))
        });
    }

    render() {
        const { detail } = this.state;
        if (detail === null) return false;

        return (
            <DetailList
            detail={detail}
            />
        );
    }
};

export default Detail;
