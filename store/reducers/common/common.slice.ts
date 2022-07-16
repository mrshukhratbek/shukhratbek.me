import { createSlice } from "@reduxjs/toolkit";

export const name = 'common'

const initialState = {}

export const {actions: commonActions, reducer: commonReducers} = createSlice({
  name,
  initialState,
  reducers: {}
})
