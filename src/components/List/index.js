import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class List extends Component {
    static defaultProps = {
        idx: null,
        name: null,
        title: null,
        cnt: null,
        allowed: null,
        category: null
    };

    render() {
        return (
            <div className="list-container">
                <div className="list-container-area">{this.props.name}</div>
                <div className="list-container-area"><Link to={'/detail/' + this.props.idx} className="list-container-detail-anchor">{this.props.title}</Link></div>
                <div className="list-container-area"><Link to={'/detail/' + this.props.idx} class="list-container-download-anchor">{this.props.cnt}개</Link></div>
                <div className="list-container-area">{this.props.allowed}</div>
                <div className="list-container-area">{this.props.category}</div>
                <div className="list-container-area"><button type="button" class="list-container-area-remove">삭제</button></div>
            </div>
        );
    }
}

export default List;
