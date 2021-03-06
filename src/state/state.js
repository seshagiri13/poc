import { createStore } from 'redux';

function reducer(state, action) {
    switch (action.type) {
        case 'DELETE':
            for (var i = 0; i < state.parsedata.shoppingbag[0].items.length; i++) {
                if (state.parsedata.shoppingbag[0].items[i].id == action.data.id) {
                    state.parsedata.shoppingbag[0].items.splice(i, 1);
                    break;
                }
            }
            return state;
            case 'EDIT':
            for (var i = 0; i < state.parsedata.shoppingbag[0].items.length; i++) {
                if (state.parsedata.shoppingbag[0].items[i].id == action.data.id) {
                    state.parsedata.shoppingbag[0].items[i].Size= action.data.size;
                    state.parsedata.shoppingbag[0].items[i].Quantity= action.data.quantity;
                    break;
                }
            }
            return state;
        case 'initiate':
            state = action.data;
            return state;
        default:
            return state;
    }

}

const store = createStore(reducer,{
    "id": "id",
    "name": "",
    "Description": "",
    "restaurants": [
    ]
});




module.exports = {
    store: store
}


