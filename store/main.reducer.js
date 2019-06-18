const defaultState = {
    isMobile: null,
    count: 1,
}

export const mainReducer = (state = defaultState, action) => {
    const { type, result } = action;
    if (type === 'SET_IS_MOBILE') return { ...state, isMobile: result }
    if (type === 'INCREASE') return { ...state, count: state.count + 1 }
    return state;
}