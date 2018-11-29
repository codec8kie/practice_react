import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class ListItem extends Component {
    handleClick = () => {
        const { data, onRemove } = this.props;
        onRemove(data.pid_sound);
    }

    render() {
        const { data } = this.props;
        return (
            <div className="list-item-container">
                <div className="list-item-container-area">{data.nickname}</div>
                <div className="list-item-container-area">
                    <Link to={'/detail/' + data.pid_sound} className="list-item-container-detail-anchor">{data.title}</Link>
                </div>
                <div className="list-item-container-area">
                    <Link to={'/detail/' + data.pid_sound} className="list-item-container-download-anchor">{data.cnt_files}개</Link>
                </div>
                <div className="list-item-container-area">
                    {
                        data.b_allowed === 0
                        ? '미승인'
                        : '승인'
                    }
                </div>
                <div className="list-item-container-area">
                    {
                        data.b_normal === 1 && data.b_game === 1
                            ? '일반/게임'
                            : data.b_normal === 1
                                ? '일반'
                                : data.b_game === 1
                                    ? '게임'
                                    : ''
                    }
                </div>
                <div className="list-item-container-area"><button type="button" className="list-item-container-area-remove" onClick={this.handleClick}>삭제</button></div>
            </div>
        );
    }
}

export default ListItem;
