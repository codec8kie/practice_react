import React, { Component } from 'react';
import DetailItem from '../DetailItem'
import './index.scss';

class Detail extends Component {
    getDetailItems = () => {
        const { detail } = this.props;
        if (detail.length !== 0) {
            const detailItem = detail[0].files.map((item, index) => {
                return (
                    <DetailItem
                    key={index}
                    filename={item.filename}
                    link={item.link}
                    />
                );
            });

            return detailItem;
        }

        return false;
    }

    render() {
        return (
            <div className="detail">
                <div className="detail-container">
                    <div className="detail-container-area">음원파일</div>
                </div>
                <div className="detail-items-container">
                    {this.getDetailItems()}
                </div>
            </div>
        );
    }
}

export default Detail;
