import React, { Component } from 'react';
import ListItem from '../ListItem';
import Paging from '../Paging';
import './index.scss';

class List extends Component {
    static defaultProps = {
        itemCnt: null,
        page: null,
        data: null
    };

    getListItems = () => {
        const { itemCnt, page, data, onRemove } = this.props;
        if ( data.length !== 0 ) {
            const listItems = data.map((item, index) => {
                if (true) {
                    return (
                        <ListItem
                        key={index}
                        data={item}
                        onRemove={onRemove}
                        />
                    );
                }
            });

            return listItems;
        }

        return (
            <div className="list-items-nodata">등록된 음원이 존재하지 않습니다.</div>
        );
    }

    pagination = (val) => {
        // 1은 처음, 2는 이전, 3은 다음, 4는 끝
        console.log(val);
    }

    componentDidMount() {
        const { page, itemCnt } = this.props;
        if (page !== null) {
            // console.log(itemCnt);
        }
    }

    render() {
        const { data } = this.props;
        if (data === null) return false;

        return (
            <div className="List">
                <div className="list-container">
                    <div className="list-container-area">닉네임</div>
                    <div className="list-container-area">음원 제목</div>
                    <div className="list-container-area">파일종류</div>
                    <div className="list-container-area">승인여부</div>
                    <div className="list-container-area">음원타입</div>
                    <div className="list-container-area"></div>
                </div>
                <div className="list-items-container">
                    {this.getListItems()}
                </div>
                <div className="list-page-container">
                    <Paging handleClick={(val) => { this.pagination(val); }}/>
                </div>
            </div>
        );
    }
}

export default List;
