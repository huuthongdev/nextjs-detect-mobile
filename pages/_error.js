import React from 'react';
import PageNotFound from './PageNotFound';

class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        const { statusCode } = this.props;
        if (statusCode === 404) return <PageNotFound />
        return <PageNotFound />
        // return (
        //     <p>
        //         {this.props.statusCode
        //             ? `An error ${this.props.statusCode} occurred on server`
        //             : 'An error occurred on client'}
        //     </p>
        // );
    }
}

export default Error;