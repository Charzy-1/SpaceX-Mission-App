import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch missions data
export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false, // Initialize with reserved false
  }));
});

// Add the leaveMission action and reducer
const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      return state.map((mission) => (mission.mission_id !== missionId
        ? mission
        : { ...mission, reserved: true }));
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      return state.map((mission) => (mission.mission_id !== missionId
        ? mission
        : { ...mission, reserved: false }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => action.payload);
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
