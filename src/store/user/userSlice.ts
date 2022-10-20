import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "User"




type UserState = {
    isLoading: boolean,
    error: string,
    user: User | null,
}

const initialState: UserState = {
    isLoading: false,
    error: '',
    user: null
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.user = action.payload
        }
    }
})


export const { login } = userSlice.actions
export default userSlice.reducer