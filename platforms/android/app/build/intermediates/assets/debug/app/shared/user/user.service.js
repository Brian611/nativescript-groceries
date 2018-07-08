"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var config_1 = require("../config");
var helpers_1 = require("../../utils/helpers");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(config_1.Config.apiUrl + "users/register", this.passUser(user), { headers: helpers_1.getCommonHeaders() }).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(config_1.Config.apiUrl + "users/authenticate", this.passUser(user), { headers: helpers_1.getCommonHeaders() }).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.passUser = function (user) {
        return {
            name: user.name,
            email: user.email,
            password: user.password
        };
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUdsRCxvQ0FBbUM7QUFDbkMsK0NBQXVEO0FBR3ZEO0lBQ0kscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRW5DLDhCQUFRLEdBQWQsVUFBZSxJQUFVOzs7OzRCQUNkLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN2QixlQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUNuQixFQUFFLE9BQU8sRUFBRSwwQkFBZ0IsRUFBRSxFQUFFLENBQ2xDLENBQUMsU0FBUyxFQUFFLEVBQUE7NEJBSmIsc0JBQU8sU0FJTSxFQUFDOzs7O0tBQ2pCO0lBR0ssMkJBQUssR0FBWCxVQUFZLElBQVU7Ozs7NEJBQ1gscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3ZCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLEVBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ25CLEVBQUUsT0FBTyxFQUFFLDBCQUFnQixFQUFFLEVBQUUsQ0FDbEMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs0QkFKYixzQkFBTyxTQUlNLEVBQUM7Ozs7S0FDakI7SUFHRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLE1BQU0sQ0FBQztZQUNILElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQTtJQUNMLENBQUM7SUEzQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUVpQixpQkFBVTtPQUQzQixXQUFXLENBNEJ2QjtJQUFELGtCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IGdldENvbW1vbkhlYWRlcnMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGVscGVyc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICBhc3luYyByZWdpc3Rlcih1c2VyOiBVc2VyKTogUHJvbWlzZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHAucG9zdDxVc2VyPihcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBcInVzZXJzL3JlZ2lzdGVyXCIsXG4gICAgICAgICAgICB0aGlzLnBhc3NVc2VyKHVzZXIpLFxuICAgICAgICAgICAgeyBoZWFkZXJzOiBnZXRDb21tb25IZWFkZXJzKCkgfVxuICAgICAgICApLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgbG9naW4odXNlcjogVXNlcik6IFByb21pc2U8VXNlcj4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLnBvc3Q8VXNlcj4oXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJ1c2Vycy9hdXRoZW50aWNhdGVcIixcbiAgICAgICAgICAgIHRoaXMucGFzc1VzZXIodXNlciksXG4gICAgICAgICAgICB7IGhlYWRlcnM6IGdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgICAgICkudG9Qcm9taXNlKCk7XG4gICAgfVxuXG5cbiAgICBwYXNzVXNlcih1c2VyOiBVc2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgIH1cbiAgICB9XG59Il19