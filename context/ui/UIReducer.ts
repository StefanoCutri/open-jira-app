import { UIState } from ".";

type UIActions =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "UI - Adding Entry"; payload: boolean }
  | { type: "UI - Start Draggin" }
  | { type: "UI - End Draggin" };

export const UIReducer = (state: UIState, action: UIActions): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "UI - Close Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    case "UI - Adding Entry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    case "UI - Start Draggin":
      return {
        ...state,
        isDragging: true,
      };

    case "UI - End Draggin":
      return {
        ...state,
        isDragging: false,
      };
    default:
      return state;
  }
};
