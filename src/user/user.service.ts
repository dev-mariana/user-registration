import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    // private users: Array<User> = [{
    //     id: 1,
    //     username: 'mari',
    //     email: 'mari@gmail.com',
    //     password: '123',
    //     fullName: 'Mariana Bastos',
    //     entryDate: new Date()
    // }];
    private users: Array<User> = [];

    public searchUsername(username: string): User {
       return this.users.find(user => user.username == username);
    }

    public create(user: User): User {
        this.users.push(user);
        return user;
    }
}