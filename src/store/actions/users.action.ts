import actionCreatorFactory from "typescript-fsa";
import { IUser } from "../models/user.interface";

const actionCreator = actionCreatorFactory();

export const ADD_ADMIN: string = "ADD_ADMIN";
export const REMOVE_ADMIN: string = "REMOVE_ADMIN";

// export function addAdmin(user: IUser): IAddAdminActionType {
//     return { type: ADD_ADMIN, user: user };
// }

export const addAdmin = actionCreator<IUser>(ADD_ADMIN);

// export function removeAdmin(user: IUser): IRemoveAdminActionType {
//     return { type: REMOVE_ADMIN, user: user };
// }

export const removeAdmin = actionCreator<IUser>(REMOVE_ADMIN);


// interface IAddAdminActionType { type: string, user: IUser };
// interface IRemoveAdminActionType { type: string, user: IUser };
