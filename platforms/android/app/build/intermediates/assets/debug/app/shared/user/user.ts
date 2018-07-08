import * as validator from "email-validator";

export class User {
    constructor(
        public email: string,
        public password: string,
        public name?: string,
        public userId?: string
    ) { }

    get isValidEmail() {
        return validator.validate(this.email);
    }
}