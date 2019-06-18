import React, { Component, Fragment } from 'react';

class PageNotFound extends Component {
    static async getInitialProps(ctx) {
        return {}
    }

    render() {
        return (
            <Fragment>
                <div className="page-not-found">
                    Không tìm thấy trang bạn yêu cầu!
                </div>
            </Fragment>
        );
    }
}

export default PageNotFound;