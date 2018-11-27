import React, { Component } from 'react';

class Detail extends Component {
    static detaulProps = {
        filename: null,
        link: null
    };
    
    render() {
        return (
            <div>
                <div>{this.props.filename}</div>
                <div><a href={this.props.link}>다운로드</a></div>
            </div>
        );
    }
}

export default Detail;
