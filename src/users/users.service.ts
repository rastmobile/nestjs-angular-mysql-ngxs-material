import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 1,
      name: 'Mehmet',
    },
    {
      id: 2,
      name: 'Alp',
    },
    {
      id: 3,
      name: 'Akif',
    },
  ];

  async getUsers(): Promise<User[]> {
    return this.users;
  }
}
