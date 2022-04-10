import { configureStore} from '@reduxjs/toolkit';
import restaurantSlice from './restaurants';


const store = configureStore({
    reducer: {
        restaurant: restaurantSlice.reducer
    }
})

export default store;
