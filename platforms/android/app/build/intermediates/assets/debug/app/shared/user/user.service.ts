import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "./user";
import { Config } from "../config";
import { getCommonHeaders } from "../../utils/helpers";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    async register(user: User): Promise<User> {
        return await this.http.post<User>(
            Config.apiUrl + "users/register",
            this.passUser(user),
            { headers: getCommonHeaders() }
        ).toPromise();
    }


    async login(user: User): Promise<User> {
        return await this.http.post<User>(
            Config.apiUrl + "users/authenticate",
            this.passUser(user),
            { headers: getCommonHeaders() }
        ).toPromise();
    }


    passUser(user: User) {
        return {
            name: user.name,
            email: user.email,
            password: user.password
        }
    }
}