import {createSlice} from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {restaurants: []},
    reducers: {
        setRestaurant(state, action) {
            state.restaurants = action.payload;
        },
    }
});

const restaurantActions = restaurantSlice.actions;

export default restaurantSlice;
export {restaurantActions}
