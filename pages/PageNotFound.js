import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import { CpnIcon, Link } from '../refs';

class PageNotFound extends Component {
    render() {
        return (
            <Fragment>
                <div className="page-not-found">
                    <Head>
                        <title>Không tìm thấy trang bạn yêu cầu</title>
                    </Head>
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