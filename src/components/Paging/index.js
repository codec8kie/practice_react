import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Paging extends Component {
    render() {
        return (
            <div className="paging">
                <div className="paging-container prev">
                    <div className="paging-container-area"><span onClick={() => { this.props.handleClick(1) }} className="paging-container-area-anchor front">처음</span></div>
                    <div className="paging-container-area"><span onClick={() => { this.props.handleClick(2) }} className="paging-container-area-anchor prev">이전</span></div>
                </div>
                <div className="paging-container pages">

                </div>
                <div className="paging-container next">
                    <div className="paging-container-area"><span onClick={() => { this.props.handleClick(3) }} className="paging-container-area-anchor next">다음</span></div>
                    <div className="paging-container-area"><span onClick={() => { this.props.handleClick(4) }} className="paging-container-area-anchor end">끝</span></div>
                </div>
            </div>
        );
    }
}

export default Paging;
