import { act } from "react";

export const formReducer = (state, action) =>{
    switch (action.type) { 
        case 'INPUT_CHANGE':
            let formisValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formisValid = formisValid && action.isValid;
                } else {
                    formisValid = formisValid && state.inputs[inputId].isValid
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {value:action.value, isValid:action.isValid}
                },
                isValid: formisValid
            };
        default:
            return state
    }
}