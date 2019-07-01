import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'dist/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}
