import { createSlice } from "@reduxjs/toolkit"

const componentTypeSlice = createSlice({
  name: "component-type",
  initialState: {
    type: "vertical"
  },
  reducers: {
    changeType: (state) => {
      if (state.type === "vertical") {
        state.type = "horizontal"
      } else {
        state.type = "vertical"
      }
    }
  }
})

export const { changeType } = componentTypeSlice.actions

export default componentTypeSlice.reducer
