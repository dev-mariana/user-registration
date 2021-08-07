import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUserAlreadyExist } from "./is-user-already-exists";

export class User {
    id: number;

    @IsUserAlreadyExist({ message: 'must be a unique.' })
    @IsNotEmpty({ message: 'username must be required.'})
    @IsString({ message: 'username must be a string.'})
    username: string;

    @IsEmail({}, { message: 'email must be a valid email address.'})
    email: string;

    @Expose({ name: 'password' })
    @Exclude({ toPlainOnly: true })
    @IsNotEmpty({ message: 'password is required.'})
    password: string;

    @IsNotEmpty({ message: 'full name is required.'})
    fullName: string;
    entryDate: Date;
}