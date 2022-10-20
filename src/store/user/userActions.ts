import { createAction } from "@reduxjs/toolkit";

export const loginUserRequest = createAction("auth/loginUserRequest");
export const loginUserSuccess = createAction("auth/loginUserSuccess");
export const loginUserError = createAction("auth/loginUserError");