import { IUser } from "../../store/models/user.interface";

export namespace Response {
    export type GetUsers = { users: IUser[]; }
}