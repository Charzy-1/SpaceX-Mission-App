import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch rockets data
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/rockets');
  const data = await response.json();
  return data.map(rocket => ({
    id: rocket.id,
    rocket_name: rocket.name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
    reserved: false, // Initialize with reserved false
  }));
});

// Add the cancelRocketReservation action and reducer
const rocketsSlice = createSlice({
    name: 'rockets',
    initialState: [],
    reducers: {
      reserveRocket: (state, action) => {
        const rocketId = action.payload;
        return state.map(rocket =>
          rocket.id !== rocketId
            ? rocket
            : { ...rocket, reserved: true }
        );
      },
      cancelRocketReservation: (state, action) => {
        const rocketId = action.payload;
        return state.map(rocket =>
          rocket.id !== rocketId
            ? rocket
            : { ...rocket, reserved: false }
        );
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload);
    },
  });
  
  export const { reserveRocket, cancelRocketReservation } = rocketsSlice.actions;
  export default rocketsSlice.reducer;  
