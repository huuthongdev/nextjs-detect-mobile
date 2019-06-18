const defaultState = {
    isMobile: null
}

export const mainReducer = (state = defaultState, action) => {
    const { type, result } = action;
    if (type === 'SET_IS_MOBILE') return { ...state, isMobile: result }
    return state;
}