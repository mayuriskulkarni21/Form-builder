import { constants } from '../../constants/index.js';

let initialState = {
    formData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_FORM:
            return {
                formData: [...state.formData, action.data]
            }
        default:
            return state
    }
}