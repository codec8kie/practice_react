import React, { Component } from 'react';
import DetailItem from '../components/DetailItem';
import DetailList from '../components/Detail';
import Dummy from './dummy.json';

class Detail extends Component {
    state = {
        data: Dummy.data,
        files: null
    };

    getMusicList = () => {
        const detailList = this.state.files.map((item, index) => {
            return (
                <DetailList
                key={index}
                filename={item.filename}
                link={item.link}
                />
            );
        })

        return detailList;
    }

    componentDidMount() {
        this.state.data.filter((item) => {
            if ( item.pid_sound === parseInt(this.props.match.params.pid) ) {
                this.setState({
                    files: item.files
                });
            }
        });
    }

    render() {
        if ( this.state.files === null ) return false;
        return (
            <div>
                <DetailItem />
                {this.getMusicList()}
            </div>
        );
    }
};

export default Detail;
