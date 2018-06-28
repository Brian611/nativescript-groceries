import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/throw';

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    register(user: User) {

        return this.http.post(
            Config.apiUrl + "users/register", this.passUser(user)
            ,
            { headers: this.getCommonHeaders() }
        )
            .catch(this.handleErrors);
    }


    login(user: User) {
        return this.http.post(
            Config.apiUrl + "users/authenticate",
            this.passUser(user),
            { headers: this.getCommonHeaders() }
        )
            .catch(this.handleErrors);
    }

    getCommonHeaders() {
        let headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");
        return headers;
    }

    handleErrors(error: HttpErrorResponse) {
        console.log(JSON.stringify(error.error));
        return Observable.throw(error);
    }

    passUser(user: User) {
        return {
            name: user.name,
            email: user.email,
            password: user.password
        }
    }
}