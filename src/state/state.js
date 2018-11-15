import { createStore } from 'redux';

function reducer(state, action) {
    switch (action.type) {
        case 'DELETE':
            for (var i = 0; i < state.parsedata.restaurants.length; i++) {
                if (state.parsedata.restaurants[i].id == action.data.id) {
                    state.parsedata.restaurants.splice(i, 1);
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


