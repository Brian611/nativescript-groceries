"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("email-validator");
var User = /** @class */ (function () {
    function User(email, password, name, userId) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.userId = userId;
    }
    Object.defineProperty(User.prototype, "isValidEmail", {
        get: function () {
            return validator.validate(this.email);
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkM7QUFFN0M7SUFDSSxjQUNXLEtBQWEsRUFDYixRQUFnQixFQUNoQixJQUFhLEVBQ2IsTUFBZTtRQUhmLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLFNBQUksR0FBSixJQUFJLENBQVM7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFTO0lBQ3RCLENBQUM7SUFFTCxzQkFBSSw4QkFBWTthQUFoQjtZQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUNMLFdBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdmFsaWRhdG9yIGZyb20gXCJlbWFpbC12YWxpZGF0b3JcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZW1haWw6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBuYW1lPzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdXNlcklkPzogc3RyaW5nXG4gICAgKSB7IH1cblxuICAgIGdldCBpc1ZhbGlkRW1haWwoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUodGhpcy5lbWFpbCk7XG4gICAgfVxufSJdfQ==