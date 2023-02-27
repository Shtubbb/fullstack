import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurantDict : {},
    restaurantIds : [],
    myRestaurantIds: ["0", "1"],
    needUpdate: true
};

function norm(restaurants) {
    const restaurantDict = {}
    const restaurantIds = []
    for (let restaurant in restaurants) {
        restaurantIds.push(restaurant)
        restaurantDict[restaurant] = restaurants[restaurant]
    }
    return {
        restaurantIds,
        restaurantDict
    }
}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        SetRestaurants : (state, action) => {
            const { restaurantIds, restaurantDict } = norm(action.payload);

            state.restaurantIds = restaurantIds;
            state.restaurantDict = restaurantDict;
            state.needUpdate = false;
        },

        ShowMyRestaurants : (state, action) => {
            state.myRestaurantIds = action.payload;
            state.needUpdate = false;
        },
        AddMyRestaurant : (state, action) => {
            const id = action.payload;
            if (state.myRestaurantIds.indexOf(id) === -1) {
                state.myRestaurantIds.push(id);
            }
            state.needUpdate = false;
        },
        RateRestaurant : (state, action) => {
            const id  = action.payload
            state.myRestaurantIds.splice(state.myRestaurantIds.indexOf(id), 1);
            state.needUpdate = false;
        },
        NeedUpdate : (state) => {
            state.needUpdate = true
        }
    }

});


export const restaurantsReducer = restaurantSlice.reducer;
export const {SetRestaurants, ShowRestaurants, ShowMyRestaurants, AddMyRestaurant, RateRestaurant, NeedUpdate} = restaurantSlice.actions;