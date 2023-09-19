import { UIState } from ".";

type UIActions = 
| {type: 'UI - Open Sidebar'}
| {type: 'UI - Close Sidebar'}

export const UIReducer = (state: UIState, action: UIActions): UIState => {
    switch (action.type) {
        case "UI - Open Sidebar":
            return {
                ...state,
                sideMenuOpen: true
            }            
        case 'UI - Close Sidebar':
            return{
                ...state,
                sideMenuOpen: false
            }
        default:
            return state;
    }
};
