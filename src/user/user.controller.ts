import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Get(':username')
    public searchUsername(@Param('username') username: string) {
        const userFound = this.userService.searchUsername(username);

        if(!userFound) {
            throw new NotFoundException({ 
                statusCode: HttpStatus.NOT_FOUND, message: 'User not found.' 
            });
        }

        return userFound;
    }

    @Post()
    public create(@Body() user: User): NestResponse {
        const created_user = this.userService.create(user);
        return new NestResponseBuilder()
            .withStatus(HttpStatus.CREATED)
            .withHeaders({ 'location': `/users/${created_user.username}` })
            .withBody(created_user).build(); 
    }
}