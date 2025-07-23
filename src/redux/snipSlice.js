import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  snips: localStorage.getItem("snips")
    ? JSON.parse(localStorage.getItem("snips"))
    : []
}

const snipSlice = createSlice({
  name: "snip",
  initialState,
  reducers: {
    addToSnips: (state, action) => {
      const snip = action.payload
      const index = state.snips.findIndex((item) => item._id === snip._id)

      if (index >= 0) {
        // If the course is already in the Pastes, do not modify the quantity
        toast.error("Snip already exist")
        return
      }
      // If the course is not in the Pastes, add it to the Pastes
      state.snips.push(snip)
      
      // Update to localstorage
      localStorage.setItem("snips", JSON.stringify(state.snips))
      // show toast
      toast.success("Snip added")
    },

    updateSnips: (state, action) => {
      const snip = action.payload
      const index = state.snips.findIndex((item) => item._id === snip._id)

      if (index >= 0) {
        // If the course is found in the Pastes, update it
        state.snips[index] = snip
        // Update to localstorage
        localStorage.setItem("snips", JSON.stringify(state.snips))
        // show toast
        toast.success("Snip updated")
      }
    },
    removeFromSnips: (state, action) => {
      const snipId = action.payload

      console.log(snipId)
      const index = state.snips.findIndex((item) => item._id === snipId)

      if (index >= 0) {
        // If the course is found in the Pastes, remove it
        state.snips.splice(index, 1)
        // Update to localstorage
        localStorage.setItem("snips", JSON.stringify(state.snips))
        // show toast
        toast.success("Snip deleted")
      }
    },
    resetSnip: (state) => {
      state.snips = []
      // Update to localstorage
      localStorage.removeItem("snips")
    },
  },
})

export const { addToSnips, removeFromSnips, updateSnips } = snipSlice.actions

export default snipSlice.reducer