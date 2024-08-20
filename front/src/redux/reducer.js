import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userAppointments: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },

        setUserAppointments: (state, action) => {
            state.userAppointments = action.payload

        },

        clearUser: (state) => {
            state.user = null
            state.userAppointments = []
        },

        cancelApointment: (state, action) => {
            const appointmentId = action.payload
            const appointment = state.userAppointments.find(app => app.id === appointmentId)

            if (appointment) {
                appointment.status = "cancelled"
            }
        },

        addAppointment: (state, action) => {
            if (!state.userAppointments) {
                state.userAppointments = []
            }

            state.userAppointments.push(action.payload)

        },


    }


})

export const { setUser, setUserAppointments, clearUser, cancelApointment, addAppointment } = userSlice.actions
