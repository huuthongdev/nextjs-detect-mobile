import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { configs } from '../refs';
import "./styles/desktop.scss";

export default function DesktopWraper(props) {
    const { title } = props;
    const { isMobile } = useSelector(state => state.main)

    if (isMobile) return null;
    return <div className="desktop-wraper">
        <Head>
            <title>{title ? `${title} - ${configs.SUB_TITLE}` : configs.SUB_TITLE}</title>
        </Head>
        {props.children}
    </div>
}