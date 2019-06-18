import React, { Component, Fragment } from 'react';
import { CpnIcon, Link } from '../refs';

class PageNotFound extends Component {
    static async getInitialProps(ctx) {
        return {}
    }

    render() {
        return (
            <Fragment>
                <div className="page-not-found">
                    <div className="content">
                        <CpnIcon name="ERROR_404" />
                        <p>Xin lỗi! Chúng tôi không tìm thấy trang bạn yêu cầu!</p>
                        <Link to="/">
                            <a className="cta">
                                Về trang chủ
                            </a>
                        </Link>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PageNotFound;