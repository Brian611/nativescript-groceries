import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "~/shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

@Component({
    selector: "my-app",
    templateUrl: "pages/login/login.html",
    providers: [UserService],
    styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn: boolean = true;
    @ViewChild("container") container: ElementRef;
    isLoading: boolean = false;

    constructor(private userService: UserService, private router: Router, private page: Page) {
        this.user = new User("b@gmail.com", "123456", "Brian");
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    }

    async submit() {
        if (!this.user.isValidEmail) {
            alert("Enter a valid email address .");
            return;
        }
        if (this.isLoggingIn) {
            await this.login();
        } else {
            await this.signUp();
        }
    }

    async login() {
        this.isLoading = true;
        try {
            const user = await this.userService.login(this.user);
            if (user) this.router.navigate(["/list"]);
            this.isLoading = false;
        } catch (error) {
            alert(error.error);
            this.isLoading = false;
        }
    }

    async signUp() {
        this.isLoading = true;
        try {
            await this.userService.register(this.user);
            this.toggleDisplay();
            this.isLoading = false;
        } catch (error) {
            console.dir(error.error);
            alert(error.error);
            this.isLoading = false;
        }
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
        let container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#DEC3AF"),
            duration: 200
        });
    }
}