import { Controller, Post, Body } from '@nestjs/common';

import { UsersService } from './users.service';

import { UserCreateRequestDto } from './dto/request/user-create-request.dto';
import { UserUpdateRequestDto } from './dto/request/user-update-request.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: UserCreateRequestDto) {
        return await this.usersService.createUser(
            createUserDto.name,
            createUserDto.email,
            createUserDto.password,
        );
    }
}
