import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit";

import axios from "axios";

export const postUserLoged = createAsyncThunk("userLoged", (user) => {
    return axios.post(`/api/auth/login`, user).then((res) => {
        return res.data
    });
});

export const postUserRegister = createAsyncThunk("userRegister", (user) => {
    return axios

        .post(`/api/auth/register`, user)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
});

export const removeFromBasket = createAsyncThunk("REMOVE_FROM_BASKET", ({user, id}) => {
    return axios.delete(`/api/users/${user}/basket/${id}`).then(res => res.data)
});

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
    return axios.get("/api/auth/logout").then((r) => console.log(r));
});

export const setUser = createAction("SET_USER");

const reducerUser = createReducer(
    {},
    {
        [setUser]: (state, action) => (state = action.payload),
        [postUserLoged.fulfilled]: (state, action) => (state = action.payload[0]),
        [postUserLoged.rejected]: (state, action) => console.log(action),
        [postUserRegister.fulfilled]: (state, action) => (state = {}),
        [sendLogoutRequest.fulfilled]: (state, action) => (state = {}),
        [removeFromBasket.fulfilled]: (state, action) => (state = action.payload),
    }
);

export default reducerUser;

// export const addToBasket = createAsyncThunk("ADD_TO_BASKET", (id, cantidad) => {
//     return axios.post(`/api/users/${id}/basket`, { _id: id, cantidad: cantidad }).then(res => res)
// });


