import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'




const store = configureStore({
    reducer: {
        user: userReducer,
        // accounts: accountsReducer,
        // payments: paymentsReducer,
        // recurringPayments: recurringPaymentsReducer,
        // roundUps: roundUpsReducer,
        // transactions: transactionsReducer,
        // recommendations: recommendationsReducer
        // isLoading: isLoadingReducer,
        // error: errorReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store;