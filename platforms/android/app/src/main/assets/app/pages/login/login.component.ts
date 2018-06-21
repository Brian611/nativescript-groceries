import { Component } from "@angular/core";
import { User } from "~/shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
@Component({
    selector: "my-app",
    templateUrl: "pages/login/login.html",
    providers: [UserService],
    styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
})
export class LoginComponent {
    user: User;
    isLoggingIn: boolean = true;

    constructor(private userService: UserService, private router: Router) {
        this.user = new User();
        this.user.email = "yes@gmail.com";
        this.user.password = "password";
    }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }
    login() {
        this.router.navigate(["/list"]);
    }
    signUp() {

    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

}