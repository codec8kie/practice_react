import React, { Component } from 'react';
import './index.scss';

class ListItem extends Component {
    render() {
        return (
            <div className="list-item-container">
                <div className="list-item-container-area">닉네임</div>
                <div className="list-item-container-area">음원 제목</div>
                <div className="list-item-container-area">파일종류</div>
                <div className="list-item-container-area">승인여부</div>
                <div className="list-item-container-area">음원타입</div>
                <div className="list-item-container-area"></div>
            </div>
        );
    }
}

export default ListItem;
