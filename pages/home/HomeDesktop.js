import React from 'react';
import { useSelector } from 'react-redux';
import { DesktopWraper } from '../../refs';

export default function HomeDesktop(props) {
    const { count } = useSelector(state => state.main);
    return <DesktopWraper>
        desktop
        <p>Count: {count}</p>

        <button onClick={() => {
            window.store.dispatch({ type: 'INCREASE' })
        }}>Click</button>
    </DesktopWraper>
}