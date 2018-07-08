"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("~/shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, page) {
        this.userService = userService;
        this.router = router;
        this.page = page;
        this.isLoggingIn = true;
        this.isLoading = false;
        this.user = new user_1.User("b@gmail.com", "123456", "Brian");
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.user.isValidEmail) {
                            alert("Enter a valid email address .");
                            return [2 /*return*/];
                        }
                        if (!this.isLoggingIn) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.login()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.signUp()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userService.login(this.user)];
                    case 2:
                        user = _a.sent();
                        if (user)
                            this.router.navigate(["/list"]);
                        this.isLoading = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        alert(error_1.error);
                        this.isLoading = false;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.signUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userService.register(this.user)];
                    case 2:
                        _a.sent();
                        this.toggleDisplay();
                        this.isLoading = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.dir(error_2.error);
                        alert(error_2.error);
                        this.isLoading = false;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#DEC3AF"),
            duration: 200
        });
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/login/login.html",
            providers: [user_service_1.UserService],
            styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDJDQUEwQztBQUMxQywrREFBNkQ7QUFDN0QsMENBQXlDO0FBQ3pDLGdDQUErQjtBQUMvQiwrQkFBOEI7QUFTOUI7SUFNSSx3QkFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsSUFBVTtRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSnhGLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQ2pELENBQUM7SUFFSywrQkFBTSxHQUFaOzs7Ozt3QkFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs0QkFDMUIsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7NEJBQ3ZDLE1BQU0sZ0JBQUM7d0JBQ1gsQ0FBQzs2QkFDRyxJQUFJLENBQUMsV0FBVyxFQUFoQix3QkFBZ0I7d0JBQ2hCLHFCQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQWxCLFNBQWtCLENBQUM7OzRCQUVuQixxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFuQixTQUFtQixDQUFDOzs7Ozs7S0FFM0I7SUFFSyw4QkFBSyxHQUFYOzs7Ozs7d0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7d0JBRUwscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBOUMsSUFBSSxHQUFHLFNBQXVDO3dCQUNwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7Ozt3QkFFdkIsS0FBSyxDQUFDLE9BQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7OztLQUU5QjtJQUVLLCtCQUFNLEdBQVo7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7Ozt3QkFFbEIscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBMUMsU0FBMEMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO3dCQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7Ozt3QkFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3pCLEtBQUssQ0FBQyxPQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7Ozs7S0FFOUI7SUFFRCxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNkLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDO1lBQzdFLFFBQVEsRUFBRSxHQUFHO1NBQ2hCLENBQUMsQ0FBQztJQUNQLENBQUM7SUF4RHVCO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFZLGlCQUFVO3FEQUFDO0lBSHJDLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUN2RSxDQUFDO3lDQU9tQywwQkFBVyxFQUFrQixlQUFNLEVBQWdCLFdBQUk7T0FOL0UsY0FBYyxDQTREMUI7SUFBRCxxQkFBQztDQUFBLEFBNURELElBNERDO0FBNURZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogWydwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzJywgJ3BhZ2VzL2xvZ2luL2xvZ2luLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIGlzTG9nZ2luZ0luOiBib29sZWFuID0gdHJ1ZTtcbiAgICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoXCJiQGdtYWlsLmNvbVwiLCBcIjEyMzQ1NlwiLCBcIkJyaWFuXCIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfbG9naW5cIjtcbiAgICB9XG5cbiAgICBhc3luYyBzdWJtaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VyLmlzVmFsaWRFbWFpbCkge1xuICAgICAgICAgICAgYWxlcnQoXCJFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MgLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zaWduVXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGxvZ2luKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXIpIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvci5lcnJvcik7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2lnblVwKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcik7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihlcnJvci5lcnJvcik7XG4gICAgICAgICAgICBhbGVydChlcnJvci5lcnJvcik7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgICAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29udGFpbmVyLmFuaW1hdGUoe1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCIjREVDM0FGXCIpLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgICB9KTtcbiAgICB9XG59Il19