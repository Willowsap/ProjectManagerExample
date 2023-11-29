import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean = false;
    currentUser: User | null = null;

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
    }): User | null {
        const user: User | null = this.findUser({email});
        if (user) {
            if (user.password === password) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.isLoggedIn = true;
                this.currentUser = user;
                return user;
            }
        }
        return null;
    }

    logout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        localStorage.removeItem("currentUser");
    }

    autoLogIn() {
        const userString = localStorage.getItem("currentUser");
        if (userString) {
            this.currentUser = JSON.parse(userString);
            this.isLoggedIn = true;
        }
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