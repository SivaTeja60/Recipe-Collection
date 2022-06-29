import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
  name: "LoginRedux",
  initialState: {
    login: false,
    userdata: [],
  },
  reducers: {
    loginReducer: (state, action) => {
      state.login = action.payload;
    },
    updateUserData: (state, action) => {
      state.userdata = [...action.payload.userdata];
    },
    updateData: (state, action) => {
      state.userdata = [...action.payload];
    },
  },
});

export const getRecipe = (params) => async (dispatch, getState) => {
  const response = await fetch(
    "https://cooking-bf835-default-rtdb.firebaseio.com//collection.json"
  );
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();
  
  const loadedData = [];

    for (const key in data) {
      loadedData.push({
        id: data[key].id,
        name: data[key].name,
        ingredients: data[key].ingredients,
        instructions: data[key].instructions,
        category: data[key].category,
        dateAdded: data[key].dateAdded,
        dateEdited: data[key].dateEdited,
        notes: data[key].notes,
        serving:data[key].serving
      }
      );
    }
    dispatch(updateData(loadedData))
};

export const { loginReducer, updateUserData,updateData } = loginSlice.actions;

export default loginSlice.reducer;
