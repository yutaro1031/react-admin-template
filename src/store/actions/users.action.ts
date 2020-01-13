import actionCreatorFactory from "typescript-fsa";
import { IUser } from "../models/user.interface";
import { fetchUsers } from "../../common/client/users.client";
import { Response } from "../../common/types/Response.types";

const actionCreator = actionCreatorFactory();

// export const ADD_ADMIN: string = "ADD_ADMIN";
// export const REMOVE_ADMIN: string = "REMOVE_ADMIN";

// export function addAdmin(user: IUser): IAddAdminActionType {
//     return { type: ADD_ADMIN, user: user };
// }

export const addAdmin = actionCreator<IUser>("ADD_ADMIN");

// export function removeAdmin(user: IUser): IRemoveAdminActionType {
//     return { type: REMOVE_ADMIN, user: user };
// }

export const removeAdmin = actionCreator<IUser>("REMOVE_ADMIN");


// interface IAddAdminActionType { type: string, user: IUser };
// interface IRemoveAdminActionType { type: string, user: IUser };

type GetUsersParams = void;
type GetUsersSuccess = Response.GetUsers;
type GetUsersFailed = Error;

export const getUsersAction = actionCreator.async<
    GetUsersParams,
    GetUsersSuccess,
    GetUsersFailed
>("GET_USERS")

export const getUsers = () => {
    return async (dispatch: any) => {
        dispatch(getUsersAction.started());
        try {
          const res = await fetchUsers()
          dispatch(getUsersAction.done({
            result: res.data
          }));
        } catch (e) {
          dispatch(getUsersAction.failed(e));
        }
      };
}
