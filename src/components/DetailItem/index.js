import React, { Component } from 'react';
import './index.scss';

class DetailItem extends Component {
    static defaultProps = {
        filename: null,
        link: null
    };

    render() {
        const { filename, link } = this.props;
        return (
            <div className="detail-item-container">
                <div className="detail-item-container-area">{filename}</div>
                <div className="detail-item-container-area"><a href={link} className="detail-item-container-download-anchor">다운로드</a></div>
            </div>
        );
    }
}

export default DetailItem;
