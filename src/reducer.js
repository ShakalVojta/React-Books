export default function reducer(state, action) {
    
    switch (action.type) {
        case 'currency/set':
            return {
                ...state, 
                currency: action.payload
            } 
        case 'theme/toggle':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        case 'language/set': 
        return {
            ...state,
            language: action.payload
        }
        case 'user/login':
            return {
                ...state,
                user: action.payload
            } 
        case 'user/logout':
            return {
                ...state,
                user: null
            }
        case 'cart/add': 
        return {
            ...state,
            shoppingCart: [...state.shoppingCart, action.payload]
        }
        default: return state;
    }
}