import React, { Component, Fragment } from 'react';
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';

class Home extends Component {
    static async getInitialProps(ctx) {
        const { reduxStore, req, query, res } = ctx;
        const isServer = !!req;

        if (!isServer) return { query }

        // Fetching data from server

        return {
            query,
        }
    }

    render() {
        return (
            <Fragment>
                <HomeDesktop />
                <HomeMobile />
            </Fragment>
        );
    }
}

export default Home;