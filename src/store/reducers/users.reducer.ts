import { reducerWithInitialState } from "typescript-fsa-reducers";
import { addAdmin, removeAdmin, getUsersAction } from "../actions/users.action";

import { IUserState, IActionBase } from "../models/root.interface";
// import { ADD_ADMIN, REMOVE_ADMIN } from "../actions/users.action";
import { IUser } from "../models/user.interface";

const initialState: IUserState = {
    users: [
        { id: 1, firstName: "John", lastName: "Smith", email: "jsmith@em.pl", },
        { id: 2, firstName: "Jannice", lastName: "Bing", email: "ohmy@fr.pl" }
    ],
    admins: [
        { id: 3, firstName: "Jannet", lastName: "Crock", email: "jcrock@em.pl" },
    ]
};

export const userReducer = reducerWithInitialState(initialState)
    .case(addAdmin, (state, payload: IUser) => ({
        ...state,
        users: state.users.filter(x => x.id !== payload.id),
        admins: [...state.admins, payload]
    }))
    .case(removeAdmin, (state, payload: IUser) => ({
        ...state,
        users: [...state.users, payload],
        admins: state.admins.filter(x => x.id !== payload.id)
    }))
    .case(getUsersAction.started, state => ({ ...state }))
    .case(getUsersAction.failed, state => ({ ...state }))
    .case(getUsersAction.done, (state, payload) => ({
        ...state,
        users: [...state.users, ...payload.result.users],
        admins: [...state.admins]
    }))

// function userReducer(state: IUserState = initialState, action: IActionBase): IUserState {
//     const user: IUser = action.payload;
//     switch (action.type) {
//         case ADD_ADMIN: {
//             return { ...state, users: state.users.filter(x=>x.id !== user.id), admins: [...state.admins, user]};
//         }
//         case REMOVE_ADMIN: {
//             return { ...state, admins: state.admins.filter(x=>x.id !== user.id), users: [...state.users, user]};
//         }
//         default:
//             return state;
//     }
// }

export default userReducer;