import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: {
      entities: [],
      status: "idle",
      error: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.value.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, { payload: todos }) => {
        state.value.status = "success";
        state.value.entities = todos;
        state.value.error = false;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.value.status = "failure";
        state.value.error = true;
      });
  },
});

const API_URL = "https://jsonplaceholder.typicode.com/todos?userId=1";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function () {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed, status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
);

export default todosSlice.reducer;
