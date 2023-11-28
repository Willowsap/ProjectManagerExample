import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    createUser(user: User) {
        let users: Array<User> = [];
        const userString = localStorage.getItem("users");
        if (userString) {
            users = JSON.parse(userString);
        }
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    }

    login(
        {email, password}:
        {email: string, password: string
    }) {
        const user = this.findUser({email});
    }

    private findUser({email}: {email: string}): User | null {
        const userString = localStorage.getItem("users");
        if (userString) {
            const users: Array<User> = JSON.parse(userString);
            for (let user of users) {
                if (user.email === email) {
                    return user;
                }
            }
        }
        return null;
    }
}